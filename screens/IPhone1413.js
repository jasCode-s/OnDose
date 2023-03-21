import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1413 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1413}>
      <View
        style={[
          styles.iphone1413Child,
          styles.childLayout,
          styles.childPosition,
        ]}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone1460")}
      >
        <Image
          style={styles.iconLayout2}
          resizeMode="cover"
          source={require("../assets/group-252.png")}
        />
      </Pressable>
      <Text style={[styles.yourProgressFor, styles.pmTypo]}>
        Your Progress For Today (3/5)
      </Text>
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
        <Text style={styles.ondose}>OnDose</Text>
        <Pressable
          style={[styles.vector, styles.vectorIconPosition2]}
          onPress={() => navigation.navigate("ProfileCompletedDay")}
        >
          <Image
            style={[styles.iconLayout1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
      </View>
     
      <Text style={[styles.pm, styles.pmTypo]}>6:00 PM</Text>
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
              styles.take1Typo,
              styles.leftClr,
              styles.take1Position,
            ]}
          >{`Take 1 Pill / Time `}</Text>
          <Text style={[styles.timesLeft, styles.leftClr, styles.leftTypo]}>
            2 Times Left
          </Text>
        </View>
        <View style={[styles.medC, styles.medLayout, styles.medCPosition]}>
          <View style={[styles.medC, styles.medLayout, styles.medCPosition]}>
            <View
              style={[
                styles.groupItem,
                styles.groupItemLayout,
                styles.medCPosition,
              ]}
            />
            <Image
              style={[styles.iconImage, styles.iconLayout]}
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
                styles.take1Typo,
                styles.leftClr,
                styles.take1Position,
              ]}
            >{`Take 1 Pill / Time, 1 Time Left `}</Text>
          </View>
        </View>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("IPhone1414")}
        >
          <Image
            style={styles.iconLayout2}
            resizeMode="cover"
            source={require("../assets/vector18.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.pm1, styles.pmTypo]}>10:00 PM</Text>
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
              styles.take1Typo,
              styles.leftClr,
              styles.take1Position,
            ]}
          >{`Take 1 Pill / Time `}</Text>
          <Text style={[styles.timesLeft, styles.leftClr, styles.leftTypo]}>
            2 Times Left
          </Text>
        </View>
        <View style={[styles.medC, styles.medLayout, styles.medCPosition]}>
          <View style={[styles.medC, styles.medLayout, styles.medCPosition]}>
            <View
              style={[
                styles.groupItem,
                styles.groupItemLayout,
                styles.medCPosition,
              ]}
            />
            <Image
              style={[styles.iconImage1, styles.iconLayout]}
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
                styles.take1Typo,
                styles.leftClr,
                styles.take1Position,
              ]}
            >{`Take 1 Pill / Time, 1 Time Left `}</Text>
          </View>
        </View>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("IPhone1418")}
        >
          <Image
            style={styles.iconLayout2}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
        </Pressable>
      </View>
      <View style={styles.iphone142}>
        <View style={[styles.vectorGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/vector-71.png")}
          />
          <Text style={styles.ondose1}>OnDose</Text>
          <Image
            style={styles.pillIcon}
            resizeMode="cover"
            source={require("../assets/pill-icon.png")}
          />
          <Image
            style={[
              styles.vectorIcon2,
              styles.iconLayout1,
              styles.vectorIconPosition2,
            ]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
        <Image
          style={[styles.iphone142Child, styles.vectorParentLayout]}
          resizeMode="cover"
          source={require("../assets/group-2.png")}
        />
        
        <View style={[styles.rectangleContainer, styles.dosagesPosition]}>
          <View style={[styles.frameChild, styles.groupItemLayout]} />
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
                styles.take1Typo,
                styles.leftClr,
                styles.take1Position,
              ]}
            >{`Take 2 Pills / Time `}</Text>
            <Text style={[styles.timeLeft, styles.leftClr, styles.leftTypo]}>
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
          <View style={[styles.frameInner, styles.frameChildPosition]} />
          <View
            style={[
              styles.rectangleView,
              styles.frameChildLayout,
              styles.frameItemPosition,
            ]}
          />
          <View
            style={[
              styles.frameChild1,
              styles.frameChildPosition,
              styles.frameChildLayout,
            ]}
          />
          <View
            style={[
              styles.frameChild2,
              styles.frameChildPosition,
              styles.frameChildLayout,
            ]}
          />
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
      <Pressable
        style={styles.vector3}
        onPress={() => navigation.navigate("IPhone145")}
      >
        <Image
          style={styles.iconLayout2}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
      <View style={[styles.iphone1413Item, styles.iphone1413Position]} />
      <View style={[styles.iphone1413Inner, styles.iphone1413Position]} />
      <View style={styles.groupView}>
        <View
          style={[
            styles.groupChild2,
            styles.frameChildPosition,
            styles.childLayout,
          ]}
        />
        <Image
          style={[styles.groupChildLayout, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <View style={[styles.reminderParent, styles.settingsPosition]}>
          <Text style={[styles.reminder, styles.reminderTypo]}>Reminder</Text>
          <Pressable
            style={[styles.iconCogParent, styles.vectorIconPosition2]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={[
                styles.iconCog,
                styles.iconLayout1,
                styles.vectorIconPosition2,
              ]}
              resizeMode="cover"
              source={require("../assets/-icon-cog1.png")}
            />
            <Text
              style={[
                styles.settings,
                styles.settingsPosition,
                styles.take1Typo,
              ]}
            >
              Settings
            </Text>
          </Pressable>
          <View style={styles.vectorContainer}>
            <Pressable
              style={[styles.vector4, styles.vectorIconPosition2]}
              onPress={() => navigation.navigate("IPhone146")}
            >
              <Image
                style={styles.iconLayout2}
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
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 88,
    backgroundColor: Color.palegoldenrod,
  },
  childPosition: {
    width: 414,
    left: 0,
    top: 0,
  },
  pmTypo: {
    textAlign: "left",
    color: Color.blackBase,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 22,
    position: "absolute",
  },
  vectorParentLayout: {
    height: 51,
    position: "absolute",
  },
  groupChildLayout: {
    height: 1,
    position: "absolute",
  },
  ondoseTypo: {
    height: 24,
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
  vectorIconPosition2: {
    top: "0%",
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  iphonePosition: {
    right: "2.82%",
    position: "absolute",
  },
  vectorIconPosition1: {
    top: "24.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.blackBase,
  },
  medCPosition: {
    top: 0,
    left: 0,
  },
  take1Typo: {
    height: 16,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
  },
  leftClr: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
  },
  take1Position: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    height: 16,
    top: 23,
    left: 0,
  },
  leftTypo: {
    fontFamily: FontFamily.openSansRegular,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    height: 15,
    textAlign: "left",
    position: "absolute",
  },
  groupItemLayout: {
    borderRadius: Border.br_mini,
    height: 60,
    position: "absolute",
  },
  iconLayout: {
    bottom: "14.23%",
    top: "15%",
    width: "11.54%",
    height: "70.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  medicationPosition: {
    left: 68,
    height: 39,
    top: 10,
  },
  groupLayout: {
    width: 392,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition: {
    top: "21.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  },
  frameItemPosition: {
    left: 4,
    height: 160,
    position: "absolute",
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
  frameChildPosition: {
    left: 2,
    position: "absolute",
  },
  iphone1413Position: {
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
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  iphone1413Child: {
    position: "absolute",
  },
  wrapper: {
    left: 21,
    width: 25,
    height: 43,
    top: 35,
    position: "absolute",
  },
  yourProgressFor: {
    top: 108,
  },
  groupChild: {
    top: 50,
    left: 1,
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
  },
  vectorParent: {
    top: 37,
    width: 415,
    left: -1,
  },
  vectorIcon: {
    height: "61.46%",
    width: "4.43%",
    right: "8.58%",
    bottom: "13.59%",
    left: "86.98%",
  },
  text: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    textAlign: "left",
    color: Color.blackBase,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon1: {
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
    height: "2.12%",
    width: "92.59%",
    top: "0.89%",
    bottom: "96.99%",
    left: "4.59%",
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
  },
  groupItem: {
    backgroundColor: Color.khaki,
    width: 368,
    left: 0,
  },
  iconImage: {
    right: "84.66%",
    left: "3.8%",
  },
  medC: {
    left: 0,
  },
  take1Pill1Layout: {
    width: 194,
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
  medB: {
    top: 198,
  },
  pm1: {
    top: 273,
  },
  iconImage1: {
    right: "84.39%",
    left: "4.08%",
  },
  take1Pill3Layout: {
    width: 180,
    position: "absolute",
  },
  medB1: {
    top: 303,
  },
  groupChild1: {
    top: 53,
    height: 0,
    left: 0,
  },
  ondose1: {
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
  vectorGroup: {
    height: 53,
    left: -1,
    top: 35,
  },
  iphone142Child: {
    top: 769,
    left: -3,
    width: 393,
  },
  vectorIcon3: {
    height: "57.89%",
    width: "4.44%",
    right: "8.61%",
    bottom: "21.05%",
    left: "86.94%",
  },
  vectorIcon4: {
    height: "63.16%",
    width: "6.67%",
    bottom: "15.79%",
    left: "93.33%",
    right: "0%",
  },
  iconSignal1: {
    height: "59.5%",
    width: "4.17%",
    right: "15%",
    bottom: "19.45%",
    left: "80.83%",
  },
  iphoneScreenDefault1: {
    height: "2.25%",
    width: "92.31%",
    top: "0.95%",
    bottom: "96.8%",
    left: "4.87%",
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
    width: 349,
    backgroundColor: Color.gainsboro_200,
    left: 2,
    borderRadius: Border.br_mini,
  },
  rectangleView: {
    top: 82,
  },
  frameChild1: {
    top: 333,
  },
  frameChild2: {
    top: 501,
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
  vector3: {
    left: "89.86%",
    top: "12.39%",
    right: "5.79%",
    bottom: "85.6%",
    width: "4.36%",
    height: "2.01%",
    position: "absolute",
  },
  iphone1413Item: {
    backgroundColor: Color.lightgoldenrodyellow,
    width: 368,
  },
  iphone1413Inner: {
    backgroundColor: Color.limegreen,
    width: 205,
  },
  groupChild2: {
    top: 1,
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
    height: 16,
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    left: "50%",
    color: Color.blackBase,
  },
  iconCogParent: {
    height: "90.77%",
    width: "15.56%",
    bottom: "9.23%",
    left: "84.44%",
    right: "0%",
  },
  vector4: {
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
  vectorContainer: {
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
    left: 0,
    position: "absolute",
  },
  iphone1413: {
    backgroundColor: Color.lightyellow,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1413;
