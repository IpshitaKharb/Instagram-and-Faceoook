import * as React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export default class Insta extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require('../insta.png')}
          style={{
            width: 500,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft:500,
            marginTop:150,
          }}
        />
      </View>
    )
  }
}
