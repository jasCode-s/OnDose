import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable,TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Login2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login2}>
      <View style={styles.signUpAnAccountParent}>
        <Text style={styles.signUpAn}>Sign Up An Account</Text>
        
        <View style={[styles.input4Password, styles.childLayout]}>
          <View
            style={[
              styles.input4PasswordChild,
              styles.childLayout,
              styles.childLayout1,
            ]}
          />
          <TextInput style={[
              styles.enterYourEmail,
              styles.confirmTypo,
              styles.confirmPosition,
            ]} placeholder={'Enter your password'} getInput={(InputPassword1) => getInputUsername(InputPassword1)} />
          
        </View>
        <View style={[styles.input3ConfirmEmail, styles.childLayout]}>
          <View
            style={[
              styles.input4PasswordChild,
              styles.childLayout,
              styles.childLayout1,
            ]}
          />
          <TextInput style={[
              styles.enterYourEmail,
              styles.confirmTypo,
              styles.confirmPosition,
            ]} placeholder={'Enter your email'} getInput={(InputEmail1) => getInputUsername(InputEmail1)} />
          
        </View>
        <View style={[styles.input2Email, styles.childLayout]}>
          <View
            style={[
              styles.input4PasswordChild,
              styles.childLayout,
              styles.childLayout1,
            ]}
          />
          <TextInput style={[
              styles.enterYourEmail,
              styles.confirmTypo,
              styles.confirmPosition,
            ]} placeholder={'Confirm email'} getInput={(InputEmail2) => getInputUsername(InputEmail2)} />
        </View>
        <View style={[styles.input1FullName, styles.childLayout]}>
          <View
            style={[
              styles.input4PasswordChild,
              styles.childLayout,
              styles.childLayout1,
            ]}
          />
          <TextInput style={[
              styles.enterYourEmail,
              styles.confirmTypo,
              styles.confirmPosition,
            ]} placeholder={'Enter your username'} getInput={(InputUsername) => getInputUsername(InputUsername)} />
        </View>
        <Pressable
          style={styles.alreadyHaveAnContainer}
          onPress={() => navigation.navigate("Login1")}
        >
          <Text style={[styles.text1, styles.confirmTypo]}>
            <Text
              style={styles.alreadyHaveAn}
            >{`Already have an account? `}</Text>
            <Text style={styles.signIn}>Sign in</Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.loginButton, styles.loginLayout]}
          onPress={() => navigation.navigate("Login5")}
        >
          <View style={[styles.loginButtonChild, styles.loginLayout]} />
          <Text style={styles.signUp}>Sign Up</Text>
        </Pressable>
        <View style={[styles.input5ConfirmPassword, styles.childLayout]}>
          <View
            style={[
              styles.input4PasswordChild,
              styles.childLayout,
              styles.childLayout1,
            ]}
          />
          <TextInput style={[
              styles.enterYourEmail,
              styles.confirmTypo,
              styles.confirmPosition,
            ]} placeholder={'Confirm password'} getInput={(InputPassword2) => getInputUsername(InputPassword2)} />
          
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
  childLayout: {
    height: 50,
    width: 346,
    left: 0,
    position: "absolute",
  },
  childLayout1: {
    borderRadius: Border.br_mini,
    height: 50,
  },
  confirmTypo: {
    height: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
  },
  confirmPosition: {
    color: Color.darkgray,
    left: 16,
    height: 26,
    fontSize: FontSize.size_lg,
    top: 12,
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
  signUpAn: {
    left: 56,
    width: 235,
    height: 45,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.blackBase,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 305,
    backgroundColor: Color.gainsboro_100,
  },
  input4PasswordChild: {
    backgroundColor: Color.ivory,
    top: 0,
  },
  enterYourPassword: {
    width: 182,
  },
  input4Password: {
    top: 304,
  },
  enterYourEmail: {
    width: 200,
  },
  input3ConfirmEmail: {
    top: 158,
  },
  confirmEmail: {
    width: 170,
  },
  input2Email: {
    top: 231,
  },
  enterYourUsername: {
    width: 192,
  },
  input1FullName: {
    top: 85,
  },
  alreadyHaveAn: {
    color: Color.blackBase,
  },
  signIn: {
    color: Color.darkorange,
  },
  text1: {
    width: 295,
    height: 26,
    fontSize: FontSize.size_lg,
  },
  alreadyHaveAnContainer: {
    left: 26,
    top: 561,
    position: "absolute",
  },
  loginButtonChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.blackBase,
    top: 0,
  },
  signUp: {
    left: 128,
    color: Color.white,
    width: 90,
    height: 38,
    top: 12,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  loginButton: {
    top: 488,
  },
  confirmPassword: {
    width: 211,
  },
  input5ConfirmPassword: {
    top: 377,
  },
  signUpAnAccountParent: {
    top: 153,
    left: 35,
    height: 587,
    width: 346,
    position: "absolute",
  },
  login2: {
    backgroundColor: Color.palegoldenrod,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Login2;
