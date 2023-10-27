import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const OtherScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Other Screen</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('ConversationScreen')}
        style={{
          backgroundColor: '#286EF2',
          padding: 20,
          marginTop: 10,
          marginHorizontal: 8,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 50
        }}>
        <Text style={{ flex: 1, color: 'white', fontWeight: 600, textAlign: 'center' }}>Back to Conversation Screen</Text>
      </TouchableOpacity>

    </View>
  )
}

export default OtherScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})