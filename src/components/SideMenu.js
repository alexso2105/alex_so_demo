/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from 'alex_demo/src/styles/SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
        


              <View >
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page5')} >
                   <Icon name='person' size={24} color='#517fa4'  /> &nbsp;
                   Alex So Profile
                </Text>
              </View>
            
              <View >
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page1')} >
                   <Icon name='message' size={24} color='#517fa4'  /> &nbsp;
                   Posts
                </Text>
              </View>
            
              <View  >
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                   <Icon name='image' size={24} color='#517fa4'  /> &nbsp;
                   Albums
                </Text>
              </View>
              
              <View  >
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                   <Icon name='bookmark' size={24} color='#517fa4'  /> &nbsp;
                   Tasks
                </Text>
              </View>

              <View >
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page4')} >
                   <Icon name='group' size={24} color='#517fa4'  /> &nbsp;
                   Friends
                </Text>
              </View>
            
          
        </ScrollView>
        
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
