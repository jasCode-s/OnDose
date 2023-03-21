import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1415 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1415}>
      <View
        style={[
          styles.iphone1415Child,
          styles.groupInnerLayout,
          styles.childLayout,
        ]}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone1460")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/group-252.png")}
        />
      </Pressable>
      <Text style={styles.yourProgressFor}>Your Progress For Today (5/5)</Text>
      <Text style={styles.congratulationsYouAchieved}>{`Congratulations! 
You achieved your goal for today!`}</Text>
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
        <Text style={[styles.ondose, styles.ondoseTypo]}>OnDose</Text>
        <Pressable
          style={[styles.vector, styles.vectorIconPosition2]}
          onPress={() => navigation.navigate("ProfileCompletedDay")}
        >
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
      </View>
      
      <View style={styles.iphone142}>
        <View style={[styles.vectorGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
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
              styles.iconLayout,
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
       
        <View style={styles.rectangleParent}>
          <View style={styles.frameChild} />
          <View
            style={[
              styles.frameItem,
              styles.frameChildLayout,
              styles.frameItemPosition,
            ]}
          />
          <Image
            style={[styles.iconImage, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-image.png")}
          />
          <View style={styles.medicationAParent}>
            <Text style={[styles.medicationA, styles.dosagesTypo]}>
              Medication A
            </Text>
            <Text
              style={[
                styles.take2Pills,
                styles.settingsTypo,
                styles.timeLeftClr,
              ]}
            >{`Take 2 Pills / Time `}</Text>
            <Text style={[styles.timeLeft, styles.timeLeftClr]}>
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
          <View style={[styles.frameInner, styles.frameInnerPosition]} />
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
              styles.frameInnerPosition,
              styles.frameChildLayout,
            ]}
          />
          <View
            style={[
              styles.frameChild2,
              styles.frameInnerPosition,
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
            style={[styles.interactions, styles.dosagesTypo]}
          >{`Interactions: `}</Text>
          <Text style={[styles.dosages, styles.dosagesTypo]}>Dosages:</Text>
        </View>
      </View>
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("IPhone1414")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
      <View style={styles.iphone1415Item} />
      <View style={styles.rectangleGroup}>
        <View
          style={[
            styles.groupInner,
            styles.frameInnerPosition,
            styles.groupInnerLayout,
          ]}
        />
        <Image
          style={[styles.groupChildPosition, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.iconLayout]}
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
                styles.iconLayout,
                styles.vectorIconPosition2,
              ]}
              resizeMode="cover"
              source={require("../assets/-icon-cog1.png")}
            />
            <Text
              style={[
                styles.settings,
                styles.settingsPosition,
                styles.settingsTypo,
              ]}
            >
              Settings
            </Text>
          </Pressable>
          <View style={styles.vectorContainer}>
            <Pressable
              style={[styles.vector2, styles.vectorIconPosition2]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  groupInnerLayout: {
    height: 88,
    backgroundColor: Color.palegoldenrod,
  },
  childLayout: {
    width: 414,
    top: 0,
  },
  vectorParentLayout: {
    height: 51,
    position: "absolute",
  },
  groupChildPosition: {
    height: 1,
    left: 1,
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
  vectorIconPosition2: {
    top: "0%",
    position: "absolute",
  },
  iconLayout1: {
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
  groupLayout: {
    width: 392,
    position: "absolute",
  },
  iconLayout: {
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
  dosagesTypo: {
    height: 15,
    width: 96,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.blackBase,
    position: "absolute",
  },
  settingsTypo: {
    height: 16,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
  },
  timeLeftClr: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
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
  frameInnerPosition: {
    left: 2,
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
  iphone1415Child: {
    left: 0,
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
    left: 23,
    textAlign: "left",
    color: Color.blackBase,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  congratulationsYouAchieved: {
    top: 342,
    left: 56,
    textAlign: "center",
    color: Color.blackBase,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
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
  groupItem: {
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
    height: 60,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  frameItem: {
    top: 81,
  },
  iconImage: {
    height: "5.94%",
    width: "10.99%",
    top: "2.67%",
    right: "84.62%",
    bottom: "91.38%",
    left: "4.4%",
    position: "absolute",
  },
  medicationA: {
    left: 0,
    top: 0,
    width: 96,
    fontSize: FontSize.size_mini,
  },
  take2Pills: {
    top: 23,
    width: 105,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    height: 16,
    left: 0,
  },
  timeLeft: {
    top: 24,
    left: 195,
    width: 63,
    fontFamily: FontFamily.openSansRegular,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    height: 15,
    textAlign: "left",
  },
  medicationAParent: {
    top: 18,
    left: 72,
    width: 258,
    height: 39,
    position: "absolute",
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
  },
  sideEffects: {
    top: 337,
    left: 12,
  },
  interactions: {
    top: 509,
    left: 13,
  },
  dosages: {
    top: 257,
    left: 13,
  },
  rectangleParent: {
    top: 95,
    width: 362,
    height: 674,
    left: 13,
    position: "absolute",
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
  vector1: {
    left: "89.86%",
    top: "12.39%",
    right: "5.79%",
    bottom: "85.6%",
    width: "4.36%",
    height: "2.01%",
    position: "absolute",
  },
  iphone1415Item: {
    top: 138,
    left: 22,
    backgroundColor: Color.limegreen,
    width: 368,
    height: 13,
    position: "absolute",
  },
  groupInner: {
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
  vector2: {
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
  rectangleGroup: {
    top: 807,
    height: 89,
    width: 415,
    left: -1,
    position: "absolute",
  },
  iphone1415: {
    backgroundColor: Color.lightyellow,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415;
