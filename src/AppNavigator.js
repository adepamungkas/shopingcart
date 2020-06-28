import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './component/HomeScreen';
import CartIcon from './component/CartIcon';
import CartScreen from './component/CartScreen'

const Stack = createStackNavigator();


function AppNavigator() {
    const ref = React.useRef(null);

    return (

        <NavigationContainer ref={ref}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                              component={HomeScreen}
                              options={{
                                  title: 'My home',
                                  headerRight: () => <CartIcon/>
                              }

                              }
                />
                <Stack.Screen name="CartIcon"
                              component={CartIcon}
                              options={{title: 'Cart'}}
                />


                <Stack.Screen name="Cart"
                              component={CartScreen}
                              options={{title: 'Cart Screen'}}
                />

            </Stack.Navigator>
        </NavigationContainer>


    );
}

export default AppNavigator;
