import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Header from "./components/header";
import Categories from "./components/categories";

export default function Home()
{
    return <ScrollView>
        <Header/>
        <Categories/>
    </ScrollView>
}