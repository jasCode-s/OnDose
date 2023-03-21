import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import { TransitionPresets } from '@react-navigation/stack';


const Login1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.login1}>
      <View style={styles.groupParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-14.png")}
        />
        <Text style={styles.welcomeToOndose}>Welcome to OnDose!</Text>
        <View
          style={[
            styles.groupItem,
            styles.input1Layout,
            styles.groupItemLayout,
          ]}
        />
        <View style={[styles.input1Email, styles.input1Layout]}>
          <View
            style={[
              styles.input1EmailChild,
              styles.input1Layout,
              styles.groupItemLayout,
            ]}
          />
          <TextInput style={[
              styles.enterYourPassword,
              styles.enterTypo,
              styles.enterPosition,
            ]} placeholder={'Enter your email'} getInput={(InputPassword) => getInputUsername(InputPassword)} />
        </View>
        <Pressable
          style={styles.dontHaveAnContainer}
          onPress={() => navigation.navigate("Login2")}
        >
          <Text style={[styles.text1, styles.enterTypo, styles.text1Layout]}>
            <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
            <Text style={styles.signUp}>Sign up</Text>
          </Text>
        </Pressable>
        <Pressable
          style={styles.forgetPassword}
          onPress={() => navigation.navigate("Login3")}
        >
          <Text
            style={[
              styles.forgetPassword1,
              styles.enterTypo,
              styles.text1Layout,
            ]}
          >
            Forget password?
          </Text>
        </Pressable>
        <View style={[styles.input2Password, styles.input1Layout]}>
          <View
            style={[
              styles.input1EmailChild,
              styles.input1Layout,
              styles.groupItemLayout,
            ]}
          />
          <TextInput style={[
              styles.enterYourPassword,
              styles.enterTypo,
              styles.enterPosition,
            ]} placeholder={'Enter your password'} getInput={(InputPassword) => getInputUsername(InputPassword)} />
        </View>
        <View style={[styles.loginButton, styles.loginLayout]}>
          <View style={[styles.loginButton1, styles.loginLayout]}>
            <Pressable
              style={[styles.loginButtonChild, styles.loginLayout]}
              onPress={() => navigation.navigate("IPhone141")}
              
            />
            <Text style={styles.logIn}>Log In</Text>
          </View>
          <View style={styles.loginButtonItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "24.94%",
    position: "absolute",
    overflow: "hidden",
  },
  input1Layout: {
    height: 50,
    width: 346,
    left: 0,
    position: "absolute",
  },
  groupItemLayout: {
    borderRadius: Border.br_mini,
    height: 50,
  },
  enterTypo: {
    height: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
  },
  enterPosition: {
    color: Color.darkgray,
    left: 16,
    height: 26,
    fontSize: FontSize.size_lg,
    top: 12,
    position: "absolute",
  },
  text1Layout: {
    height: 26,
    fontSize: FontSize.size_lg,
  },
  loginLayout: {
    height: 61,
    width: 346,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "61.46%",
    width: "4.43%",
    right: "8.58%",
    bottom: "13.59%",
    left: "86.98%",
  },
  text: {
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    left: 0,
    color: Color.blackBase,
    top: 0,
    position: "absolute",
  },
  vectorIcon1: {
    height: "67.05%",
    width: "6.65%",
    right: "0%",
    bottom: "8.01%",
    left: "93.35%",
  },
  iconSignal: {
    height: "63.17%",
    width: "4.15%",
    right: "14.95%",
    bottom: "11.89%",
    left: "80.89%",
  },
  iphoneScreenDefault: {
    height: "2.12%",
    width: "92.59%",
    top: "0.89%",
    right: "2.82%",
    bottom: "96.99%",
    left: "4.59%",
    position: "absolute",
  },
  groupChild: {
    top: 56,
    left: 115,
    width: 118,
    height: 211,
    position: "absolute",
  },
  welcomeToOndose: {
    left: 46,
    width: 254,
    height: 45,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.blackBase,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.gainsboro_100,
    top: 302,
  },
  input1EmailChild: {
    backgroundColor: Color.ivory,
    top: 0,
  },
  enterYourEmail: {
    width: 144,
  },
  input1Email: {
    top: 302,
  },
  dontHaveAn: {
    color: Color.blackBase,
  },
  signUp: {
    color: Color.darkorange,
  },
  text1: {
    width: 270,
  },
  dontHaveAnContainer: {
    left: 38,
    top: 558,
    position: "absolute",
  },
  forgetPassword1: {
    width: 153,
    color: Color.darkorange,
  },
  forgetPassword: {
    left: 97,
    top: 436,
    position: "absolute",
  },
  enterYourPassword: {
    width: 182,
  },
  input2Password: {
    top: 374,
  },
  loginButtonChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.blackBase,
    top: 0,
  },
  logIn: {
    left: 137,
    color: Color.white,
    width: 72,
    height: 38,
    top: 12,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  loginButton1: {
    top: 0,
  },
  loginButtonItem: {
    top: 7,
    left: 120,
    width: 100,
    height: 46,
    position: "absolute",
    overflow: "hidden",
  },
  loginButton: {
    top: 485,
  },
  groupParent: {
    top: 153,
    left: 33,
    height: 584,
    width: 346,
    position: "absolute",
  },
  login1: {
    backgroundColor: Color.palegoldenrod,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Login1;
