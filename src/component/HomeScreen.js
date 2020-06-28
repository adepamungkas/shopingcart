import React, { Component } from 'react';
import { View, Text , StyleSheet ,FlatList, Button, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'
import { fetchProducts,addProduct,removeProduct } from '../redux/IndexAction';
import { ListItem } from 'react-native-elements';

 class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.props.fetchProducts();
    }

    render() {

        const productList = this.props.data.map((data,i) => {
            return (
                <ListItem
                    key={i}
                    leftAvatar={{
                        source: { uri: this.props.icon_plus_Url },
                        onPress: ()=>this.props.addProduct(data.id, data.title)
                    }}
                    title={data.title}
                    bottomDivider
                     rightAvatar={{
                         source: { uri: this.props.icon_minus_Url },
                         onPress: ()=>this.props.removeProduct(data.id, data.title)
                     }}
                />
            )
        })


        return (
            <ScrollView style={styles.container}>
                <View>
                    {
                        productList
                    }
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state ) => {

    return {
        data: state.product,
        total_item:state.totalOrder,
        icon_plus_Url : "https://iconarchive.com/icons/martz90/circle-addon1/24/text-plus-icon.png",
        icon_minus_Url : "https://iconarchive.com/icons/iconarchive/red-orb-alphabet/24/Math-minus-icon.png"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct:(id,item)=>dispatch(addProduct(id,item)),
        removeProduct:(id,item)=>dispatch(removeProduct(id,item)),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        paddingTop: 10,
    },

});
