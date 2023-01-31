import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/home";
import ListRestaurants from "../screens/restaurants/index";


function AppRoutes() {

    const Tab = createBottomTabNavigator();

    return <>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name="Restaurantes" component={ListRestaurants} />
            </Tab.Navigator>
        </NavigationContainer>
    </>

}

export default AppRoutes;