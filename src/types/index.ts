export type ProgressButtonTypes = {
    renderPreviousButton: () => JSX.Element;
    renderNextButton: () => JSX.Element;
};
export interface ProgressStepProps {
    children?: React.ReactNode;
    activeStep: number;
    label?: string;
    onNext?: () => void;
    onPrevious?: () => void;
    onSubmit?: () => void;
    setActiveStep?: (step: number) => void;
    nextBtnText?: string;
    previousBtnText?: string;
    finishBtnText?: string;
    stepCount?: number;
    nextBtnStyle?: React.CSSProperties;
    nextBtnTextStyle?: React.CSSProperties;
    nextBtnDisabled?: boolean;
    previousBtnStyle?: React.CSSProperties;
    previousBtnTextStyle?: React.CSSProperties;
    previousBtnDisabled?: boolean;
    scrollViewProps?: object;
    viewProps?: object;
    errors?: boolean;
    removeBtnRow?: boolean;
    scrollable?: boolean;
}


export interface StepIconProps {
    stepCount?: number;
    stepNum?: number;
    isFirstStep?: boolean;
    isLastStep?: boolean;
    borderWidth?: number;
    borderStyle?: string;
    activeStepNumColor?: string;
    completedStepNumColor?: string;
    disabledStepNumColor?: string;
    completedCheckColor?: string;
    labelFontFamily?: string;
    labelColor?: string;
    labelFontSize?: number;
    activeLabelColor?: string;
    activeLabelFontSize?: number;
    completedLabelColor?: string;
    activeStepIconColor?: string;
    disabledStepIconColor?: string;
    completedStepIconColor?: string;
    activeStepIconBorderColor?: string;
    progressBarColor?: string;
    completedProgressBarColor?: string;
    isActiveStep?: any;
    isCompletedStep?: any;
    label?: string;
}

export interface ProgressStepsProps {
    children: React.ReactNode;
    isComplete: boolean;
    activeStep: number;
    topOffset: number;
    marginBottom: number;
}