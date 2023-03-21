import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable,TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Login3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login3}>
      <View style={styles.resetYourPasswordParent}>
        <Text
          style={[
            styles.resetYourPassword,
            styles.resetTypo,
            styles.textPosition,
          ]}
        >
          Reset Your Password
        </Text>
        <View style={[styles.input3ConfirmEmail, styles.input3Layout]}>
          <View style={[styles.input3ConfirmEmailChild, styles.input3Layout]} />
          
          <TextInput style={[
              styles.enterYourEmail,
              styles.sendResetLinkPosition,
              styles.enterTypo,
            ]} placeholder={'Enter your email'} getInput={(InputEmail) => getInputUsername(InputEmail)} />
        </View>
        <Text
          style={[
            styles.pleaseEnterThe,
            styles.sendResetLinkLayout,
            styles.enterTypo,
          ]}
        >
          Please enter the email associated with your account, and you will
          receive an email to reset your password
        </Text>
        <Pressable
          style={[styles.loginButton, styles.loginLayout]}
          onPress={() => navigation.navigate("Login4")}
        >
          <View style={[styles.loginButtonChild, styles.loginLayout]} />
          <Text
            style={[
              styles.sendResetLink,
              styles.sendResetLinkLayout,
              styles.sendResetLinkPosition,
              styles.resetTypo,
            ]}
          >
            Send Reset Link
          </Text>
        </Pressable>
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
  textPosition: {
    textAlign: "left",
    color: Color.blackBase,
    top: 0,
    position: "absolute",
  },
  enterTypo: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
  },
  resetTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  input3Layout: {
    height: 50,
    width: 346,
    position: "absolute",
  },
  sendResetLinkPosition: {
    top: 12,
    textAlign: "left",
  },
  sendResetLinkLayout: {
    height: 38,
    position: "absolute",
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
    left: 0,
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
  resetYourPassword: {
    left: 46,
    width: 254,
    height: 45,
  },
  input3ConfirmEmailChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.ivory,
    left: 0,
    top: 0,
  },
  enterYourEmail: {
    left: 16,
    fontSize: FontSize.size_lg,
    color: Color.darkgray,
    width: 144,
    height: 26,
    position: "absolute",
  },
  input3ConfirmEmail: {
    top: 194,
    left: 1,
  },
  pleaseEnterThe: {
    top: 54,
    left: 15,
    fontSize: FontSize.size_mini,
    color: Color.darkslategray_100,
    textAlign: "center",
    width: 316,
  },
  loginButtonChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.blackBase,
    top: 0,
  },
  sendResetLink: {
    left: 77,
    color: Color.white,
    width: 193,
  },
  loginButton: {
    top: 488,
  },
  resetYourPasswordParent: {
    top: 151,
    left: 36,
    width: 347,
    height: 549,
    position: "absolute",
  },
  login3: {
    backgroundColor: Color.palegoldenrod,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Login3;
