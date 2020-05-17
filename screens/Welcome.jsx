import React, { useEffect, useState } from 'react';

// UI
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { welcome, colors } from './../style';

// API
import axios from 'axios';

const Welcome = ({ navigation }) => {
  const toCreatePage = () => {
    navigation.navigate('Create', {data});
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?page=3&results=15&seed=abc&inc=name,phone,picture')
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <ImageBackground style={welcome.background} source={require('./../assets/croods.png')}>
        <View style={welcome.body}>
          <Text style={welcome.welcomeText}>Welcome</Text>
          <Text style={welcome.welcomeText2}>to Awesome Chat Group</Text>
          <TouchableOpacity onPress={data && toCreatePage} style={welcome.button}>
            {data && <MaterialIcons name="group-add" size={24} style={welcome.icon} />}
            {!data && <Text style={{ fontSize: 15, color: colors.dark }}>Loading ...</Text>}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
