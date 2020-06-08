import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity
} from "react-native";

import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'


const CartIcon = (props) => (
    <TouchableOpacity   >
        <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
            <View style={{
                position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

            }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}></Text>
            </View>
            <Icon name="ios-cart" size={30} />
        </View>
    </TouchableOpacity>

)

export default CartIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});
