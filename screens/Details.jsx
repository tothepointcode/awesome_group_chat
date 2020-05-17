import * as React from 'react';

// UI
import { View, Text, ImageBackground, ScrollView, Image, TextInput } from 'react-native';
import { AntDesign, Ionicons, EvilIcons } from '@expo/vector-icons';
import { create, details, colors } from './../style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Details = ({ navigation }) => {
  const toNextPage = () => {
    navigation.navigate('Acknowledgement');
  };

  return (
    <View>
      <ImageBackground style={create.imagebg} source={require('./../assets/croods1.png')}>
        <View style={create.topSection}>
          <View style={details.head}>
            <View style={details.profileRing}>
              <AntDesign name="user" style={details.profile} />
              <View style={details.edit}>
                <TouchableOpacity style={details.editTouchable}>
                  <EvilIcons style={details.editIcon} name="pencil" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={details.headDetails}>
              <Text style={[create.contactHead, {color: colors.white}]}>Group Name</Text>
              <Text style={details.subhead}>Provide a group subject and an optional group icon</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={create.bottomSection}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={details.bottomHead}>Participants </Text>
          <Text style={details.memberCount}>10</Text>
        </View>
        <ScrollView>
          <View style={create.selectedView}>
            <ScrollView horizontal={true}>
              <View>
                <View style={[create.imgContainer, details.imgContainer]}>
                  <Image style={create.face} source={require('./../assets/croodsCrop.png')} />
                  <View style={[create.faceClosebtn, details.closebtn]}>
                    <TouchableOpacity style={{ padding: 3 }}>
                      <AntDesign style={[create.closeIcon, details.closeIcon]} name="closecircle" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={details.faceName}>Name</Text>
              </View>
            </ScrollView>
          </View>
          {/* <TouchableOpacity>
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
              {/* </View>
            </View>
            <View style={create.thinLine} />
          </TouchableOpacity> */} 
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

export default Details;
