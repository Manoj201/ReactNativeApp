// @flow
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import rootStackNavActions from '../../../navigations/primaryStackNavigator/PrimaryStackNavigation.action';

import styles from './HomeScreen.styles';
import TabOne from "../../../navigations/primaryTabNavigator/TabOne";
import TabTwo from "../../../navigations/primaryTabNavigator/TabTwo";

class HomeScreen extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }

  handlePress= (): void => {
    rootStackNavActions.navigateToChild();
  };
  render() {
    return (
      <View style={styles.containerWrapper}>
        <Text>This is Home</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>Navigate With Root Stack</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;

