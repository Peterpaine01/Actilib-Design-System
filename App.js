import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, View, Text, StyleSheet } from "react-native";

// icons
// npm install react-native-feather --save > https://github.com/colmbrady/react-native-feather
// yarn add react-native-svg > https://github.com/software-mansion/react-native-svg
import * as Icon from "react-native-feather";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// AppStyles.js
import AppStyles from "./AppStyles";

// components
import CustomInput from "./components/CustomInput";
import CustomInputSearch from "./components/CustomInputSearch";
import CustomButton from "./components/CustomButton";
import CustomPills from "./components/CustomPills";

// FONTS > npx expo install expo-font @expo-google-fonts/inter
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

const App = () => {
  const [password, setPassword] = useState();
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Actilib components</Text>
      <Text style={styles.subtext}>Icons</Text>
      {/* Feather icons */}
      <Text style={styles.labortext}>Feather library</Text>
      <View style={styles.flex_horizontal}>
        <Feather name="home" color={AppStyles.color.text_normal} size={24} />
        <Feather name="camera" color={AppStyles.color.text_normal} size={24} />
        <Feather name="search" color={AppStyles.color.text_normal} size={24} />
        <Feather name="heart" color={AppStyles.color.text_normal} size={24} />
        <Feather
          name="activity"
          color={AppStyles.color.text_normal}
          size={24}
        />
        <Feather
          name="chevron-left"
          color={AppStyles.color.text_normal}
          size={24}
        />
        <Feather
          name="chevron-right"
          color={AppStyles.color.text_normal}
          size={24}
        />
        <Feather
          name="check-circle"
          color={AppStyles.color.text_normal}
          size={24}
        />
        <Feather name="user" color={AppStyles.color.text_normal} size={24} />
        <Feather name="lock" color={AppStyles.color.text_normal} size={24} />
        <Feather name="sliders" color={AppStyles.color.text_normal} size={24} />
      </View>
      {/* Ionicons */}
      <Text style={styles.labortext}>Ionicons library</Text>
      <View style={styles.flex_horizontal}>
        <Ionicons name="person" color={AppStyles.text_normal} size={24} />
      </View>
      {/* MaterialsIcons */}
      <Text style={styles.labortext}>MaterialIcons library</Text>
      <View style={styles.flex_horizontal}>
        <MaterialIcons
          name="account-circle"
          color={AppStyles.color.text_normal}
          size={32}
        />
      </View>
      {/* INPUTS */}
      <Text style={styles.subtext}>Inputs</Text>
      <Text style={styles.labortext}>Input connexion</Text>
      <CustomInput
        placeholder="Email"
        value={password}
        setValue={setPassword}
        multiline={false}
        lines={1}
        type="input"
        style="full_width"
        materialIcons_start
        start_icon="account-circle"
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
        multiline={false}
        lines={1}
        type="input"
        style="full_width"
        feather_start
        start_icon="lock"
      />
      {/* INPUTS */}
      <Text style={styles.labortext}>Input search</Text>
      <CustomInputSearch
        placeholder="Cours, activité, atelier"
        value={password}
        setValue={setPassword}
        multiline={false}
        lines={1}
        type="input"
        style="full_width"
        feather_start
        start_icon="search"
        feather_end
        end_icon="sliders"
      />
      <Text style={styles.subtext}>Button</Text>
      <View style={styles.flex_horizontal}>
        <CustomButton
          onPress={() => {}}
          materialIcons
          start_icon="account-circle"
          text="Button outlined"
          type="outlined"
        />
        <CustomButton
          style="full_width"
          onPress={() => {}}
          feather
          end_icon="chevron-right"
          text="Button solid"
          type="solid"
        />

        <CustomButton
          onPress={() => {}}
          ionicons
          start_icon="person"
          text="Button text light"
          type="textlight"
        />

        <CustomButton
          onPress={() => {}}
          ionicons
          start_icon="person"
          text="Button text dark"
          type="textdark"
        />
        <CustomButton onPress={() => {}} text="Button text" type="text" />
      </View>
      <Text style={styles.subtext}>Pills</Text>
      <View style={styles.flex_horizontal}>
        <CustomPills
          onPress={() => {}}
          materialIcons
          start_icon="account-circle"
          text="Pills outlined"
          type="outlined"
        />
        <CustomPills
          style="full_width"
          onPress={() => {}}
          feather
          end_icon="chevron-right"
          text="Pills solid"
          type="solid"
        />

        <CustomPills
          onPress={() => {}}
          ionicons
          start_icon="person"
          text="Pills text light"
          type="textlight"
        />

        <CustomPills
          onPress={() => {}}
          ionicons
          start_icon="person"
          text="Pills text dark"
          type="textdark"
        />
        <CustomPills onPress={() => {}} text="Pills text" type="text" />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.color.primary_background,
    width: "100%",
    padding: 30,
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    fontFamily: AppStyles.font.regular,
    marginBottom: 10,
  },
  subtext: {
    color: "white",
    textAlign: "left",
    fontSize: 24,
    fontFamily: AppStyles.font.regular,
    marginBottom: 10,
    marginTop: 20,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    width: "100%",
  },
  labortext: {
    color: "black",
    textAlign: "left",
    fontSize: 18,
    fontFamily: AppStyles.font.regular,
    marginBottom: 10,
    marginTop: 15,
    width: "100%",
  },
  flex_horizontal: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    flexWrap: "wrap",
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
});
