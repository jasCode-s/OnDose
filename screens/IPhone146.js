import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone146 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone146}>
      <Text
        style={[styles.yourMedications, styles.yourTypo]}
      >{`Your Medications `}</Text>
      <Text
        style={[styles.yourSupplements, styles.yourTypo]}
      >{`Your Supplements `}</Text>
      <Text style={[styles.addANew, styles.addTypo]}>
        Add A New Medication/Supplement
      </Text>
      <Text style={[styles.addANew1, styles.addTypo]}>
        Add A New Medication/Supplement
      </Text>
      <Image
        style={[styles.iconImage, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/-icon-image2.png")}
      />
      <Image
        style={[styles.iphone146Child, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/group-6.png")}
      />
      <View style={[styles.iphone146Inner, styles.iphone146InnerLayout]}>
        <View
          style={[
            styles.noSupplementAddedYetWrapper,
            styles.loginPosition,
            styles.iphone146InnerLayout,
          ]}
        >
          <Text style={styles.noSupplementAdded}>No Supplement Added Yet</Text>
        </View>
      </View>
      <View
        style={[
          styles.medicationBParent,
          styles.medicationParentLayout,
          styles.medicationParentLayout1,
        ]}
      >
        <Text
          style={[styles.medicationB, styles.loginPosition, styles.textTypo1]}
        >
          Medication B
        </Text>
        <Text
          style={[
            styles.take1Pill,
            styles.take1PillTypo,
            styles.medicationParentLayout,
          ]}
        >
          Take 1 Pill / Time, 2 Times / Day
        </Text>
      </View>
      <View
        style={[
          styles.medicationCParent,
          styles.medicationParentLayout,
          styles.medicationParentLayout1,
        ]}
      >
        <Text
          style={[styles.medicationB, styles.loginPosition, styles.textTypo1]}
        >
          Medication C
        </Text>
        <Text
          style={[
            styles.take1Pill,
            styles.take1PillTypo,
            styles.medicationParentLayout,
          ]}
        >{`Take 1 Pill / Time, 1 Time / Day `}</Text>
      </View>
      <View style={[styles.loginButtonParent, styles.loginLayout]}>
        <View style={[styles.loginLayout, styles.loginPosition]}>
          <View
            style={[
              styles.loginButtonChild,
              styles.loginLayout,
              styles.loginPosition,
            ]}
          />
        </View>
        <Text style={[styles.addANew2, styles.ondoseTypo]}>Add A New One</Text>
      </View>
      <View style={[styles.iconImageParent, styles.iconLayout2]}>
        <Image
          style={[styles.iconImage1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-icon-image3.png")}
        />
        <View style={[styles.medicationAParent, styles.take2PillsLayout]}>
          <Text
            style={[styles.medicationB, styles.loginPosition, styles.textTypo1]}
          >
            Medication A
          </Text>
          <Text
            style={[
              styles.take2Pills,
              styles.take2PillsLayout,
              styles.take1PillTypo,
            ]}
          >{`Take 2 Pills / Time, 1 Time / Day `}</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector19.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View
          style={[styles.groupChild, styles.groupLayout1, styles.groupBg]}
        />
        <Image
          style={[styles.groupPosition, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("IPhone141")}
        >
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Text
          style={[
            styles.reminder,
            styles.textTypo,
            styles.reminderTypo,
            styles.reminderPosition,
          ]}
        >
          Reminder
        </Text>
        <Pressable
          style={styles.iconCog}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/-icon-cog1.png")}
          />
        </Pressable>
        <Text
          style={[
            styles.settings,
            styles.textTypo,
            styles.reminderTypo,
            styles.reminderPosition,
          ]}
        >
          Settings
        </Text>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector20.png")}
          />
          <Text
            style={[styles.myMedications, styles.textTypo, styles.reminderTypo]}
          >
            My Medications
          </Text>
        </View>
      </View>
      <View
        style={[styles.groupParent, styles.groupLayout1, styles.parentPosition]}
      >
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View
            style={[styles.groupLayout, styles.groupLayout1, styles.groupBg]}
          />
        </View>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("IPhone1460")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/group-25.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupChild1, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
        <Text style={[styles.ondose, styles.ondoseTypo]}>OnDose</Text>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("ProfileCompletedDay")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yourTypo: {
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.blackBase,
    fontFamily: FontFamily.openSansBold,
    position: "absolute",
  },
  addTypo: {
    width: 258,
    left: 67,
    top: 725,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout2: {
    height: 60,
    width: 368,
    left: 22,
    position: "absolute",
  },
  iphone146InnerLayout: {
    width: 222,
    height: 22,
    position: "absolute",
  },
  loginPosition: {
    left: 0,
    top: 0,
  },
  medicationParentLayout: {
    width: 185,
    position: "absolute",
  },
  medicationParentLayout1: {
    left: 90,
    height: 39,
    width: 185,
  },
  textTypo1: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    left: 0,
  },
  take1PillTypo: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_xs,
    top: 23,
    height: 16,
    color: Color.darkslategray_100,
    left: 0,
    textAlign: "left",
  },
  loginLayout: {
    height: 61,
    width: 346,
    position: "absolute",
  },
  ondoseTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  take2PillsLayout: {
    width: 196,
    position: "absolute",
  },
  parentPosition: {
    left: -1,
    width: 415,
  },
  groupLayout1: {
    height: 88,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.palegoldenrod,
    height: 88,
    left: 0,
  },
  groupLayout: {
    width: 414,
    top: 0,
  },
  textTypo: {
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  reminderTypo: {
    left: "50%",
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    fontFamily: FontFamily.openSansRegular,
  },
  reminderPosition: {
    top: 55,
    left: "50%",
  },
  groupPosition: {
    height: 1,
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
  yourMedications: {
    top: 103,
    width: 179,
    left: 22,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  yourSupplements: {
    top: 378,
    left: 24,
    width: 177,
  },
  addANew: {
    color: Color.blackBase,
  },
  addANew1: {
    color: Color.white,
  },
  iconImage: {
    top: 213,
  },
  iphone146Child: {
    top: 293,
  },
  noSupplementAdded: {
    fontSize: FontSize.iBMPlexSansBody1_size,
    color: Color.darkslategray_100,
    left: 0,
    top: 0,
    height: 22,
    width: 222,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  noSupplementAddedYetWrapper: {
    height: 22,
  },
  iphone146Inner: {
    top: 408,
    left: 99,
    height: 22,
  },
  medicationB: {
    width: 96,
    height: 17,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  take1Pill: {
    height: 16,
  },
  medicationBParent: {
    top: 223,
    height: 39,
  },
  medicationCParent: {
    top: 303,
    height: 39,
  },
  loginButtonChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.blackBase,
  },
  addANew2: {
    top: 13,
    left: 78,
    width: 190,
    height: 35,
    color: Color.white,
    fontFamily: FontFamily.openSansBold,
    fontSize: FontSize.size_5xl,
  },
  loginButtonParent: {
    top: 684,
    left: 34,
  },
  iconImage1: {
    height: "66.67%",
    width: "11.8%",
    top: "16.67%",
    right: "84.66%",
    bottom: "16.67%",
    left: "3.54%",
    position: "absolute",
  },
  take2Pills: {
    height: 16,
  },
  medicationAParent: {
    top: 11,
    left: 74,
    height: 39,
  },
  vectorIcon: {
    height: "54.85%",
    width: "10.1%",
    top: "23.33%",
    right: "5.39%",
    bottom: "21.82%",
    left: "84.51%",
    position: "absolute",
  },
  iconImageParent: {
    top: 133,
    borderRadius: Border.br_mini,
    backgroundColor: Color.khaki,
  },
  groupChild: {
    top: 1,
    width: 413,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "10.91%",
    top: "15.57%",
    right: "81.42%",
    bottom: "43.48%",
    width: "7.67%",
    height: "40.96%",
    position: "absolute",
  },
  reminder: {
    marginLeft: -178.5,
    width: 64,
    height: 22,
  },
  iconCog: {
    left: "79.28%",
    top: "13.48%",
    right: "10.84%",
    bottom: "40.45%",
    width: "9.88%",
    height: "46.07%",
    position: "absolute",
  },
  settings: {
    marginLeft: 114.5,
    width: 54,
    height: 16,
  },
  vectorIcon1: {
    height: "53.6%",
    width: "40.68%",
    top: "0%",
    right: "30.35%",
    bottom: "46.4%",
    left: "28.97%",
    position: "absolute",
  },
  myMedications: {
    marginLeft: -53.5,
    top: 40,
    width: 107,
    height: 22,
  },
  vectorParent: {
    height: "69.66%",
    width: "25.78%",
    top: "15.73%",
    right: "36.63%",
    bottom: "14.61%",
    left: "37.59%",
    position: "absolute",
  },
  rectangleParent: {
    top: 808,
    height: 89,
    width: 415,
    position: "absolute",
  },
  rectangleWrapper: {
    left: 1,
    width: 414,
    height: 88,
    position: "absolute",
  },
  wrapper: {
    left: 23,
    top: 35,
    width: 26,
    height: 43,
    position: "absolute",
  },
  groupChild1: {
    top: 88,
    width: 415,
  },
  ondose: {
    top: 47,
    left: 153,
    fontStyle: "italic",
    fontFamily: FontFamily.openSansBoldItalic,
    width: 89,
    height: 28,
    color: Color.blackBase,
  },
  vector1: {
    left: "85.16%",
    top: "42.22%",
    right: "3.84%",
    bottom: "5.9%",
    width: "11%",
    height: "51.87%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "61.46%",
    width: "4.43%",
    right: "8.58%",
    bottom: "13.59%",
    left: "86.98%",
  },
  vectorIcon3: {
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
    height: "21.59%",
    width: "92.37%",
    top: "9.09%",
    right: "2.81%",
    bottom: "69.32%",
    left: "4.82%",
    position: "absolute",
  },
  groupParent: {
    width: 415,
    height: 88,
    top: 0,
    left: -1,
  },
  iphone146: {
    backgroundColor: Color.lightyellow,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone146;
