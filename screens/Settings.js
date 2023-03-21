import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <View
        style={[
          styles.settingsChild,
          styles.settingsShadowBox,
          styles.settingsShadowBox1,
        ]}
      />
      <View
        style={[
          styles.settingsItem,
          styles.settingsShadowBox,
          styles.settingsShadowBox1,
        ]}
      />
      <View style={[styles.settingsInner, styles.settingsShadowBox]} />
      <Text
        style={[
          styles.notificationSettings,
          styles.settingsTypo,
          styles.settingsTypo1,
        ]}
      >{`Notification Settings `}</Text>
      <Text style={[styles.logOut, styles.settingsTypo]}>Log Out</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={[styles.groupPosition, styles.rectangleLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.iconLayout1, styles.vectorPosition1]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={styles.reminderParent}>
          <Text style={[styles.reminder, styles.reminderTypo]}>Reminder</Text>
          <Image
            style={styles.iconCog}
            resizeMode="cover"
            source={require("../assets/-icon-cog.png")}
          />
          <Text style={[styles.settings1, styles.textFlexBox]}>Settings</Text>
          <View style={styles.vectorParent}>
            <Image
              style={[styles.vectorPosition, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
            <Text style={[styles.myMedications, styles.reminderTypo]}>
              My Medications
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.rectangleLayout}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Pressable
          style={styles.vectorPosition1}
          onPress={() => navigation.navigate("IPhone141")}
        >
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={styles.reminderParent}>
          <Text style={[styles.reminder, styles.reminderTypo]}>Reminder</Text>
          <Image
            style={styles.iconCog}
            resizeMode="cover"
            source={require("../assets/-icon-cog.png")}
          />
          <Text style={[styles.settings1, styles.textFlexBox]}>Settings</Text>
          <View style={styles.vectorParent}>
            <Pressable
              style={styles.vectorPosition}
              onPress={() => navigation.navigate("IPhone146")}
            >
              <Image
                style={styles.iconLayout1}
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
        <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
          <View style={[styles.rectangleLayout, styles.groupChildPosition]} />
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
          style={[styles.groupChild2, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
        <Text style={[styles.ondose, styles.textFlexBox]}>OnDose</Text>
        <Pressable
          style={styles.vector2}
          onPress={() => navigation.navigate("ProfileCompletedDay")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
      </View>
      <Text
        style={[
          styles.accountSettings,
          styles.settingsTypo,
          styles.settingsTypo1,
        ]}
      >
        Account Settings
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsShadowBox: {
    height: 60,
    width: 368,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.khaki,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  settingsShadowBox1: {
    left: 22,
    width: 368,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.khaki,
    borderRadius: Border.br_mini,
  },
  settingsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  settingsTypo1: {
    color: Color.blackBase,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  groupChildPosition: {
    height: 88,
    backgroundColor: Color.palegoldenrod,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    width: 414,
    top: 0,
  },
  vectorPosition1: {
    left: "10.91%",
    bottom: "43.48%",
    right: "81.42%",
    top: "15.57%",
    width: "7.67%",
    height: "40.96%",
    position: "absolute",
  },
  reminderTypo: {
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    left: "50%",
    color: Color.blackBase,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  settingsChild: {
    top: 109,
  },
  settingsItem: {
    top: 183,
  },
  settingsInner: {
    top: 256,
    left: 21,
  },
  notificationSettings: {
    top: 198,
    left: 109,
  },
  logOut: {
    top: 274,
    left: 162,
    color: Color.firebrick,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  groupChild: {
    top: 1,
    width: 413,
  },
  reminder: {
    marginLeft: -173.5,
    width: 64,
    top: 43,
    height: 22,
  },
  iconCog: {
    height: "63.08%",
    width: "11.82%",
    right: "1.73%",
    bottom: "36.92%",
    left: "86.46%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  settings1: {
    marginLeft: 119.5,
    width: 54,
    height: 16,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    top: 43,
    left: "50%",
  },
  vectorPosition: {
    left: "28.97%",
    bottom: "46.4%",
    right: "30.35%",
    width: "40.68%",
    height: "53.6%",
    top: "0%",
    position: "absolute",
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
    marginLeft: -178.5,
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
    left: -1,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  groupChild2: {
    top: 88,
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
  vectorIcon2: {
    height: "61.46%",
    width: "4.43%",
    right: "8.58%",
    bottom: "13.59%",
    left: "86.98%",
  },
  text: {
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    textAlign: "left",
    top: 0,
    left: 0,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
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
    top: 0,
    height: 88,
    width: 415,
    left: -1,
    position: "absolute",
  },
  accountSettings: {
    top: 127,
    left: 125,
  },
  settings: {
    backgroundColor: Color.lightyellow,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Settings;
