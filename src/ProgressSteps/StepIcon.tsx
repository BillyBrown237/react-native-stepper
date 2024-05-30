import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import type { StepIconProps } from "../types";

export function StepIcon({
  borderWidth = 3,
  borderStyle = "solid",
  activeStepIconBorderColor = "#4BB543",
  progressBarColor = "#ebebe4",
  completedProgressBarColor = "#4BB543",
  activeStepIconColor = "transparent",
  completedStepIconColor = "#4BB543",
  disabledStepIconColor = "#ebebe4",
  labelColor = "lightgray",
  labelFontSize = 14,
  activeLabelColor = "#4BB543",
  completedLabelColor = "lightgray",
  activeStepNumColor = "black",
  completedStepNumColor = "black",
  disabledStepNumColor = "white",
  completedCheckColor = "white",
  ...props
}: StepIconProps) {
  let styles;

  if (props.isActiveStep) {
    styles = {
      circleStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: activeStepIconColor,
        borderColor: activeStepIconBorderColor,
        borderWidth: 5,
        bottom: 2,
      },
      circleText: {
        alignSelf: "center",
        top: 20 / 3,
      },
      labelText: {
        textAlign: "center",
        flexWrap: "wrap",
        width: 100,
        paddingTop: 4,
        fontFamily: props.labelFontFamily,
        color: activeLabelColor,
        fontSize: props.activeLabelFontSize || labelFontSize,
      },
      leftBar: {
        position: "absolute",
        top: 40 / 2.22,
        left: 0,
        right: 40 + 8,
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: completedProgressBarColor,
        marginRight: 40 / 2 + 2,
      },
      rightBar: {
        position: "absolute",
        top: 40 / 2.22,
        right: 0,
        left: 40 + 8,
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: progressBarColor,
        marginLeft: 40 / 2 + 2,
      },
      stepNum: {
        color: activeStepNumColor,
      },
    };
  } else if (props.isCompletedStep) {
    styles = {
      circleStyle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: completedStepIconColor,
      },
      circleText: {
        alignSelf: "center",
        top: 18 / 2,
      },
      labelText: {
        textAlign: "center",
        flexWrap: "wrap",
        width: 100,
        paddingTop: 4,
        fontFamily: props.labelFontFamily,
        color: completedLabelColor,
        marginTop: 4,
        fontSize: labelFontSize,
      },
      leftBar: {
        position: "absolute",
        top: 36 / 2,
        left: 0,
        right: 36 + 8,
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: completedProgressBarColor,
        marginRight: 36 / 2 + 4,
      },
      rightBar: {
        position: "absolute",
        top: 36 / 2,
        right: 0,
        left: 36 + 8,
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: completedProgressBarColor,
        marginLeft: 36 / 2 + 4,
      },
      stepNum: {
        color: completedStepNumColor,
      },
    };
  } else {
    styles = {
      circleStyle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: disabledStepIconColor,
      },
      circleText: {
        alignSelf: "center",
        top: 18 / 2,
      },
      labelText: {
        textAlign: "center",
        flexWrap: "wrap",
        width: 100,
        paddingTop: 4,
        fontFamily: props.labelFontFamily,
        color: labelColor,
        marginTop: 4,
        fontSize: labelFontSize,
      },
      leftBar: {
        position: "absolute",
        top: 36 / 2,
        left: 0,
        right: 36 + 8,
        // borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: progressBarColor,
        marginRight: 36 / 2 + 4,
      },
      rightBar: {
        position: "absolute",
        top: 36 / 2,
        right: 0,
        left: 36 + 8,
        // borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: progressBarColor,
        marginLeft: 36 / 2 + 4,
      },
      stepNum: {
        color: disabledStepNumColor,
      },
    };
  }

  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <View style={styles.circleStyle}>
        <Text style={styles.circleText as StyleProp<TextStyle>}>
          {props.isCompletedStep ? (
            <Text style={{ color: completedCheckColor }}>&#10003;</Text>
          ) : (
            <Text style={styles.stepNum}>{props.stepNum}</Text>
          )}
        </Text>
      </View>
      <Text style={styles.labelText as StyleProp<TextStyle>}>
        {props.label}
      </Text>
      {!props.isFirstStep && (
        <View style={styles.leftBar as StyleProp<ViewStyle>} />
      )}
      {!props.isLastStep && (
        <View style={styles.rightBar as StyleProp<ViewStyle>} />
      )}
    </View>
  );
}
