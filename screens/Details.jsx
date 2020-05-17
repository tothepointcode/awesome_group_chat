import * as React from 'react';

// UI
import { View, Text, ImageBackground, ScrollView, Image, TextInput } from 'react-native';
import { AntDesign, Ionicons, EvilIcons } from '@expo/vector-icons';
import { create, details, colors } from './../style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Details = ({ navigation, route }) => {
  const { selectedData } = route.params;
  console.log(route.params);

  const toNextPage = () => {
    navigation.navigate('Acknowledgement');
  };

  const [selectedContacts, setSelectedContacts] = React.useState(selectedData);

  const toggleSelected = (index, item) => {
    // if (index == -1) {
    //   index = data.indexOf(item);
    // }

    // const { selected } = data[index];
    let newSelected = [];

    // if (selected) {
    //   data[index].selected = false;

    // const id = selectedData.indexOf(item);
    // selectedData.splice(index, 1);
    newSelected = [...selectedContacts];

    newSelected.splice(index, 1);


    // } else {
    //   data[index].selected = true;
    //   newSelected = [data[index], ...selectedData];
    // }
    // setContactsData([...data]);
    setSelectedContacts(newSelected);
  };

  React.useEffect(() => {
    setSelectedContacts(selectedData);
    console.log(selectedData);
  }, [selectedData]);

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
              <Text style={[create.contactHead, { color: colors.white }]}>Group Name</Text>
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
    </View>
  );
};

export default Details;
