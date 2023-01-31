
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Card({ name, imagem }) {
    return <View style={design.card}>
        <Image source={imagem} style={design.image}/>
        <Text style={design.txt}>{name}</Text>
    </View>
}

const design = StyleSheet.create({
    card:
    {
        alignItems: "center",
        paddingTop: 12,
        paddingRight: 8,
    },
    image:
    {
        borderRadius: 10,
        width: 160,
        height: 110,

    },
    txt:
    {
        top: 15,
        left: 8,
        fontWeight: "bold",
        elevation: 4,
        color: "#fff",
        position: "absolute",
    },
})
