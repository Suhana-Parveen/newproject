import {View, StyleSheet, ScrollView, KeyboardAvoidingView, ColorPropType} from 'react-native';
import InputText from '../../components/InputText';
import AppIcon from '../../components/AppIcon';
import React, { useEffect, useState } from 'react';
import AuthenticationButton from '../../components/AuthenticationButton';
import {getData} from '../../utility/Utility';
import COLORS from '../../consts/colors';
import {Dimensions} from 'react-native';

const windowWidth= Dimensions.get('window').window;
const windowHeight= Dimensions.get('window').height;




const LoginScreen = ({navigation}) => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  getUserData = async() =>{
    try {
      let user = await getData(email)
       console.log(JSON.stringify(user))
       if(user.email== email && user.password == password){
        console.log('success');
        navigation.navigate('HomePage');
       }
       else{
         alert("wrong")
       }
    } catch (error) {
      
    }
  }


  return (
<ScrollView>
<KeyboardAvoidingView>
    <View style={styles.container}>
      <View style={styles.upper}>
        <AppIcon />
        <InputText Placeholder={'Email'} 
        onChangeText={text => setEmail(text)}/>
        <InputText Placeholder={'Password'}
        onChangeText={text => setPassword(text)} secure />
        <AuthenticationButton buttonName={'Login'}
        Onpress={()=>getUserData()}

        />
      </View>
      <View style={styles.lower}>
        <AuthenticationButton
          buttonName={'SignUP'}
          container={styles.lowerButton}
          Onpress={()=> navigation.navigate('SignUP')}
        />
        <AuthenticationButton
          buttonName={'Forgot Password?'}
          container={styles.lowerButton}
          Onpress={() => navigation.navigate('ForgotPassword')}
        />
      </View>
    </View>
</KeyboardAvoidingView>
</ScrollView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  upper: {
    flex:83,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '11%',
    marginBottom:'15.6%' ,
    borderTopLeftRadius: 40,
    borderTopRightRadius:40,
    
    
  },
  container: {
    flex: 1,
    backgroundColor:COLORS.yellow,
    height:648,
    width:360,
    
  },
  lower: {
    flex:17,
    marginTop:19,
    justifyContent:'flex-end',
    flexDirection: 'row',
    
  },
  lowerButton: {
    width: '50%',
    borderRadius: 0,
  },
});
