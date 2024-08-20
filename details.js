import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';


const BuildingSearchResults = () => {
  const route = useRoute();
  const receivedData = route.params.data;
  return (
    <View style={styles.container}>
      <Text>You are searching for: {receivedData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: { 
    fontSize: 20
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

export default BuildingSearchResults;
