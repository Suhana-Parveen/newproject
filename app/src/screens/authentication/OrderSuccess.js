import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const OrderSuccess = () => {
    return (
        <View>
            <Text style={styles.head}>Order Placed Successfully</Text>
        </View>
    )
}

export default OrderSuccess;
const styles = StyleSheet.create({
    head:{
        fontSize:30,
        color:'black'
    }
});
