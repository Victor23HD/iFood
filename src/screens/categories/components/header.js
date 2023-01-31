import React from "react";
import { View, Text, Image, StyleSheet, DevSettings } from "react-native";
import { carriesHeader } from "../services/LoadData";

export default function Header()
{

    const header = carriesHeader();
    
    return <View style={design.header}>
    <Image source={header.logo} style={design.logo}/>
    </View>
}

const design = StyleSheet.create({
    header:
    {
        top: 5,
        padding: 16,
    },
    logo:
    {
        height: 47,
        width: 90,
    },
    txt:
    {
        marginTop: 24,
        fontSize: 22,
        lineHeight: 42,
        fontWeight: "800",
    },
})