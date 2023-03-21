import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1417 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1417}>
      <Text style={[styles.am, styles.amTypo, styles.amTypo1, styles.amTypo2]}>
        8:00 AM
      </Text>
      <Text style={[styles.pm, styles.amTypo, styles.amTypo1, styles.amTypo2]}>
        6:00 PM
      </Text>
      <Text
        style={[
          styles.yourProgressFor,
          styles.amTypo,
          styles.amTypo1,
          styles.amTypo2,
        ]}
      >
        Your Progress For Today (0/5)
      </Text>
      <View style={[styles.medA, styles.medLayout]}>
        <View style={[styles.medAChild, styles.medLayout]} />
        <Image
          style={[styles.iconImage, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-icon-image1.png")}
        />
        <View
          style={[
            styles.medicationParentLayout,
            styles.take2PillsLayout,
            styles.medicationParentPosition,
          ]}
        >
          <Text style={styles.medicationA}>Medication A</Text>
          <Text
            style={[
              styles.take1Layout,
              styles.take1Typo,
              styles.take1Position,
              styles.take2PillsLayout,
            ]}
          >{`Take 2 Pills / Time, 1 Time Left `}</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
      </View>
      <View style={[styles.medB, styles.medLayout]}>
        <View style={[styles.iconImage1, styles.medLayout]}>
          <View style={[styles.iconImage1, styles.medLayout]}>
            <View style={[styles.medAChild, styles.medLayout]} />
            <Image
              style={[styles.iconImage, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/-icon-image1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.take1PillLayout,
            styles.medicationParentLayout,
            styles.medicationParentPosition,
          ]}
        >
          <Text style={styles.medicationA}>Medication B</Text>
          <Text
            style={[
              styles.take1PillLayout,
              styles.take1Layout,
              styles.take1Typo,
              styles.take1Position,
            ]}
          >{`Take 1 Pill / Time, 2 Times Left `}</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
      </View>
      <View style={[styles.medC, styles.medLayout]}>
        <View style={[styles.iconImage1, styles.medLayout]}>
          <View style={[styles.medAChild, styles.medLayout]} />
          <Image
            style={[styles.iconImage, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/-icon-image1.png")}
          />
        </View>
        <View
          style={[styles.take2PillsLayout, styles.medicationParentPosition]}
        >
          <Text style={styles.medicationA}>Medication C</Text>
          <Text
            style={[
              styles.take1Typo,
              styles.take1Position,
              styles.take2PillsLayout,
            ]}
          >{`Take 1 Pill / Time, 1 Time Left `}</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
      </View>
      <Text style={[styles.pm1, styles.amTypo, styles.amTypo1, styles.amTypo2]}>
        10:00 PM
      </Text>
      <View style={[styles.medB1, styles.medLayout]}>
        <View style={[styles.medicationBGroup, styles.medicationParentLayout]}>
          <Text style={styles.medicationA}>Medication B</Text>
          <Text
            style={[
              styles.take1Pill2,
              styles.take1Layout,
              styles.take1Typo,
              styles.take1Position,
            ]}
          >{`Take 1 Pill / Time `}</Text>
          <Text style={[styles.timesLeft, styles.take1Typo]}>2 Times Left</Text>
        </View>
        <View style={[styles.iconImage1, styles.medLayout]}>
          <View style={[styles.iconImage1, styles.medLayout]}>
            <View style={[styles.medAChild, styles.medLayout]} />
            <Image
              style={[styles.iconImage, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/-icon-image1.png")}
            />
          </View>
          <View
            style={[
              styles.take1Pill3Layout,
              styles.medicationParentLayout,
              styles.medicationParentPosition,
            ]}
          >
            <Text style={styles.medicationA}>Medication B</Text>
            <Text
              style={[
                styles.take1Pill3Layout,
                styles.take1Layout,
                styles.take1Typo,
                styles.take1Position,
              ]}
            >{`Take 1 Pill / Time, 2 Times Left `}</Text>
          </View>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View
          style={[
            styles.rectangleView,
            styles.groupLayout,
            styles.groupChild2Bg,
          ]}
        />
        <Image
          style={[styles.groupChildPosition, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <View style={styles.reminderParent}>
          <Text style={[styles.reminder, styles.reminderTypo]}>Reminder</Text>
          <Pressable
            style={[styles.iconCogParent, styles.iconPosition1]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={[styles.iconCog, styles.iconPosition1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/-icon-cog1.png")}
            />
            <Text
              style={[styles.settings, styles.textTypo, styles.take1Layout]}
            >
              Settings
            </Text>
          </Pressable>
          <View style={styles.vectorParent}>
            <Pressable
              style={[styles.vector, styles.iconPosition1]}
              onPress={() => navigation.navigate("IPhone146")}
            >
              <Image
                style={[styles.iconLayout, styles.iconLayout1]}
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
      <View style={styles.iphone1417Child} />
      <View
        style={[styles.groupParent, styles.groupLayout, styles.groupPosition]}
      >
        <View style={[styles.rectangleWrapper, styles.groupChildLayout]}>
          <View
            style={[
              styles.groupChild2,
              styles.groupChildLayout,
              styles.groupLayout,
              styles.groupChild2Bg,
            ]}
          />
        </View>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("IPhone1460")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/group-251.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupChild3, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
        <Text style={[styles.ondose, styles.amTypo, styles.amTypo1]}>
          OnDose
        </Text>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("ProfileCompletedDay")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/vector14.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.reminder1, styles.reminderLayout]}>
        <Text
          style={[
            styles.aFriendlyReminder,
            styles.reminderLayout,
            styles.textTypo1,
          ]}
        >
          A Friendly Reminder: It’s not the time yet
        </Text>
        <Pressable
          style={[styles.okButton, styles.buttonLayout]}
          onPress={() => navigation.navigate("IPhone141")}
        >
          <View style={[styles.okButton1, styles.buttonLayout]}>
            <View style={[styles.okButton1, styles.buttonLayout]}>
              <View style={[styles.loginButtonChild, styles.buttonLayout]} />
            </View>
          </View>
          <View style={[styles.okWrapper, styles.okLayout]}>
            <Text style={[styles.ok, styles.okLayout, styles.amTypo]}>OK</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amTypo: {
    textAlign: "left",
    fontWeight: "700",
  },
  amTypo1: {
    color: Color.blackBase,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  amTypo2: {
    fontFamily: FontFamily.openSansBold,
    fontSize: FontSize.size_lg,
    color: Color.blackBase,
  },
  medLayout: {
    height: 60,
    width: 368,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  take2PillsLayout: {
    width: 190,
    position: "absolute",
  },
  medicationParentPosition: {
    left: 68,
    height: 39,
    top: 10,
  },
  take1Typo: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    top: 23,
    textAlign: "left",
  },
  take1Position: {
    fontSize: FontSize.size_xs,
    top: 23,
    height: 16,
    color: Color.darkslategray_100,
    left: 0,
  },
  medicationParentLayout: {
    height: 39,
    top: 10,
  },
  take1Layout: {
    height: 16,
    fontFamily: FontFamily.openSansRegular,
  },
  groupPosition: {
    left: -1,
    width: 415,
  },
  groupLayout: {
    height: 88,
    position: "absolute",
  },
  groupChild2Bg: {
    backgroundColor: Color.palegoldenrod,
    height: 88,
  },
  groupChildLayout: {
    width: 414,
    top: 0,
  },
  reminderTypo: {
    height: 22,
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    left: "50%",
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  iconPosition1: {
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  groupChildPosition: {
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
  textTypo1: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  reminderLayout: {
    width: 301,
    position: "absolute",
  },
  buttonLayout: {
    height: 34,
    width: 85,
    position: "absolute",
  },
  okLayout: {
    height: 29,
    width: 47,
    position: "absolute",
  },
  am: {
    top: 168,
    fontFamily: FontFamily.openSansBold,
    left: 23,
  },
  pm: {
    top: 275,
    fontFamily: FontFamily.openSansBold,
    left: 23,
  },
  yourProgressFor: {
    top: 108,
    left: 22,
    fontFamily: FontFamily.openSansBold,
  },
  medAChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.khaki,
    left: 0,
    top: 0,
  },
  iconImage: {
    height: "70.77%",
    width: "11.54%",
    top: "15%",
    right: "84.66%",
    bottom: "14.23%",
    left: "3.8%",
    position: "absolute",
  },
  medicationA: {
    width: 96,
    height: 17,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  vectorIcon: {
    height: "65.47%",
    width: "10.67%",
    top: "16.67%",
    right: "6.45%",
    bottom: "17.87%",
    left: "82.88%",
    position: "absolute",
  },
  medA: {
    top: 198,
    left: 22,
  },
  iconImage1: {
    left: 0,
    top: 0,
  },
  take1PillLayout: {
    width: 171,
    position: "absolute",
  },
  medB: {
    top: 305,
    left: 22,
  },
  medC: {
    top: 385,
    left: 22,
  },
  pm1: {
    top: 462,
    left: 22,
    fontFamily: FontFamily.openSansBold,
  },
  take1Pill2: {
    width: 105,
    position: "absolute",
  },
  timesLeft: {
    left: 190,
    width: 68,
    fontFamily: FontFamily.openSansRegular,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    top: 23,
    height: 15,
    position: "absolute",
  },
  medicationBGroup: {
    left: 46,
    width: 258,
    height: 39,
    top: 10,
    position: "absolute",
  },
  take1Pill3Layout: {
    width: 181,
    position: "absolute",
  },
  medB1: {
    top: 492,
    left: 22,
  },
  rectangleView: {
    top: 1,
    left: 2,
    width: 413,
  },
  vectorIcon5: {
    height: "40.96%",
    width: "7.67%",
    top: "15.57%",
    right: "81.66%",
    bottom: "43.48%",
    left: "10.67%",
    position: "absolute",
  },
  reminder: {
    marginLeft: -173.5,
    width: 64,
    top: 43,
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
    top: 43,
    left: "50%",
  },
  iconCogParent: {
    height: "90.77%",
    width: "15.56%",
    bottom: "9.23%",
    left: "84.44%",
    right: "0%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vector: {
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
  groupView: {
    top: 807,
    height: 89,
    width: 415,
    position: "absolute",
  },
  iphone1417Child: {
    top: 138,
    backgroundColor: Color.lightgoldenrodyellow,
    height: 13,
    width: 368,
    left: 22,
    position: "absolute",
  },
  groupChild2: {
    left: 0,
  },
  rectangleWrapper: {
    left: 1,
    width: 414,
    height: 88,
    position: "absolute",
  },
  wrapper: {
    top: 35,
    width: 26,
    height: 43,
    left: 23,
    position: "absolute",
  },
  groupChild3: {
    top: 88,
    width: 415,
  },
  ondose: {
    top: 47,
    left: 153,
    fontSize: FontSize.size_5xl,
    fontStyle: "italic",
    fontFamily: FontFamily.openSansBoldItalic,
    width: 89,
    height: 28,
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
  vectorIcon6: {
    height: "61.46%",
    width: "4.43%",
    right: "8.58%",
    bottom: "13.59%",
    left: "86.98%",
  },
  vectorIcon7: {
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
    width: 415,
    top: 0,
  },
  aFriendlyReminder: {
    color: Color.firebrick,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    width: 301,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    height: 39,
  },
  loginButtonChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.blackBase,
    left: 0,
    top: 0,
  },
  okButton1: {
    left: 0,
    top: 0,
  },
  ok: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    left: 0,
    top: 0,
    fontFamily: FontFamily.openSansBold,
    textAlign: "left",
    fontWeight: "700",
    width: 47,
    height: 17,
  },
  okWrapper: {
    top: 3,
    left: 27,
  },
  okButton: {
    top: 36,
    left: 108,
  },
  reminder1: {
    top: 569,
    left: 57,
    height: 70,
  },
  iphone1417: {
    backgroundColor: Color.lightyellow,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1417;
