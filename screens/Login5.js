import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Login5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login5}>
      <View style={styles.iphoneScreenDefault}>
      </View>
      <View style={styles.congratulationsYouveSignedParent}>
        <Text
          style={[styles.congratulationsYouveSigned, styles.textTypo]}
        >{`Congratulations! 
You’ve signed up successfully!`}</Text>
        <Pressable
          style={[styles.loginButton, styles.loginLayout]}
          onPress={() => navigation.navigate("IPhone141")}
        >
          <View style={[styles.loginButtonChild, styles.loginLayout]} />
          <Text style={[styles.logIn, styles.textFlexBox]}>Log In</Text>
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
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    color: Color.blackBase,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    top: 0,
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
    textAlign: "left",
    color: Color.blackBase,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
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
  congratulationsYouveSigned: {
    left: 24,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    width: 304,
    height: 80,
    position: "absolute",
  },
  loginButtonChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.blackBase,
    top: 0,
    height: 61,
  },
  logIn: {
    top: 11,
    left: 136,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.white,
    width: 73,
    height: 38,
  },
  loginButton: {
    top: 303,
  },
  congratulationsYouveSignedParent: {
    top: 337,
    left: 35,
    height: 364,
    width: 346,
    position: "absolute",
  },
  login5: {
    backgroundColor: Color.palegoldenrod,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Login5;
