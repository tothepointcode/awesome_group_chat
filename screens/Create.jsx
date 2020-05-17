import * as React from 'react';

// UI
import { View, Text, ImageBackground, ScrollView, Image, TextInput } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { create, colors } from './../style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Create = ({ navigation}) => {

  const toNextPage = () => {
    navigation.navigate("Details")
  }

  return (
    <View>
      <ImageBackground style={create.imagebg} source={require('./../assets/croods.png')}>
        <View style={create.topSection}>
          <View style={create.searchView}>
            <TextInput
              style={create.searchbar}
              placeholder="Search"
              placeholderTextColor={colors.gray}
              selectionColor={colors.orange}
            />
            <View style={create.close}>
              <TouchableOpacity >
                <AntDesign style={create.searchbarCloseText} name="closecircle" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={create.selectedView}>
            <ScrollView horizontal={true}>
              <View>
                <View style={[create.imgContainer, {}]}>
                  <Image style={create.face} source={require('./../assets/croodsCrop.png')} />
                  <View style={create.faceClosebtn}>
                    <TouchableOpacity style={{ padding: 3 }}>
                      <AntDesign style={create.closeIcon} name="closecircle" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={create.faceName}>Name</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
      <View style={create.bottomSection}>
        <ScrollView>
          <TouchableOpacity>
            <View style={create.contactItem}>
              <View style={[create.imgContainer, { borderColor: 'red' }]}>
                <Image style={create.face} source={require('./../assets/croodsCrop.png')} />
              </View>
              <View style={create.contactDetails}>
                <View>
                  <Text style={create.contactHead}>Name</Text>
                  <Text style={create.contactSub}>Contact</Text>
                </View>
                <Ionicons style={create.contactCheck} name="ios-checkmark-circle" size={24} color="black" />
                {/* <MaterialIcons name="radio-button-unchecked" size={24} color="black" /> */}
              </View>
            </View>
            <View style={create.thinLine} />
          </TouchableOpacity>
        </ScrollView>

        <View style={create.next}>
          <TouchableOpacity onPress={toNextPage}>
            <AntDesign name="arrowright" size={30} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Create;
