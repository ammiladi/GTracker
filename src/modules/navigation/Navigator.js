import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import NavigatorView from './RootNavigation';
import { MaterialIcons,Entypo,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

import AvailableInFullVersion from '../../modules/availableInFullVersion/AvailableInFullVersionViewContainer';

const iconHome = require('../../../assets/images/drawer/home.png');
const iconCalendar = require('../../../assets/images/drawer/calendar.png');
const iconGrids = require('../../../assets/images/drawer/grids.png');
const iconPages = require('../../../assets/images/drawer/pages.png');
const iconComponents = require('../../../assets/images/drawer/components.png');
const iconSettings = require('../../../assets/images/drawer/settings.png');


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{padding: 0}}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/images/drawer/user.png')}
        />
        <View style={{ paddingLeft: 5 }}>
          <Text style={styles.userName}>MILADI Med Amine</Text>
          <Text style={{ color: '#4BC1FD' }}>miladi.medamine@gmail.com</Text>
        </View>
      </View>
      <View style={styles.divider} />
        <DrawerItem
          label={() => (
            <View
              style={styles.menuLabelFlex}>
              <Image
                style={{ width: 20, height: 20}}
                source={iconHome}
              />
              <Text style={styles.menuTitle}>Home</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate('Home')}
        />
      <DrawerItem
          label={() => (
              <View style={styles.menuLabelFlex}>
                <MaterialCommunityIcons name="account-circle" size={20} color="white" />
                <Text style={styles.menuTitle}>Profile</Text>
              </View>
          )}
          onPress={() => props.navigation.navigate('Calendar')}
      />
      <DrawerItem
          label={() => (
              <View style={styles.menuLabelFlex}>
                <AntDesign name="team" size={20} color="white" />
                <Text style={styles.menuTitle}>Teams</Text>
              </View>
          )}
          onPress={() => props.navigation.navigate('Teams')}
      />
      <DrawerItem
          label={() => (
              <View style={styles.menuLabelFlex}>
                <AntDesign name="logout" size={20} color="white" />
                <Text style={styles.menuTitle}>Logout</Text>
              </View>
          )}
          onPress={() => props.navigation.navigate('Logout')}
      />
      <View style={styles.divider} />
      <DrawerItem
        label={() => (
          <View style={styles.menuLabelFlex}>
            <MaterialCommunityIcons name="contact-phone" size={20} color="white" />
            <Text style={styles.menuTitle}>Contact us</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Calendar')}
      />
      <DrawerItem
          label={() => (
              <View style={styles.menuLabelFlex}>
                <Entypo name="help-with-circle" size={20} color="white" />
                <Text style={styles.menuTitle}>Faqs</Text>
              </View>
          )}
          onPress={() => props.navigation.navigate('Calendar')}
      />
      <DrawerItem
          label={() => (
              <View style={styles.menuLabelFlex}>
                <MaterialIcons name="account-balance" size={20} color="white" />
                <Text style={styles.menuTitle}>Legal & About</Text>
              </View>
          )}
          onPress={() => props.navigation.navigate('Calendar')}
      />

    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#3C38B1',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Homes" component={NavigatorView} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuTitle: {
    marginLeft: 10,
    color: '#fff'
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row'
  },
  userName: {
    color: '#fff',
    fontSize: 18
  },
  divider: {
    borderBottomColor: 'white',
    opacity: 0.2,
    borderBottomWidth: 1,
    margin: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10
  },
});
