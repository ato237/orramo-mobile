import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

function RenderHeader(props) {
  const navigation = useNavigation(); 

  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: props.color,
        padding: 15,
        textAlign: "center",
        marginTop: props.margin,
        paddingHorizontal: 10,
      }}
      onPress={() => navigation.navigate(props.path)}
    >
      <Text style={{ fontSize: 20, color: "white" }}>{props.login}</Text>
    </TouchableOpacity>
  );
}

const Welcome = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <LinearGradient colors={["#fff", "#eee"]} style={{ flex: 1 }}>
        <Text style={styles.text}>ORRAMO</Text>
        <Text style={styles.subText}>Transfer money</Text>
        <Text style={styles.paragraph}>
          Simplifies and speeds up processing international payments
        </Text>
        <ScrollView style={{ padding: 15, paddingHorizontal: 30 }}>
          <RenderHeader login="Log in" color="black" margin={ 220} path = "Login"/>
          <RenderHeader login="Sign up" color ="#3F419B"margin={ 30} path="SignUp"/>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#14213D",
  },
  text: {
    fontSize: 60,
    fontWeight: "900",
    color: "black",
    marginTop: 150,
    maxWidth: 500,
    paddingLeft: 35,
  },
  subText: {
    fontSize: 30,
    color: "black",
    opacity: 0.6,
    marginTop: 20,
    maxWidth: 500,
    paddingLeft: 35,
  },
  paragraph: {
    fontSize: 20,
    opacity: 0.4,

    color: "black",
    marginTop: 20,
    maxWidth: 300,
    paddingLeft: 35,
  },
});
