import React, { useState } from "react";
import { Switch, TextInput, View } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegsiterScreen from "./app/screens/RegisterScreen";

import Screen from "./app/components/Screen";

export default function App() {
  return <RegsiterScreen />;
}
