import { times } from "lodash";
import React, { Children, useEffect, useRef, useState } from "react";
import { StyleProp, StyleSheet, TextStyle, View } from "react-native";
import { ProgressStepsProps } from "../types";
import { StepIcon } from "./StepIcon";

export function ProgressSteps({
  children,
  isComplete = false,
  activeStep = 0,
  topOffset = 30,
  marginBottom = 50,
  ...props
}: ProgressStepsProps) {
  const [stepCount, setStepCount] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(activeStep);

  const prevActiveStep = useRef(currentStep);

  useEffect(() => {
    const updateStepCount = () => {
      const childrenCount = Children.count(children);
      setStepCount(childrenCount);
    };
    updateStepCount();
  }, [children]);

  useEffect(() => {
    if (prevActiveStep.current !== activeStep) {
      prevActiveStep.current = activeStep;
      setCurrentStep(activeStep);
    }
  }, [activeStep]);

  // const getChildProps = () => {
  //   return { ...props };
  // };
  const getChildProps = () => ({ stepCount, activeStep: currentStep });

  const renderStepIcons = () => {
    const stepIcons: JSX.Element[] = [];

    times(stepCount, (i) => {
      const isCompletedStep = isComplete ? true : i < currentStep;

      const isActiveStep = isComplete ? false : i === currentStep;

      stepIcons.push(
        <View key={i}>
          <View>
            <StepIcon
              {...getChildProps()}
              stepNum={i + 1}
              // label={children ? children[i].props.label : ""}
              label={children[i].props.label}
              isFirstStep={i === 0}
              isLastStep={i === stepCount - 1}
              isCompletedStep={isCompletedStep}
              isActiveStep={isActiveStep}
            />
          </View>
        </View>
      );
    });

    return stepIcons;
  };

  const setActiveStep = (step: number) => {
    if (step >= stepCount - 1) {
      setCurrentStep(stepCount - 1);
    } else if (step > -1 && step < stepCount - 1) {
      setCurrentStep(step);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={styles.stepIcons as StyleProp<TextStyle>}> */}
      <View
        style={
          {
            ...styles.stepIcons,
            top: topOffset,
            marginBottom,
          } as StyleProp<TextStyle>
        }
      >
        {renderStepIcons()}
      </View>
      <View style={{ flex: 1 }}>
        {/* {React.cloneElement(children ? children[activeStep] : "", {
            setActiveStep,
            activeStep: activeStep,
            stepCount,
          })} */}
        {React.cloneElement(children && children[currentStep], {
          setActiveStep,
          activeStep: currentStep,
          stepCount,
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stepIcons: {
    position: "relative",
    justifyContent: "space-evenly",
    alignSelf: "center",
    flexDirection: "row",
  },
});
