import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ChatViewScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ChatView Screen</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('ConversationViewScreen')}
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
        <Text style={{ flex: 1, color: 'white', fontWeight: 600, textAlign: 'center' }}>Back to ConversationView</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChatViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, text: {
    fontSize: 18,
    fontWeight: 600
  }
});