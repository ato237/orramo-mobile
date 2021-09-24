import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: "red",
            marginTop: StatusBar.currentHeight,
        }}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
}

export default Home
