import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
// import { Icon } from "react-native-elements"
// import { useNavigation } from '@react-navigation/native'
// import { useSelector } from 'react-redux'
// import { selectTravelTimeInfo } from '../slices/navSlice'

const Component2 = () => {
  // const navigation = useNavigation();
  // const [selected, setSelected] = useState(false)
  // const travelTimeInfo = useSelector(selectTravelTimeInfo)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Component Two</Text>
      </View>
    </SafeAreaView>
  )
}

export default Component2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})