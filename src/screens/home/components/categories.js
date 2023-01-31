import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import useCategories from "../../../../hooks/useCategories";
import Card from "./card";


function Categories()
{
    const [title , list] = useCategories();

    return <View style={design.view}>
    <Text style={design.title}>{title}</Text>
    <FlatList
    data={list}
    numColumns={2}
    renderItem={ ({item: { name, imagem} }) => 
    <Card {...{name, imagem}}/>}
    keyExtractor={item => item.name}/>
    
    </View>
}

const design = StyleSheet.create({
    view:
    {
        padding: 16,
    },  
    title: 
    {
        fontWeight: "600",
        lineHeight: 26,
        fontSize: 22,
    },


}) 

export default Categories;