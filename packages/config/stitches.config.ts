/// NOTE: Before you start adding colors, make sure you have read the https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale

import { createStitches } from "@stitches/react";
import {
  mauve,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  mint,
  yellow,
  amber,
  blue,
  indigo,
  mauveDark,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  mintDark,
  yellowDark,
  amberDark,
  blueDark,
  indigoDark,
} from "@radix-ui/colors";

const { styled, createTheme, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      /// gray scale
      ...mauve,

      /// ERROR colors
      ...tomato,
      ...red,
      ...crimson,

      /// Success colors
      ...mint,

      /// Neutral colors
      ...pink,
      ...plum,
      ...purple,
      ...violet,

      /// Warning
      ...yellow,
      ...amber,

      /// Info
      ...blue,
      ...indigo,
    },
  },
});

const darkTheme = createTheme({
  colors: {
    /// gray scale
    ...mauveDark,

    /// ERROR colors
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,

    /// Success colors

    /// Neutral colors
    ...mintDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,

    /// Warning
    ...violetDark,
    ...yellowDark,
    ...amberDark,

    /// Info
    ...blueDark,
    ...indigoDark,
  },
});

export { styled, darkTheme, globalCss, keyframes };
export default styled;
