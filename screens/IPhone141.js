import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone141 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone141}>
      <View
        style={[
          styles.iphone141Child,
          styles.rectangleViewLayout,
          styles.childLayout,
        ]}
      />
      <Text style={[styles.am, styles.amTypo, styles.amTypo1]}>8:00 AM</Text>
      <Text style={[styles.pm, styles.amTypo, styles.amTypo1]}>6:00 PM</Text>
      <Text style={[styles.yourProgressFor, styles.amTypo]}>
        Your Progress For Today (0/5)
      </Text>
      <View style={[styles.vectorParent, styles.vectorParentPosition]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
        <Text style={styles.ondose}>OnDose</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("ProfileCompletedDay")}
        >
          <Image
            style={[styles.iconLayout2, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
      </View>
      <View style={styles.iphone141Item} />
      <View style={[styles.medA, styles.medLayout]}>
        <View
          style={[styles.medAChild, styles.medLayout, styles.medAChildPosition]}
        />
        <Image
          style={[styles.iconImage, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-icon-image1.png")}
        />
        <View
          style={[
            styles.medicationLayout,
            styles.take2PillsLayout,
            styles.medicationPosition,
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
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("IPhone145")}
        >
          <Image
            style={styles.iconLayout3}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.medB, styles.medLayout]}>
        <View
          style={[
            styles.iconImage1,
            styles.medLayout,
            styles.medAChildPosition,
          ]}
        >
          <View
            style={[
              styles.iconImage1,
              styles.medLayout,
              styles.medAChildPosition,
            ]}
          >
            <View
              style={[
                styles.medAChild,
                styles.medLayout,
                styles.medAChildPosition,
              ]}
            />
            <Image
              style={[styles.iconImage, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/-icon-image1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.medicationLayout,
            styles.take2PillsLayout,
            styles.medicationPosition,
          ]}
        >
          <Text style={styles.medicationA}>Medication B</Text>
          <Text
            style={[
              styles.take1Layout,
              styles.take1Typo,
              styles.take1Position,
              styles.take2PillsLayout,
            ]}
          >{`Take 1 Pill / Time, 2 Times Left `}</Text>
        </View>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("IPhone1417")}
        >
          <Image
            style={styles.iconLayout3}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.medC, styles.medLayout]}>
        <View
          style={[
            styles.iconImage1,
            styles.medLayout,
            styles.medAChildPosition,
          ]}
        >
          <View
            style={[
              styles.medAChild,
              styles.medLayout,
              styles.medAChildPosition,
            ]}
          />
          <Image
            style={[styles.iconImage2, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/-icon-image1.png")}
          />
        </View>
        <View
          style={[
            styles.medicationLayout,
            styles.take2PillsLayout,
            styles.medicationPosition,
          ]}
        >
          <Text style={styles.medicationA}>Medication C</Text>
          <Text
            style={[
              styles.take1Layout,
              styles.take1Typo,
              styles.take1Position,
              styles.take2PillsLayout,
            ]}
          >{`Take 1 Pill / Time, 1 Time Left `}</Text>
        </View>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("IPhone1417")}
        >
          <Image
            style={styles.iconLayout3}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
        </Pressable>
      </View>
      
      <View style={[styles.rectangleContainer, styles.vectorParentPosition]}>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Image
          style={[styles.groupChildPosition, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <View style={[styles.reminderParent, styles.settingsPosition]}>
          <Text style={[styles.reminder, styles.reminderTypo]}>Reminder</Text>
          <Pressable
            style={[styles.iconCogParent, styles.iconPosition]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={[styles.iconCog, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/-icon-cog1.png")}
            />
            <Text
              style={[
                styles.settings,
                styles.settingsPosition,
                styles.textTypo,
                styles.take1Layout,
              ]}
            >
              Settings
            </Text>
          </Pressable>
          <View style={styles.vectorGroup}>
            <Pressable
              style={styles.vector4}
              onPress={() => navigation.navigate("IPhone146")}
            >
              <Image
                style={styles.iconLayout3}
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
      <Text style={[styles.pm1, styles.amTypo]}>10:00 PM</Text>
      <View style={[styles.medB1, styles.medLayout]}>
        <View style={[styles.medicationBGroup, styles.medicationLayout]}>
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
        <View
          style={[
            styles.iconImage1,
            styles.medLayout,
            styles.medAChildPosition,
          ]}
        >
          <View
            style={[
              styles.iconImage1,
              styles.medLayout,
              styles.medAChildPosition,
            ]}
          >
            <View
              style={[
                styles.medAChild,
                styles.medLayout,
                styles.medAChildPosition,
              ]}
            />
            <Image
              style={[styles.iconImage, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/-icon-image1.png")}
            />
          </View>
          <View
            style={[
              styles.take1Pill3Layout,
              styles.medicationLayout,
              styles.medicationPosition,
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
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("IPhone1417")}
        >
          <Image
            style={styles.iconLayout3}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone1460")}
      >
        <Image
          style={styles.iconLayout3}
          resizeMode="cover"
          source={require("../assets/group-252.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    height: 88,
    backgroundColor: Color.palegoldenrod,
    position: "absolute",
  },
  childLayout: {
    width: 414,
    top: 0,
  },
  amTypo: {
    textAlign: "left",
    color: Color.blackBase,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  amTypo1: {
    left: 23,
    color: Color.blackBase,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  vectorParentPosition: {
    left: -1,
    width: 415,
    position: "absolute",
  },
  groupChildPosition: {
    height: 1,
    left: 1,
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  medLayout: {
    height: 60,
    width: 368,
    position: "absolute",
  },
  medAChildPosition: {
    top: 0,
    height: 60,
    left: 0,
  },
  iconLayout1: {
    bottom: "14.23%",
    top: "15%",
    width: "11.54%",
    height: "70.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  take2PillsLayout: {
    width: 180,
    position: "absolute",
  },
  medicationPosition: {
    left: 68,
    height: 39,
  },
  take1Typo: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    top: 23,
    textAlign: "left",
  },
  take1Position: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    top: 23,
    height: 16,
    left: 0,
  },
  iconLayout: {
    top: "24.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    textAlign: "left",
    color: Color.blackBase,
  },
  iconPosition: {
    right: "0%",
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  settingsPosition: {
    left: "50%",
    position: "absolute",
  },
  reminderTypo: {
    height: 22,
    left: "50%",
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  take1Layout: {
    height: 16,
    fontFamily: FontFamily.openSansRegular,
  },
  medicationLayout: {
    height: 39,
    top: 10,
  },
  iphone141Child: {
    left: 0,
  },
  am: {
    top: 168,
  },
  pm: {
    top: 275,
  },
  yourProgressFor: {
    top: 108,
    left: 22,
  },
  groupChild: {
    top: 50,
    width: 415,
  },
  ondose: {
    left: 153,
    fontSize: FontSize.size_5xl,
    fontStyle: "italic",
    fontFamily: FontFamily.openSansBoldItalic,
    width: 89,
    height: 28,
    top: 10,
    textAlign: "left",
    color: Color.blackBase,
    fontWeight: "700",
    position: "absolute",
  },
  vector: {
    left: "85.16%",
    right: "3.84%",
    bottom: "10.22%",
    width: "11%",
    height: "89.78%",
    top: "0%",
    position: "absolute",
  },
  vectorParent: {
    top: 37,
    height: 51,
    width: 415,
  },
  iphone141Item: {
    top: 138,
    backgroundColor: Color.lightgoldenrodyellow,
    height: 13,
    width: 368,
    left: 22,
    position: "absolute",
  },
  medAChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.khaki,
    left: 0,
  },
  iconImage: {
    right: "84.66%",
    left: "3.8%",
  },
  medicationA: {
    fontSize: FontSize.size_mini,
    width: 96,
    height: 17,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.blackBase,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vector1: {
    left: "82.88%",
    top: "16.67%",
    right: "6.45%",
    bottom: "17.87%",
    width: "10.67%",
    height: "65.47%",
    position: "absolute",
  },
  medA: {
    top: 198,
    left: 22,
  },
  iconImage1: {
    left: 0,
  },
  medB: {
    top: 305,
    left: 22,
  },
  iconImage2: {
    right: "84.39%",
    left: "4.08%",
  },
  medC: {
    top: 385,
    left: 22,
  },
  vectorIcon1: {
    height: "61.46%",
    width: "4.43%",
    right: "8.58%",
    bottom: "13.59%",
    left: "86.98%",
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon2: {
    height: "67.05%",
    width: "6.65%",
    bottom: "8.01%",
    left: "93.35%",
  },
  iconSignal: {
    height: "63.17%",
    width: "4.15%",
    right: "14.95%",
    bottom: "11.89%",
    left: "80.89%",
    position: "absolute",
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
  rectangleView: {
    top: 1,
    left: 2,
    width: 413,
  },
  vectorIcon3: {
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
    top: "0%",
    position: "absolute",
  },
  settings: {
    marginLeft: -27,
    width: 54,
    top: 43,
  },
  iconCogParent: {
    height: "90.77%",
    width: "15.56%",
    bottom: "19.23%",
    left: "84.44%",
    top: "0%",
  },
  vector4: {
    left: "28.97%",
    right: "30.35%",
    bottom: "46.4%",
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
  vectorGroup: {
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
  },
  rectangleContainer: {
    top: 806,
    height: 89,
    width: 415,
  },
  pm1: {
    top: 462,
    left: 22,
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
    position: "absolute",
  },
  take1Pill3Layout: {
    width: 185,
    position: "absolute",
  },
  medB1: {
    top: 492,
    left: 22,
  },
  wrapper: {
    left: 21,
    top: 35,
    width: 25,
    height: 43,
    position: "absolute",
  },
  iphone141: {
    backgroundColor: Color.lightyellow,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone141;
