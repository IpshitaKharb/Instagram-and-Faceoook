import * as React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class Facebook extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require('../facebookIcon.png')}
          style={{
            width: 150,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 500,
            marginBottom: -100,
            marginTop: 200,
          }}
        />
        <Image
          source={require('../facebookText.png')}
          style={{
            width: 300,
            height: 90,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 650,
          }}
        />
      </View>
    )
  }
}
