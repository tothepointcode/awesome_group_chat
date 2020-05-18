import * as React from 'react';

// UI
import { View, Text, ImageBackground, ScrollView, Image, Modal, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { welcome, create, details, colors, modal, colorSet } from './../style';

const Details = ({ navigation, route }) => {
  const { selectedData } = route.params;
  console.log(route.params);

  const toNextPage = () => {
    navigation.navigate('Acknowledgement');
  };

  const [selectedContacts, setSelectedContacts] = React.useState(selectedData);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [groupName, setGroupName] = React.useState('Group Name');
  const [tempGroupName, setTempGroupName] = React.useState('');
  const [avatar, setAvatar] = React.useState(null);
  const [tempAvatar, setTempAvatar] = React.useState(null);
  const [msg, setMsg] = React.useState('');

  const toggleSelected = (index) => {
    let newSelected = [];
    newSelected = [...selectedContacts];
    newSelected.splice(index, 1);
    setSelectedContacts(newSelected);
  };

  React.useEffect(() => {
    setSelectedContacts(selectedData);
    console.log(selectedData);
  }, [selectedData]);

  const handleClose = () => {
    setModalVisible(!modalVisible);
  };

  const handleSave = () => {
    if (tempGroupName === '') {
      setMsg('Empty group name!');
      setTimeout(() => setMsg(''), 3000);
    } else {
      setGroupName(tempGroupName);
      setAvatar(tempAvatar);
      setModalVisible(!modalVisible);
    }
  };

  return (
    <View>
      <ImageBackground style={create.imagebg} source={require('./../assets/croods1.png')}>
        <View style={create.topSection}>
          <View style={details.head}>
            <View style={[details.profileRing, avatar !== null && { borderColor: colorSet[avatar] }]}>
              <AntDesign
                name="user"
                style={[details.profile, avatar !== null && { backgroundColor: colorSet[avatar] }]}
              />
              <View style={details.edit}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={details.editTouchable}>
                  <EvilIcons style={details.editIcon} name="pencil" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={details.headDetails}>
              <Text style={[create.contactHead, { color: colors.white }]}>{groupName}</Text>
              <Text style={details.subhead}>Provide a group subject and an optional group icon</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={[create.bottomSection, { padding: 0, paddingTop: 35 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 35 }}>
          <Text style={details.bottomHead}>Participants </Text>
          <Text style={details.memberCount}>{selectedContacts.length}</Text>
        </View>
        <ScrollView>
          <View style={details.selectedView}>
            {selectedContacts.map((item, index) => {
              const { picture, name } = item;

              return (
                <View style={{ margin: 8 }} key={index}>
                  <View style={[create.imgContainer, details.imgContainer]}>
                    <Image style={create.face} source={{ uri: picture.medium }} />
                    <View style={[create.faceClosebtn, details.closebtn]}>
                      <TouchableOpacity onPress={() => toggleSelected(index, item)} style={{ padding: 3 }}>
                        <AntDesign style={[create.closeIcon, details.closeIcon]} name="closecircle" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={details.faceName}>{name.first}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>

        <View style={create.next}>
          <TouchableOpacity onPress={toNextPage}>
            <AntDesign name="arrowright" size={30} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <ImageBackground style={welcome.background} source={require('./../assets/croods1.png')}>
          <View style={modal.body}>
            <Text style={modal.head}>Pick an avatar</Text>

            <View style={modal.avatarView}>
              {colorSet.map((color, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => setTempAvatar(index)}>
                    <View style={[index === tempAvatar && modal.profileSelect]}>
                      <AntDesign
                        name="user"
                        style={[modal.avatar, index === tempAvatar && modal.avatarDim, { backgroundColor: color }]}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <TextInput
              style={modal.input}
              placeholder="Group Name"
              placeholderTextColor={colors.gray}
              selectionColor={colors.orange}
              value={tempGroupName}
              onChangeText={(text) => setTempGroupName(text)}
            />

            <View style={modal.buttonView}>
              <TouchableOpacity onPress={handleClose} style={modal.button}>
                <Text style={modal.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSave} style={[modal.button, { backgroundColor: colors.orange }]}>
                <Text style={modal.buttonText}>Save </Text>
              </TouchableOpacity>
            </View>
            <Text style={modal.msg}>{msg}</Text>
          </View>
        </ImageBackground>
      </Modal>
    </View>
  );
};

export default Details;
