import * as React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Insta from './screens/Insta'
import Facebook from './screens/FaceBook'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    )
  }
}
const AppContainer = createAppContainer(
  createBottomTabNavigator({
    Instagram: Insta,
    Facebook: Facebook,
  }),
)
