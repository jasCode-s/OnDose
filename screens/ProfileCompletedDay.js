import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfileCompletedDay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileCompletedDay}>
      <Text style={[styles.welcomeJane, styles.welcomeJaneTypo]}>
        Welcome, Jane!
      </Text>
      <View style={styles.calendar}>
        <View style={[styles.date, styles.datePosition]}>
          <View
            style={[styles.second, styles.viewPosition3, styles.viewLayout]}
          >
            <Image
              style={[
                styles.buttonBgPosition,
                styles.iconLayout,
                styles.ellipseIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>1</Text>
          </View>
          <View style={[styles.view, styles.viewPosition3, styles.viewLayout]}>
            <Image
              style={[styles.iconLayout, styles.ellipseIconPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>31</Text>
          </View>
          <View
            style={[styles.second1, styles.viewPosition3, styles.viewLayout]}
          >
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>30</Text>
          </View>
          <View
            style={[styles.second2, styles.viewPosition3, styles.viewLayout]}
          >
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>29</Text>
          </View>
          <View
            style={[styles.second3, styles.viewPosition3, styles.viewLayout]}
          >
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>28</Text>
          </View>
          <View style={[styles.view1, styles.viewPosition3, styles.viewLayout]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>27</Text>
          </View>
          <View style={[styles.view2, styles.viewPosition3, styles.viewLayout]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>26</Text>
          </View>
          <View style={[styles.view3, styles.viewPosition2]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>25</Text>
          </View>
          <View style={[styles.view4, styles.viewPosition2]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>24</Text>
          </View>
          <View style={[styles.view5, styles.viewPosition2]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>23</Text>
          </View>
          <View style={[styles.view6, styles.viewPosition2]}>
            <Image
              style={[
                styles.ellipseIcon10,
                styles.iconLayout,
                styles.ellipseIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number10, styles.numberTypo]}>22</Text>
          </View>
          <View style={[styles.view7, styles.viewPosition2]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse1.png")}
            />
            <Text style={[styles.number11, styles.numberTypo]}>21</Text>
          </View>
          <View style={[styles.view8, styles.viewPosition2]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>20</Text>
          </View>
          <View style={[styles.view9, styles.viewPosition2]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>19</Text>
          </View>
          <View style={[styles.view10, styles.viewPosition1]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>18</Text>
          </View>
          <View style={[styles.view11, styles.viewPosition1]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>17</Text>
          </View>
          <View style={[styles.view12, styles.viewPosition1]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>16</Text>
          </View>
          <View style={[styles.view13, styles.viewPosition1]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number11, styles.numberTypo]}>15</Text>
          </View>
          <View style={[styles.view14, styles.viewPosition1]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number11, styles.numberTypo]}>14</Text>
          </View>
          <View style={[styles.view15, styles.viewPosition1]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>13</Text>
          </View>
          <View style={[styles.view16, styles.viewPosition1]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>12</Text>
          </View>
          <View style={[styles.view17, styles.viewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>11</Text>
          </View>
          <View style={[styles.view18, styles.viewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>10</Text>
          </View>
          <View style={[styles.view19, styles.viewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>9</Text>
          </View>
          <View style={[styles.view20, styles.viewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>8</Text>
          </View>
          <View style={[styles.view21, styles.viewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>7</Text>
          </View>
          <View style={[styles.view22, styles.viewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>6</Text>
          </View>
          <View style={[styles.view23, styles.viewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>5</Text>
          </View>
          <View style={[styles.view24, styles.firstViewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>4</Text>
          </View>
          <View style={[styles.view25, styles.firstViewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number12, styles.numberTypo]}>3</Text>
          </View>
          <View style={[styles.view26, styles.firstViewPosition]}>
            <Text style={[styles.number12, styles.numberTypo]}>2</Text>
          </View>
          <View style={[styles.numeral, styles.firstViewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>1</Text>
          </View>
          <View style={[styles.first, styles.firstViewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>30</Text>
          </View>
          <View style={[styles.first1, styles.firstViewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>29</Text>
          </View>
          <View style={[styles.first2, styles.firstViewPosition]}>
            <Image
              style={styles.ellipseIconPosition}
              resizeMode="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>28</Text>
          </View>
        </View>
        <View style={[styles.daysOfTheWeek, styles.daysOfTheWeekPosition]}>
          <Text style={[styles.sat, styles.satFlexBox, styles.satTypo]}>
            SAT
          </Text>
          <Text style={[styles.fri, styles.satFlexBox, styles.satTypo]}>
            FRI
          </Text>
          <Text style={[styles.thu, styles.satFlexBox, styles.satTypo]}>
            THU
          </Text>
          <Text style={[styles.wed, styles.satFlexBox, styles.satTypo]}>
            WED
          </Text>
          <Text style={[styles.tue, styles.satFlexBox, styles.satTypo]}>
            TUE
          </Text>
          <Text style={[styles.mon, styles.satFlexBox, styles.satTypo]}>
            MON
          </Text>
          <Text style={[styles.sun, styles.satFlexBox, styles.satTypo]}>
            SUN
          </Text>
        </View>
        <View style={[styles.buttonOutlineXs, styles.viewPosition3]}>
          <View style={[styles.buttonBg, styles.buttonBgPosition]} />
          <Text
            style={[styles.caption, styles.ondoseLayout, styles.satFlexBox]}
          >
            May 2019
          </Text>
          <Image
            style={[styles.leftIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/left.png")}
          />
          <Image
            style={[styles.rightIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector6.png")}
      />
      <Text style={[styles.myAllergies, styles.welcomeJaneTypo]}>
        My Allergies
      </Text>
      <View
        style={[
          styles.profileCompletedDayChild,
          styles.profileLayout,
          styles.daysOfTheWeekPosition,
        ]}
      />
      <View
        style={[
          styles.profileCompletedDayItem,
          styles.wrapperPosition,
          styles.profileLayout,
        ]}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={[styles.allergicReactionHives, styles.allergicTypo]}>
        Allergic reaction: hives and rash
      </Text>
      <Text style={[styles.penicillin, styles.aspirinTypo]}>Penicillin</Text>
      <Text style={[styles.allergicReactionBlocked, styles.allergicTypo]}>
        Allergic reaction: blocked nose and rash
      </Text>
      <Text style={[styles.aspirin, styles.aspirinTypo]}>Aspirin</Text>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View
          style={[
            styles.rectangleWrapper,
            styles.groupChildLayout,
            styles.groupParentLayout,
          ]}
        >
          <View
            style={[styles.groupChild, styles.groupBg, styles.groupChildLayout]}
          />
        </View>
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
          onPress={() => navigation.navigate("IPhone1460")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/group-25.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
        <Text style={[styles.ondose, styles.ondoseLayout]}>OnDose</Text>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupInner, styles.groupBg]} />
        <Image
          style={[
            styles.groupChild1,
            styles.groupLayout,
            styles.groupChildLayout,
          ]}
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
        <View style={[styles.reminderParent, styles.datePosition]}>
          <Text style={[styles.reminder, styles.reminderTypo]}>Reminder</Text>
          <Pressable
            style={[styles.iconCogParent, styles.iconPosition2]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={[styles.iconCog, styles.iconLayout, styles.iconPosition2]}
              resizeMode="cover"
              source={require("../assets/-icon-cog1.png")}
            />
            <Text style={styles.settings}>Settings</Text>
          </Pressable>
          <View style={styles.vectorParent}>
            <Pressable
              style={[styles.vector1, styles.iconPosition2]}
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
  welcomeJaneTypo: {
    width: 183,
    textAlign: "left",
    color: Color.blackBase,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 29,
    position: "absolute",
  },
  datePosition: {
    left: "50%",
    position: "absolute",
  },
  viewPosition3: {
    height: 32,
    left: "50%",
    position: "absolute",
  },
  viewLayout: {
    width: 32,
    marginTop: 68,
    height: 32,
    top: "50%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseIconPosition: {
    left: "0%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  numberTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.iBMPlexSansSubtitle2,
    fontWeight: "500",
    lineHeight: 22,
    top: "15.63%",
    letterSpacing: 0,
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  viewPosition2: {
    marginTop: 26,
    height: 32,
    width: 32,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  viewPosition1: {
    marginTop: -16,
    height: 32,
    width: 32,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  viewPosition: {
    marginTop: -58,
    height: 32,
    width: 32,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  firstViewPosition: {
    marginTop: -100,
    height: 32,
    width: 32,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  daysOfTheWeekPosition: {
    left: 24,
    position: "absolute",
  },
  satFlexBox: {
    color: Color.slategray_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  satTypo: {
    fontFamily: FontFamily.iBMPlexSansOVERLINE,
    textTransform: "uppercase",
    lineHeight: 16,
    letterSpacing: 2,
    fontSize: FontSize.iBMPlexSansOVERLINE_size,
    width: 64,
    color: Color.slategray_100,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  buttonBgPosition: {
    display: "none",
    position: "absolute",
  },
  ondoseLayout: {
    height: 28,
    position: "absolute",
  },
  iconPosition1: {
    height: 28,
    width: 28,
    marginTop: -14,
    top: "50%",
    position: "absolute",
  },
  profileLayout: {
    height: 79,
    width: 366,
    backgroundColor: Color.khaki,
    borderRadius: Border.br_mini,
  },
  wrapperPosition: {
    left: 23,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 31,
    width: 35,
    left: 340,
    position: "absolute",
  },
  allergicTypo: {
    height: 29,
    width: 324,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansRegular,
    left: 47,
    textAlign: "left",
    position: "absolute",
  },
  aspirinTypo: {
    height: 23,
    width: 96,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.blackBase,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  groupParentLayout: {
    height: 88,
    position: "absolute",
  },
  groupChildLayout: {
    width: 414,
    top: 0,
  },
  groupBg: {
    backgroundColor: Color.palegoldenrod,
    height: 88,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    position: "absolute",
  },
  iconPosition: {
    top: "24.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
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
  iconPosition2: {
    top: "0%",
    position: "absolute",
  },
  welcomeJane: {
    top: 96,
  },
  number: {
    color: Color.gray80,
  },
  second: {
    marginLeft: 104,
  },
  number1: {
    color: Color.gray50,
  },
  view: {
    marginLeft: 64,
  },
  second1: {
    marginLeft: 24,
  },
  second2: {
    marginLeft: -16,
  },
  second3: {
    marginLeft: -56,
  },
  view1: {
    marginLeft: -96,
  },
  view2: {
    marginLeft: -136,
  },
  view3: {
    marginLeft: 104,
  },
  view4: {
    marginLeft: 64,
  },
  view5: {
    marginLeft: 24,
  },
  ellipseIcon10: {
    position: "absolute",
  },
  number10: {
    color: "#87c289",
  },
  view6: {
    marginLeft: -16,
  },
  number11: {
    color: Color.rosybrown,
  },
  view7: {
    marginLeft: -56,
  },
  number12: {
    color: Color.green30,
  },
  view8: {
    marginLeft: -96,
  },
  view9: {
    marginLeft: -136,
  },
  view10: {
    marginLeft: 104,
  },
  view11: {
    marginLeft: 64,
  },
  view12: {
    marginLeft: 24,
  },
  view13: {
    marginLeft: -16,
  },
  view14: {
    marginLeft: -56,
  },
  view15: {
    marginLeft: -96,
  },
  view16: {
    marginLeft: -136,
  },
  view17: {
    marginLeft: 104,
  },
  view18: {
    marginLeft: 64,
  },
  view19: {
    marginLeft: 24,
  },
  view20: {
    marginLeft: -16,
  },
  view21: {
    marginLeft: -56,
  },
  view22: {
    marginLeft: -96,
  },
  view23: {
    marginLeft: -136,
  },
  view24: {
    marginLeft: 104,
  },
  view25: {
    marginLeft: 64,
  },
  view26: {
    marginLeft: 24,
  },
  numeral: {
    marginLeft: -16,
  },
  first: {
    marginLeft: -56,
  },
  first1: {
    marginLeft: -96,
  },
  first2: {
    marginLeft: -136,
  },
  date: {
    marginTop: -66,
    width: 272,
    height: 200,
    top: "50%",
    left: "50%",
    marginLeft: -136,
  },
  sat: {
    left: 240,
    width: 64,
  },
  fri: {
    left: 200,
    width: 64,
  },
  thu: {
    left: 160,
    width: 64,
  },
  wed: {
    left: 120,
    width: 64,
  },
  tue: {
    left: 80,
    width: 64,
  },
  mon: {
    left: 40,
    width: 64,
  },
  sun: {
    left: 0,
    width: 64,
  },
  daysOfTheWeek: {
    top: 60,
    right: 24,
    bottom: 240,
  },
  buttonBg: {
    right: 0,
    bottom: 0,
    borderRadius: 99,
    backgroundColor: Color.blackBase,
    borderColor: "#76a9ff",
    borderWidth: 1,
    left: 0,
    top: 0,
    borderStyle: "solid",
  },
  caption: {
    marginTop: -12,
    left: 12,
    fontSize: FontSize.iBMPlexSansBody1_size,
    lineHeight: 24,
    fontFamily: FontFamily.iBMPlexSansBody1,
    width: 118,
    height: 24,
    color: Color.slategray_100,
    letterSpacing: 0,
    top: "50%",
  },
  leftIcon: {
    left: 4,
  },
  rightIcon: {
    right: 4,
  },
  buttonOutlineXs: {
    marginLeft: -71,
    top: 18,
    width: 142,
  },
  calendar: {
    top: 137,
    right: 31,
    left: 31,
    backgroundColor: Color.white,
    borderColor: "#f9e57d",
    borderWidth: 3,
    height: 316,
    borderStyle: "solid",
    position: "absolute",
  },
  vectorIcon: {
    height: "2.9%",
    width: "6.28%",
    top: "53.79%",
    right: "50.72%",
    bottom: "43.3%",
    left: "43%",
    position: "absolute",
  },
  myAllergies: {
    top: 479,
  },
  profileCompletedDayChild: {
    top: 523,
  },
  profileCompletedDayItem: {
    top: 619,
  },
  vectorIcon1: {
    top: 547,
  },
  vectorIcon2: {
    top: 643,
  },
  allergicReactionHives: {
    top: 564,
  },
  penicillin: {
    top: 532,
    left: 46,
  },
  allergicReactionBlocked: {
    top: 660,
  },
  aspirin: {
    top: 628,
    left: 47,
    width: 96,
    fontSize: FontSize.size_lg,
  },
  groupChild: {
    left: 0,
  },
  rectangleWrapper: {
    left: 1,
  },
  wrapper: {
    top: 35,
    width: 26,
    height: 43,
  },
  groupItem: {
    top: 88,
    left: 1,
    width: 415,
  },
  ondose: {
    top: 47,
    left: 153,
    fontStyle: "italic",
    fontFamily: FontFamily.openSansBoldItalic,
    width: 89,
    fontWeight: "700",
    height: 28,
    textAlign: "left",
    color: Color.blackBase,
    fontSize: FontSize.size_5xl,
  },
  vectorIcon3: {
    height: "51.87%",
    width: "11%",
    top: "42.22%",
    right: "3.84%",
    bottom: "5.9%",
    left: "85.16%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "61.46%",
    width: "4.43%",
    right: "8.58%",
    bottom: "13.59%",
    left: "86.98%",
  },
  text: {
    left: 0,
    top: 0,
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
    textAlign: "left",
    color: Color.blackBase,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  vectorIcon5: {
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
    width: 415,
    top: 0,
  },
  groupInner: {
    top: 1,
    left: 2,
    width: 413,
  },
  groupChild1: {
    left: 0,
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
    top: 43,
    width: 64,
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
    top: 43,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.iBMPlexSansSubtitle2_size,
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
  },
  rectangleParent: {
    top: 807,
    height: 89,
    width: 415,
    left: 0,
    position: "absolute",
  },
  profileCompletedDay: {
    backgroundColor: Color.lightyellow,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfileCompletedDay;
