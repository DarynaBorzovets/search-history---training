import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BuildingSearchResults from "./details";

const Stack = createStackNavigator();

const MainComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="BuildingSearchResults"
          component={BuildingSearchResults}
          options={{ title: "Search results" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Space Needle",
    "Columbia Center",
    "Smith Tower",
    "Seattle Central Library",
    "Pike Place Market",
    "Seattle City Hall",
    "Seattle Art Museum (SAM)",
    "CenturyLink Field",
    "Museum of Pop Culture (MoPOP)",
    "Amazon Spheres",
  ]);

  const handleSearch = () => {
    if (inputText.trim() === "") return; 

    setRecentSearches((prevSearches) => {
      const updatedSearches = [inputText, ...prevSearches];

      return updatedSearches.slice(0, 10);
    });

    setInputText("");
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.mainText}>
          Welcome to IndoorMaps. Find your way inside any building in the world.
          Start by searching the building.
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setInputText}
          value={inputText}
          placeholder="Type a building or address"
        />

        <Button
          title="Search"
          onPress={handleSearch}
        />
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 40,
            marginBottom: 20,
          }}
        />
        <Text>Previous entries:</Text>
        <FlatList
          data={recentSearches.map((item) => ({ key: item }))}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          keyExtractor={(item) => item.key}
        />

        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 20,
  },
  container: {
    margin: 10,
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default MainComponent;
