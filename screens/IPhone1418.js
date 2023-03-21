import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IPhone1418 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1418}>
      <Text style={[styles.yourProgressFor, styles.pmTypo, styles.pmTypo1]}>
        Your Progress For Today (3/5)
      </Text>
      <Text style={[styles.pm, styles.pmTypo, styles.pmTypo1]}>6:00 PM</Text>
      <View style={[styles.medB, styles.medLayout, styles.medPosition]}>
        <View style={[styles.medicationBParent, styles.medicationParentLayout]}>
          <Text
            style={styles.medicationB}
          >
            Medication B
          </Text>
          <Text
            style={[
              styles.take1Pill,
              styles.take1Layout,
              styles.leftTypo,
              styles.take1Position,
            ]}
          >{`Take 1 Pill / Time `}</Text>
          <Text style={[styles.timesLeft, styles.leftTypo, styles.leftTypo1]}>
            2 Times Left
          </Text>
        </View>
        <View
          style={[styles.medC, styles.buttonChildPosition, styles.medLayout]}
        >
          <View
            style={[styles.medC, styles.buttonChildPosition, styles.medLayout]}
          >
            <View
              style={[
                styles.groupChild,
                styles.childLayout,
                styles.buttonChildPosition,
              ]}
            />
            <Image
              style={[styles.iconImage, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/-icon-image1.png")}
            />
          </View>
          <View style={[styles.take1Pill1Layout, styles.medicationPosition]}>
            <Text
              style={styles.medicationB}
            >
              Medication C
            </Text>
            <Text
              style={[
                styles.take1Pill1Layout,
                styles.take1Layout,
                styles.leftTypo,
                styles.take1Position,
              ]}
            >{`Take 1 Pill / Time, 1 Time Left `}</Text>
          </View>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
      </View>
      <Text style={[styles.pm1, styles.pmTypo, styles.pmTypo1]}>10:00 PM</Text>
      <View style={[styles.medB1, styles.medLayout, styles.medPosition]}>
        <View style={[styles.medicationBParent, styles.medicationParentLayout]}>
          <Text
            style={styles.medicationB}
          >
            Medication B
          </Text>
          <Text
            style={[
              styles.take1Pill,
              styles.take1Layout,
              styles.leftTypo,
              styles.take1Position,
            ]}
          >{`Take 1 Pill / Time `}</Text>
          <Text style={[styles.timesLeft, styles.leftTypo, styles.leftTypo1]}>
            2 Times Left
          </Text>
        </View>
        <View
          style={[styles.medC, styles.buttonChildPosition, styles.medLayout]}
        >
          <View
            style={[styles.medC, styles.buttonChildPosition, styles.medLayout]}
          >
            <View
              style={[
                styles.groupChild,
                styles.childLayout,
                styles.buttonChildPosition,
              ]}
            />
            <Image
              style={[styles.iconImage, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/-icon-image1.png")}
            />
          </View>
          <View style={[styles.take1Pill3Layout, styles.medicationPosition]}>
            <Text
              style={styles.medicationB}
            >
              Medication B
            </Text>
            <Text
              style={[
                styles.take1Pill3Layout,
                styles.take1Layout,
                styles.leftTypo,
                styles.take1Position,
              ]}
            >{`Take 1 Pill / Time, 1 Time Left `}</Text>
          </View>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
      </View>
      <View style={styles.iphone142}>
        <View style={[styles.vectorParent, styles.groupInnerLayout]}>
          <Image
            style={[styles.groupInner, styles.groupInnerLayout]}
            resizeMode="cover"
            source={require("../assets/vector-71.png")}
          />
          <Text style={[styles.ondose, styles.ondoseTypo]}>OnDose</Text>
          <Image
            style={styles.pillIcon}
            resizeMode="cover"
            source={require("../assets/pill-icon.png")}
          />
          <Image
            style={[
              styles.vectorIcon2,
              styles.iconPosition1,
              styles.iconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
        <Image
          style={styles.iphone142Child}
          resizeMode="cover"
          source={require("../assets/group-2.png")}
        />
        <View style={[styles.rectangleContainer, styles.dosagesPosition]}>
          <View style={[styles.frameChild, styles.childLayout]} />
          <View
            style={[
              styles.frameItem,
              styles.frameChildLayout,
              styles.frameItemPosition,
            ]}
          />
          <Image
            style={[styles.iconImage2, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/-icon-image.png")}
          />
          <View
            style={[styles.medicationAParent, styles.medicationParentLayout]}
          >
            <Text
              style={styles.medicationB}
            >
              Medication A
            </Text>
            <Text
              style={[
                styles.take1Pill,
                styles.take1Layout,
                styles.leftTypo,
                styles.take1Position,
              ]}
            >{`Take 2 Pills / Time `}</Text>
            <Text style={[styles.timeLeft, styles.leftTypo, styles.leftTypo1]}>
              1 Time Left
            </Text>
          </View>
          <Text
            style={[styles.melatonin5mgXylitol, styles.vividDreamsOrTypo]}
          >{`Melatonin 5mg
Xylitol, Cellulose Gum, Soy Polysacchrides, Maltodertrin, 
Dextrose`}</Text>
          <Text
            style={[styles.vividDreamsOr, styles.vividDreamsOrTypo]}
          >{`Vivid dreams or nightmares
Short-term feelings of depression
Irritability
Stomach cramps
Diarrhea
Constipation
Decreased appetite`}</Text>
          <Text style={styles.take1Tablet}>
            Take 1 tablet 20-30 min. before bedtime. Dissolve in mouth or chew.
            No water necessary.
          </Text>
          <Text style={[styles.noMajorInteractions, styles.vividDreamsOrTypo]}>
            {" "}
            No major interactions is found in current prescription.
          </Text>
          <View style={styles.frameInner} />
          <View
            style={[
              styles.rectangleView,
              styles.frameChildLayout,
              styles.frameItemPosition,
            ]}
          />
          <View style={[styles.frameChild1, styles.frameChildLayout]} />
          <View style={[styles.frameChild2, styles.frameChildLayout]} />
          <Text style={[styles.ingredients, styles.dosagesTypo]}>
            Ingredients:
          </Text>
          <Text
            style={[styles.sideEffects, styles.dosagesTypo]}
          >{`Side-Effects: `}</Text>
          <Text
            style={[
              styles.interactions,
              styles.dosagesPosition,
              styles.dosagesTypo,
            ]}
          >{`Interactions: `}</Text>
          <Text
            style={[styles.dosages, styles.dosagesPosition, styles.dosagesTypo]}
          >
            Dosages:
          </Text>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon5, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector12.png")}
      />
      <View style={styles.groupParent}>
        <View style={[styles.rectangleWrapper, styles.groupChildLayout]}>
          <View
            style={[
              styles.groupChild1,
              styles.groupChildBg,
              styles.groupChildLayout,
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
          style={[styles.groupChild2, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
        <Text style={[styles.ondose1, styles.ondoseTypo]}>OnDose</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("ProfileCompletedDay")}
        >
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector14.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.iphone1418Child, styles.iphone1418Position]} />
      <View style={[styles.iphone1418Item, styles.iphone1418Position]} />
      <View style={styles.groupView}>
        <View style={[styles.groupChild3, styles.groupChildBg]} />
        <Image
          style={[styles.groupChildPosition, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <View style={[styles.reminderParent, styles.settingsPosition]}>
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
              style={[styles.vector1, styles.iconPosition1]}
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
          onPress={() => navigation.navigate("IPhone1413")}
        >
          <View
            style={[
              styles.okButton1,
              styles.buttonLayout,
              styles.buttonChildPosition,
            ]}
          >
            <View
              style={[
                styles.okButton1,
                styles.buttonLayout,
                styles.buttonChildPosition,
              ]}
            >
              <View
                style={[
                  styles.loginButtonChild,
                  styles.buttonLayout,
                  styles.buttonChildPosition,
                ]}
              />
            </View>
          </View>
          <View style={[styles.okWrapper, styles.okLayout]}>
            <Text
              style={[
                styles.ok,
                styles.okLayout,
                styles.buttonChildPosition,
                styles.pmTypo,
              ]}
            >
              OK
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pmTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  pmTypo1: {
    color: Color.blackBase,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: 22,
    position: "absolute",
  },
  medLayout: {
    height: 60,
    width: 368,
    position: "absolute",
  },
  medPosition: {
    left: 22,
    height: 60,
  },
  medicationParentLayout: {
    height: 39,
    width: 258,
    position: "absolute",
  },
  dosagesTypo: {
    height: 15,
    width: 96,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.blackBase,
  },
  buttonChildPosition: {
    top: 0,
    left: 0,
  },
  take1Layout: {
    height: 16,
    fontFamily: FontFamily.openSansRegular,
  },
  leftTypo: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  take1Position: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    height: 16,
    top: 23,
    left: 0,
  },
  leftTypo1: {
    fontFamily: FontFamily.openSansRegular,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    height: 15,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_mini,
    height: 60,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  medicationPosition: {
    left: 68,
    height: 39,
    top: 10,
  },
  groupInnerLayout: {
    width: 392,
    position: "absolute",
  },
  ondoseTypo: {
    height: 28,
    width: 89,
    fontFamily: FontFamily.openSansBoldItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    left: 153,
    textAlign: "left",
    color: Color.blackBase,
    fontWeight: "700",
    position: "absolute",
  },
  iconPosition1: {
    top: "0%",
    position: "absolute",
  },
  iconPosition: {
    top: "21.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    textAlign: "left",
    color: Color.blackBase,
  },
  textTypo1: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  dosagesPosition: {
    left: 13,
    position: "absolute",
  },
  frameChildLayout: {
    height: 160,
    width: 349,
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  frameItemPosition: {
    left: 4,
    height: 160,
  },
  vividDreamsOrTypo: {
    height: 115,
    width: 320,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  groupChildLayout: {
    width: 414,
    top: 0,
  },
  groupChildBg: {
    backgroundColor: Color.palegoldenrod,
    height: 88,
    position: "absolute",
  },
  groupChildPosition: {
    height: 1,
    left: 1,
    position: "absolute",
  },
  vectorIconPosition: {
    top: "24.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone1418Position: {
    height: 13,
    top: 138,
    left: 22,
    position: "absolute",
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
  yourProgressFor: {
    top: 108,
  },
  pm: {
    top: 168,
  },
  medicationB: {
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
  take1Pill: {
    width: 105,
    position: "absolute",
  },
  timesLeft: {
    left: 190,
    width: 68,
    top: 23,
    fontFamily: FontFamily.openSansRegular,
  },
  medicationBParent: {
    left: 46,
    top: 10,
    height: 39,
    width: 258,
  },
  groupChild: {
    backgroundColor: Color.khaki,
    left: 0,
    width: 368,
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
  medC: {
    left: 0,
  },
  take1Pill1Layout: {
    width: 192,
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
  medB: {
    top: 198,
  },
  pm1: {
    top: 273,
  },
  take1Pill3Layout: {
    width: 185,
    position: "absolute",
  },
  medB1: {
    top: 303,
  },
  groupInner: {
    top: 53,
    height: 0,
    left: 0,
  },
  ondose: {
    top: 12,
  },
  pillIcon: {
    top: 6,
    left: 24,
    width: 37,
    height: 31,
    position: "absolute",
  },
  vectorIcon2: {
    height: "81.13%",
    width: "10.97%",
    right: "4.08%",
    bottom: "18.87%",
    left: "84.95%",
  },
  vectorParent: {
    height: 53,
    left: -1,
    top: 35,
  },
  iphone142Child: {
    top: 769,
    left: -3,
    width: 393,
    height: 51,
    position: "absolute",
  },
  vectorIcon3: {
    height: "57.89%",
    width: "4.44%",
    right: "8.61%",
    bottom: "21.05%",
    left: "86.94%",
  },
  text: {
    position: "absolute",
  },
  vectorIcon4: {
    height: "63.16%",
    width: "6.67%",
    bottom: "15.79%",
    left: "93.33%",
    right: "0%",
  },
  iconSignal: {
    height: "59.5%",
    width: "4.17%",
    right: "15%",
    bottom: "19.45%",
    left: "80.83%",
  },
  iphoneScreenDefault: {
    height: "2.25%",
    width: "92.31%",
    top: "0.95%",
    right: "2.82%",
    bottom: "96.8%",
    left: "4.87%",
    position: "absolute",
  },
  frameChild: {
    top: 8,
    left: 7,
    backgroundColor: Color.gainsboro_100,
    width: 346,
  },
  frameItem: {
    top: 81,
  },
  iconImage2: {
    height: "5.94%",
    width: "10.99%",
    top: "2.67%",
    right: "84.62%",
    bottom: "91.38%",
    left: "4.4%",
    position: "absolute",
  },
  timeLeft: {
    top: 24,
    left: 195,
    width: 63,
  },
  medicationAParent: {
    top: 18,
    left: 72,
  },
  melatonin5mgXylitol: {
    top: 111,
    left: 17,
    height: 115,
  },
  vividDreamsOr: {
    top: 362,
    left: 11,
  },
  take1Tablet: {
    top: 281,
    height: 29,
    width: 320,
    left: 17,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  noMajorInteractions: {
    top: 533,
    left: 8,
  },
  frameInner: {
    top: 250,
    height: 69,
    left: 2,
    width: 349,
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  rectangleView: {
    top: 82,
  },
  frameChild1: {
    top: 333,
    left: 2,
  },
  frameChild2: {
    top: 501,
    left: 2,
  },
  ingredients: {
    top: 84,
    left: 15,
    position: "absolute",
  },
  sideEffects: {
    top: 337,
    left: 12,
    position: "absolute",
  },
  interactions: {
    top: 509,
  },
  dosages: {
    top: 257,
  },
  rectangleContainer: {
    top: 95,
    width: 362,
    height: 674,
    overflow: "hidden",
  },
  iphone142: {
    top: 1085,
    left: 1272,
    backgroundColor: Color.white,
    width: 390,
    height: 844,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon5: {
    height: "2.01%",
    width: "4.36%",
    top: "12.39%",
    right: "5.79%",
    bottom: "85.6%",
    left: "89.86%",
    position: "absolute",
  },
  groupChild1: {
    left: 0,
  },
  rectangleWrapper: {
    left: 1,
    width: 414,
    height: 88,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 23,
    width: 26,
    height: 43,
    top: 35,
    position: "absolute",
  },
  groupChild2: {
    top: 88,
    width: 415,
  },
  ondose1: {
    top: 47,
  },
  vector: {
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
  iconSignal1: {
    height: "63.17%",
    width: "4.15%",
    right: "14.95%",
    bottom: "11.89%",
    left: "80.89%",
  },
  iphoneScreenDefault1: {
    height: "21.59%",
    width: "92.37%",
    top: "9.09%",
    right: "2.81%",
    bottom: "69.32%",
    left: "4.82%",
    position: "absolute",
  },
  groupParent: {
    height: 88,
    width: 415,
    left: -1,
    top: 0,
    position: "absolute",
  },
  iphone1418Child: {
    backgroundColor: Color.lightgoldenrodyellow,
    width: 368,
  },
  iphone1418Item: {
    backgroundColor: Color.limegreen,
    width: 205,
  },
  groupChild3: {
    top: 1,
    width: 413,
    left: 2,
  },
  vectorIcon8: {
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
    width: 347,
    height: 65,
    top: 12,
  },
  groupView: {
    top: 807,
    height: 89,
    width: 415,
    left: -1,
    position: "absolute",
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
  },
  okButton1: {
    left: 0,
  },
  ok: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    width: 47,
    top: 0,
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
    top: 380,
    left: 56,
    height: 70,
  },
  iphone1418: {
    backgroundColor: Color.lightyellow,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1418;
