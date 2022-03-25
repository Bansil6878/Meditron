import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Divider from '../Components/Divider';

const Drawer_main = () => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar />

      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={require('../assets/images/profile/meditron.png')}
            style={styles.imgStyle}
          />
        </View>

       
      </View>

      <Divider/>

      <View style={{flexDirection: 'row', margin: 20}}>
        <AntDesign name="gift" size={24} color='black' />
        <Text style={{marginLeft: 10, marginTop: 5}}>MY Orders</Text>
      </View>

      <View style={{flexDirection: 'row', margin: 20}}>
        <AntDesign name="shoppingcart" size={24} color='black'  onPress={()=>navigation.navigate("Cart")}/>
        <Text
          style={{marginLeft: 10, marginTop: 3}}
          onPress={() => navigation.navigate('Cart')}>
          My Cart
        </Text>
      </View>

      <View style={{flexDirection: 'row', margin: 20}}>
        <AntDesign name="solution1" size={24} color='black' onPress={()=>navigation.navigate("Careplan_show")}/>
        <Text
          style={{marginLeft: 10, marginTop: 3}}
          onPress={() => navigation.navigate('Careplan_show')}>
          My Care Plan
        </Text>
      </View>

    <TouchableOpacity>
      <View style={{flexDirection: 'row', margin: 20}}>
        <AntDesign name="user" size={24} color='black' />
        <Text style={{marginLeft: 10, marginTop: 3}} onPress={()=>{
          navigation.navigate('Contact_details')
        }}>My Account</Text>
      </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', margin: 20}}>
        <AntDesign name="pushpino" size={24} color='black' onPress={()=>navigation.navigate("Notification")}/>
        <Text
          style={{marginLeft: 10, marginTop: 3}}
          onPress={() => navigation.navigate('Notification')}>
          My Notification
        </Text>
      </View>

      <Divider/>

      <View style={{flexDirection: 'row', margin: 20}}>
        <AntDesign name="customerservice" size={24} color='black' />
        <Text style={{margin: 3, marginLeft: 7}}>Help center</Text>
      </View>

      <View style={{flexDirection: 'row', margin: 20}}>
        <AntDesign name="profile" size={24} color='black' />
        <Text style={{margin: 3, marginLeft: 7}}>Privacy Policy</Text>
      </View>

      <View style={{flexDirection: 'row', margin: 20}}>
        <AntDesign name="logout" size={24} color='black' />
        <Text style={{margin: 3, marginLeft: 7}} onPress={ async() => {
         await auth()
          .signOut()
          .then(() => navigation.navigate('Login'))
          .catch((e) => console.log(e))
        }}>Logout</Text>
      </View>

   
      
  
    </View>
  );
};

export default Drawer_main;

const styles = StyleSheet.create({
  imgStyle: {
    marginLeft: 7,
    height: 80,
    width: 80,
    marginTop: 35,
    borderRadius: 17,
    marginBottom: 10,
  },
  txtStyle: {},
});
