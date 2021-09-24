import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
    navigation = useNavigation()
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      style={{
        marginTop: 130,
        flex: 1,
      }}
    >
      <Text
        style={{
          color: "#3F419B",
          fontSize: 60,
          maxWidth: 500,
          textAlign: "center",
        }}
      >
        ORRAMO
      </Text>
      <Text
        style={{
          color: "#000",
          fontSize: 30,
          maxWidth: 500,
          marginTop: 60,
          textAlign: "center",
        }}
      >
        Login
      </Text>

      <KeyboardAvoidingView>
        <View style={styles.gap}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChange={() => setEmail(email)}
            value={email}
          />
        </View>
        <View style={styles.gap}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            onChange={() => setPassword(password)}
            value={password}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={{
          borderRadius: 10,
          alignItems: "center",
          backgroundColor: "#3F419B",
          padding: 15,
          textAlign: "center",
          marginTop: 40,
          marginLeft: 60,
          marginRight: 60,
          paddingHorizontal: 10,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Sign in</Text>
      </TouchableOpacity>

          <TouchableOpacity
          onPress = {()=> navigation.navigate("SignUp")}
          >
        <Text style={styles.register}>
          Not Registered Yet? Click here to SignUp
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    color: "#000",
    borderRadius: 10,
    height: 40,
    marginRight: 22,
    marginLeft: 22,
    marginTop: 10,
    padding: 25,
    backgroundColor: "grey",
    opacity: 0.1,
  },
  gap: {
    marginTop: 50,
  },
  text: {
    marginLeft: 25,
    fontWeight: "bold",
  },
  forgot: {
    fontWeight: "bold",
    fontSize: 11,
    paddingLeft: 290,
    marginTop: 10,
  },
    register: {
        color: "#3F419B",
        fontSize: 10,
        paddingTop: 30,
        paddingLeft: 120,
        marginRight: 140,
        textAlign:"center"
  },
});
