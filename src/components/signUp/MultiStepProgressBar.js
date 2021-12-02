import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "./MultiStepProgressBar.css";

const MultiStepProgressBar = (props) => {
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 0;
  } else if (props.currentStep === 2) {
    stepPercentage = 35;
  } else if (props.currentStep === 3) {
    stepPercentage = 70;
  } else if (props.currentStep === 4) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }
  return (
      <div className={`progressBarWrapper`}>
    <ProgressBar percent={stepPercentage}
    filledBackground="#AACC00"
    height="5px"
    >
      <Step>
          {({ accomplished, index}) => (
              <div
              className={`indexedStep ${accomplished ? "accomplished": null}`}
              > 
                    {index + 1}
                  </div>
          )}
      </Step>
      <Step>
          {({ accomplished, index}) => (
              <div
              className={`indexedStep ${accomplished ? "accomplished": null}`}
              > 
                    {index + 1}
                  </div>
          )}
      </Step>
      <Step>
          {({ accomplished, index}) => (
              <div
              className={`indexedStep ${accomplished ? "accomplished": null}`}
              > 
                    {index + 1}
                  </div>
          )}
      </Step>
      <Step>
          {({ accomplished, index}) => (
              <div
              className={`indexedStep ${accomplished ? "accomplished": null}`}
              > 
                    {index + 1}
                  </div>
          )}
      </Step>

    </ProgressBar>
    </div>
  );
};

export default MultiStepProgressBar;
