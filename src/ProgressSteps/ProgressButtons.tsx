import React from "react";
import { View } from "react-native";
import type { ProgressButtonTypes } from "../types";

export function ProgressButtons({ renderPreviousButton, renderNextButton }: ProgressButtonTypes) {
  return (
    <View style= {{ flexDirection: "row", marginTop: 90 }}>
    <View style={ { position: "absolute", left: 60, bottom: 40 } }>
    { renderPreviousButton() }
    </View>
    < View style = {{ position: "absolute", right: 60, bottom: 40 }}>
      { renderNextButton() }
      </View>
      </View>
  );
}
