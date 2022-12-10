import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
                <Text>HomeScreen</Text>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})