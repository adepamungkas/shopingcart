import React, {Component} from 'react';
import {View, Text, StyleSheet,Button, ScrollView} from 'react-native';
import {connect} from "react-redux";
import { ListItem} from 'react-native-elements';
import { fetchProducts, checkout} from "../redux/product/ProductAction";


class CartScreen extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        const productList = this.props.selected.map((selected, i) => {
            return (
                    <ListItem
                        key={i}
                        title={selected.item}
                        badge={{ value: selected.qty, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
                        bottomDivider
                    />
            )
        })

        return (
            <ScrollView>
            <View>
                {
                    this.props.selected.length > 0 ?
                        productList :
                        <Text style={styles.baseText}>
                           No item recorded
                        </Text>
                }
                <Button
                    title="Checkout"
                    onPress={()=>this.props.checkout() }
                />

            </View>
            </ScrollView>
        )
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    baseText: {
        fontWeight: 'normal',
        fontSize :20,
        textAlign :'center',

    },
});

const mapStateToProps = (state) => {
    var selectedProduct = state.selectedProduct;
    var result_grouping = [];
    selectedProduct.reduce(function (res, value) {
        if (!res[value.item]) {
            res[value.item] = {item: value.item, qty: 0};
            result_grouping.push(res[value.item])
        }
        res[value.item].qty += value.qty;
        return res;
    }, {});
    return {
        data: state.product,
        selected: result_grouping
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        checkout:() =>dispatch(checkout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
