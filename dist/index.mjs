// src/ProgressSteps/ProgressButtons.tsx
import React from "react";
import { View } from "react-native";
function ProgressButtons({ renderPreviousButton, renderNextButton }) {
  return /* @__PURE__ */ React.createElement(View, { style: { flexDirection: "row", marginTop: 90 } }, /* @__PURE__ */ React.createElement(View, { style: { position: "absolute", left: 60, bottom: 40 } }, renderPreviousButton()), /* @__PURE__ */ React.createElement(View, { style: { position: "absolute", right: 60, bottom: 40 } }, renderNextButton()));
}
export {
  ProgressButtons
};
