import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Login4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login4}>
      <View style={styles.congratsParent}>
        <Text style={styles.congrats}>Congrats!</Text>
        <Text
          style={[
            styles.anEmailWith,
            styles.text1Typo,
            styles.anEmailWithPosition,
          ]}
        >{`An email with a link to reset your password has been successfully sent to your email address! 
Please check your email for the next  steps.`}</Text>
        <Pressable
          style={[styles.alreadyResetYourContainer, styles.anEmailWithPosition]}
          onPress={() => navigation.navigate("Login1")}
        >
          <Text style={[styles.text1, styles.text1Typo]}>
            <Text
              style={styles.alreadyResetYour}
            >{`Already reset your password? `}</Text>
            <Text style={styles.signIn}>Sign in</Text>
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
  text1Typo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
  },
  anEmailWithPosition: {
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
    color: Color.blackBase,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    left: 0,
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
  congrats: {
    left: 100,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    width: 116,
    height: 45,
    textAlign: "left",
    color: Color.blackBase,
    top: 0,
    position: "absolute",
  },
  anEmailWith: {
    top: 196,
    color: Color.darkslategray_100,
    textAlign: "center",
    width: 316,
    height: 124,
  },
  alreadyResetYour: {
    color: Color.blackBase,
  },
  signIn: {
    color: Color.darkorange,
  },
  text1: {
    height: 26,
    width: 320,
    textAlign: "left",
  },
  alreadyResetYourContainer: {
    top: 471,
  },
  congratsParent: {
    top: 151,
    left: 43,
    height: 497,
    width: 320,
    position: "absolute",
  },
  login4: {
    backgroundColor: Color.palegoldenrod,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Login4;
