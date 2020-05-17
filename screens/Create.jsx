import * as React from 'react';

// UI
import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { create } from './../style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Create = () => {
  return (
    <View>
      <ImageBackground style={create.imagebg} source={require('./../assets/croods.png')}>
        <View style={create.topSection}>
          <View style={create.namebar}>
            <Text style={create.namebarText}>Martin</Text>
            <TouchableOpacity style={create.namebarClosebtn}>
              <AntDesign style={create.namebarCloseText} name="closecircle" />
            </TouchableOpacity>
          </View>
          <View style={create.selectedView}>
            <ScrollView horizontal={true}>
              <View style={create.imgContainer}>
                <Image style={create.face} source={require('./../assets/croodsCrop.png')} />
                <View style={create.faceClosebtn}>
                  <TouchableOpacity>
                    <AntDesign style={create.closeIcon} name="closecircle" />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
      <View style={create.bottomSection}></View>
    </View>
  );
};

export default Create;
