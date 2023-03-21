import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1460 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1460}>
      <Text style={[styles.medicationsTakenToday, styles.ondoseFlexBox]}>
        Medications Taken Today
      </Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupBg]} />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("IPhone141")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector5.png")}
          />
        </Pressable>
        <View style={styles.reminderParent}>
          <Text style={[styles.reminder, styles.reminderTypo]}>Reminder</Text>
          <Pressable
            style={[styles.iconCogParent, styles.iconPosition1]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={[styles.iconCog, styles.iconPosition1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/-icon-cog1.png")}
            />
            <Text style={styles.settings}>Settings</Text>
          </Pressable>
          <View style={styles.vectorParent}>
            <Pressable
              style={[styles.vector1, styles.iconPosition1]}
              onPress={() => navigation.navigate("IPhone146")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
            </Pressable>
            <Text style={[styles.myMedications, styles.reminderTypo]}>
              My Medications
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View
          style={[
            styles.rectangleWrapper,
            styles.vectorIconPosition,
            styles.groupLayout,
          ]}
        >
          <View
            style={[styles.groupInner, styles.groupLayout, styles.groupBg]}
          />
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
        <Text style={[styles.ondose, styles.ondoseFlexBox]}>OnDose</Text>
        <Pressable
          style={styles.vector2}
          onPress={() => navigation.navigate("ProfileCompletedDay")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone141")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-20.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ondoseFlexBox: {
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.palegoldenrod,
    height: 88,
    position: "absolute",
  },
  groupLayout: {
    width: 414,
    top: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  reminderTypo: {
    height: 22,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    left: "50%",
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  iconPosition1: {
    top: "0%",
    position: "absolute",
  },
  vectorIconPosition: {
    left: 1,
    position: "absolute",
  },
  iconPosition: {
    top: "24.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  medicationsTakenToday: {
    top: 104,
    left: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    color: Color.blackBase,
  },
  groupChild: {
    top: 1,
    left: 2,
    width: 413,
    height: 88,
  },
  groupItem: {
    height: 1,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "10.67%",
    top: "15.57%",
    right: "81.66%",
    bottom: "43.48%",
    width: "7.67%",
    height: "40.96%",
    position: "absolute",
  },
  reminder: {
    marginLeft: -173.5,
    width: 64,
    top: 43,
    height: 22,
  },
  iconCog: {
    height: "69.49%",
    width: "75.93%",
    right: "11.11%",
    bottom: "30.51%",
    left: "12.96%",
  },
  settings: {
    marginLeft: -27,
    width: 54,
    height: 16,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    top: 43,
    left: "50%",
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  iconCogParent: {
    height: "90.77%",
    width: "15.56%",
    bottom: "9.23%",
    left: "84.44%",
    right: "0%",
  },
  vector1: {
    left: "28.97%",
    right: "30.35%",
    bottom: "46.4%",
    width: "40.68%",
    height: "53.6%",
  },
  myMedications: {
    marginLeft: -53.5,
    top: 40,
    width: 107,
  },
  vectorParent: {
    height: "95.38%",
    width: "30.84%",
    top: "3.08%",
    right: "32.56%",
    bottom: "1.54%",
    left: "36.6%",
    position: "absolute",
  },
  reminderParent: {
    marginLeft: -179.5,
    top: 12,
    width: 347,
    height: 65,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 807,
    height: 89,
    width: 415,
    left: 0,
    position: "absolute",
  },
  groupInner: {
    height: 88,
    left: 0,
  },
  rectangleWrapper: {
    height: 88,
  },
  vectorIcon: {
    top: 88,
    height: 1,
    width: 415,
  },
  ondose: {
    top: 47,
    left: 153,
    fontSize: FontSize.size_5xl,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.openSansBoldItalic,
    width: 89,
    height: 28,
  },
  vector2: {
    left: "85.16%",
    top: "42.22%",
    right: "3.84%",
    bottom: "5.9%",
    width: "11%",
    height: "51.87%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "61.46%",
    width: "4.43%",
    right: "8.58%",
    bottom: "13.59%",
    left: "86.98%",
  },
  text: {
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    top: 0,
    left: 0,
    textAlign: "left",
    color: Color.blackBase,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  vectorIcon2: {
    height: "67.05%",
    width: "6.65%",
    bottom: "8.01%",
    left: "93.35%",
    right: "0%",
  },
  iconSignal: {
    height: "63.17%",
    width: "4.15%",
    right: "14.95%",
    bottom: "11.89%",
    left: "80.89%",
  },
  iphoneScreenDefault: {
    height: "21.59%",
    width: "92.37%",
    top: "9.09%",
    right: "2.81%",
    bottom: "69.32%",
    left: "4.82%",
    position: "absolute",
  },
  groupParent: {
    left: -1,
    top: 0,
    height: 88,
    width: 415,
    position: "absolute",
  },
  wrapper: {
    left: "4.59%",
    top: "5.58%",
    right: "88.41%",
    bottom: "91.31%",
    width: "7%",
    height: "3.11%",
    position: "absolute",
  },
  iphone1460: {
    backgroundColor: Color.lightyellow,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1460;
