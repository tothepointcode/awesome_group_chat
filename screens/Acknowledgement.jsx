import * as React from 'react';

// UI
import { View, Text, ImageBackground } from 'react-native';
import { welcome } from './../style';

const Acknowledgement = ({ navigation }) => {
  const toCreatePage = () => {
    navigation.navigate('Create');
  };
  return (
    <View>
      <ImageBackground style={welcome.background} source={require('./../assets/croods.png')}>
        <View style={welcome.body}>
          <Text style={welcome.welcomeText}>Congratulations!</Text>
          <Text style={[welcome.welcomeText2, { paddingBottom: 0, paddingTop: 15 }]}>
            You have successfully created{' '}
          </Text>
          <Text style={welcome.welcomeText2}>an Awesome Chat Group</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Acknowledgement;
