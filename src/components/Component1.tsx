import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React from 'react'
//import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Component1 = () => {
  //const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Component One</Text>
      </View>
    </SafeAreaView>
  )
}

export default Component1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, banner: {
    fontSize: 17,
    fontWeight: 600
  }
});
