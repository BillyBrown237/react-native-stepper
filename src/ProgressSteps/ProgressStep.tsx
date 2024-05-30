import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import type { ProgressStepProps } from '../types';
import { ProgressButtons } from './ProgressButtons';

export function ProgressStep({
  nextBtnText = 'Next',
  previousBtnText = 'Previous',
  finishBtnText = 'Submit',
  nextBtnDisabled = false,
  previousBtnDisabled = false,
  errors = false,
  removeBtnRow = false,
  scrollable = true,
  ...props
}: ProgressStepProps) {
  
   const onNextStep = async () => {
    props.onNext && (await props.onNext());
    if (errors) {
      return;
    }
    props.setActiveStep && props.setActiveStep(props.activeStep + 1);
  };

  const onPreviousStep = () => {
    props.onPrevious && props.onPrevious();
    props.setActiveStep && props.setActiveStep(props.activeStep - 1);
  };

  const onSubmit = () => {
    props.onSubmit && props.onSubmit();
  };

  const renderNextButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...props.nextBtnStyle
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...props.nextBtnTextStyle
    };

    const disabledBtnText = {
      color: '#cdcdcd'
    };

    let textStyle = [btnTextStyle];
    if (nextBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        style={btnStyle as StyleProp<ViewStyle>}
        onPress={props.activeStep === props.stepCount - 1 ? onSubmit : onNextStep}
        disabled={nextBtnDisabled}
      >
        <Text style={textStyle as StyleProp<TextStyle>}>
          {props.activeStep === props.stepCount - 1 ? finishBtnText : nextBtnText}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderPreviousButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...props.previousBtnStyle
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...props.previousBtnTextStyle
    };

    const disabledBtnText = {
      color: '#cdcdcd'
    };

    let textStyle = [btnTextStyle];
    if (previousBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity style={btnStyle as StyleProp<ViewStyle>} onPress={onPreviousStep} disabled={previousBtnDisabled}>
        <Text style={textStyle as StyleProp<TextStyle>}>{props.activeStep === 0 ? '' : previousBtnText}</Text>
      </TouchableOpacity>
    );
  };

  
    const scrollViewProps = props.scrollViewProps || {};
    const viewProps = props.viewProps || {};
    const isScrollable = scrollable;
    const buttonRow = removeBtnRow ? null : (
      <ProgressButtons 
        renderNextButton={renderNextButton} 
        renderPreviousButton={renderPreviousButton} 
      />
    );

    return (
      <View style={{ flex: 1 }}>
        {isScrollable
          ? <ScrollView {...scrollViewProps}>{props.children}</ScrollView>
          : <View {...viewProps}>{props.children}</View>}

        {buttonRow}
      </View>
    );
  }



