/** @format */

import { StatusBar } from "expo-status-bar"
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import ConversationViewScreen from "./src/screens/ConversationViewScreen"
import ChatViewScreen from "./src/screens/ChatViewScreen"
import OtherScreen from "./src/screens/OtherScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"

export default function Home() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="ConversationViewScreen"
              component={ConversationViewScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="ChatViewScreen"
              component={ChatViewScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="OtherScreen"
              component={OtherScreen}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
