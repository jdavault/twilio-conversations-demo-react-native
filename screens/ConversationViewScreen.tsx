/** @format */

import React from "react"
import { StyleSheet, TouchableOpacity, SafeAreaView, Image, View, Text } from "react-native"
//import { GOOGLE_MAPS_API_KEY } from "react-native-dotenv"
//import { useDispatch } from "react-redux"
//import { Icon } from "react-native-elements"

const ConversationViewScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>ConversationView Screen</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ChatViewScreen")}
          style={{
            backgroundColor: "#286EF2",
            padding: 20,
            marginTop: 10,
            marginHorizontal: 8,
            borderRadius: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 50
          }}
        >
          <Text style={{ flex: 1, color: "white", fontWeight: 600, textAlign: "center" }}>
            ChatView
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ConversationViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: 600
  }
})
