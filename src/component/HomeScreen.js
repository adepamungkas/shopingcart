import React, { Component } from 'react';
import { View, Text , StyleSheet ,FlatList, Button, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'
import { fetchProducts,addProduct,removeProduct } from '../redux/IndexAction'

 class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.props.fetchProducts();
        console.log(this.props)
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} ></View>
                    <View style={{width: 150, height: 50, backgroundColor: 'skyblue'}} >
                        <Button  title="Books" onPress={() => console.log(this.props.data)} />
                    </View>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} ></View>
                </View>

            </ScrollView>
        );
    }
}

const mapStateToProps = (state ) => {

    return {
        data: state.product,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct:(e)=>dispatch(addProduct(e)),
        removeProduct:()=>dispatch(removeProduct()),

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
