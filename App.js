
import React, {Component} from 'react';
import {AppRegistry, Button} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from "unstated";
import theme from "alex_demo/src/styles/theme";
import FriendStore from "alex_demo/src/stores/FriendStore";
import PostScreen from 'alex_demo/src/screens/PostScreen';
import AlbumScreen from 'alex_demo/src/screens/AlbumScreen';
import TaskScreen from 'alex_demo/src/screens/TaskScreen';
import FriendScreen from 'alex_demo/src/screens/FriendScreen';
import ProfileScreen from 'alex_demo/src/screens/ProfileScreen';
import SideMenu from 'alex_demo/src/components/SideMenu';
import {DrawerNavigator} from 'react-navigation';
import {createStackNavigator} from "react-navigation";
import PostDetailScreen from "alex_demo/src/screens/PostDetailScreen";
import AlbumDetailScreen from "alex_demo/src/screens/AlbumDetailScreen";
import FriendDetailScreen from "alex_demo/src/screens/FriendDetailScreen";
import Icon from "react-native-vector-icons/MaterialIcons";


//sideTabNave links to the page for different screens, the screen modules can find in /src/screens/ folder
const SideTabNav = DrawerNavigator({
  Page1: {
    screen: PostScreen
  },
  Page2: {
    screen: AlbumScreen
  },
  Page3: {
    screen: TaskScreen
  },
  Page4: {
    screen: FriendScreen
  },
   Page5: {
    screen: ProfileScreen
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});

const topNavBarStyle = {
  headerTintColor: theme.PRIMARY_COLOR,
  headerStyle: {
    backgroundColor: theme.SECONDARY_COLOR,
    borderBottomColor: theme.SECONDARY_COLOR
  }
}

//Setup for App-wide top-level navigation
const AppNavigator = createStackNavigator({
  Main: {
    screen: SideTabNav,
    navigationOptions: ({ navigation }) => ({
      title: "Alex So Demo",
      ...topNavBarStyle,
      headerLeft: (
         <Icon name='menu' size={theme.MENU_ICON_SIZE} color={theme.MENU_ICON_COLOR} style={{ marginLeft: theme.MENU_ICON_MARGIN_LEFT }} onPress={() => navigation.toggleDrawer()} />
       ),
    })
  },
  PostDetail: {
    screen: PostDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Post Detail",
      ...topNavBarStyle
    })
  },
  AlbumDetail: {
    screen: AlbumDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Album Detail",
      ...topNavBarStyle
    })
  },
  FriendDetail: {
    screen: FriendDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Friend Detail",
      ...topNavBarStyle
    })
  }
});



export default class App extends Component {
  componentDidMount() {
    // Downloads the user list so it can be used throughout the app 
    FriendStore.initializeFriendList();
  }
  render () {
    return (
      <Provider>
          <AppNavigator />
       </Provider>
    );
  }
}