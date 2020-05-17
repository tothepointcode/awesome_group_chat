import * as React from 'react';

// UI
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { welcome } from './../style';

const Welcome = ({navigation}) => {
  const toCreatePage = () => {
    navigation.navigate("Create");
  }
  return (
    <View>
      <ImageBackground style={welcome.background} source={require('./../assets/croods.png')}>
        <View style={welcome.body}>
          <Text style={welcome.welcomeText}>Welcome</Text>
          <Text style={welcome.welcomeText2}>to Awesome Chat Group</Text>
          <TouchableOpacity onPress={toCreatePage} style={welcome.button}>
            <MaterialIcons name="group-add" size={24} style={welcome.icon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
