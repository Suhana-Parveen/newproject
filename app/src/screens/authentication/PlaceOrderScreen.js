import React from 'react'
import { View, Text ,Image,StyleSheet} from 'react-native';

const PlaceOrderScreen = () => {
    return (
        <View>
            
            <Image source={require('../../../res/assets/success.png')}
            style={styles.img}/>
            <Text style={styles.text}>Order Placed Successfully</Text>
            <Text style={styles.text}>Pay Cash On Delivery . . . .</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    img: {
        marginLeft:'23%',
        marginTop:'40%',
        height: 200,
        width: 200,
        borderRadius: 100
    },
    text:{
        fontSize:24,
        marginLeft:'10%',
        marginTop:'12%',
        fontWeight:'bold',
    }
});



export default PlaceOrderScreen;

