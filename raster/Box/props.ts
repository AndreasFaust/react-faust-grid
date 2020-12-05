import React from "react";

type AlignX = "left" | "right" | "center";
type AlignY = "top" | "bottom" | "center";

export interface Props {
  cols?: number | number[];
  left?: number | number[];
  right?: number | number[];
  top?: number | number[];
  bottom?: number | number[];
  padding?: string | string[];
  alignX?: AlignX | AlignX[];
  alignY?: AlignY | AlignY[];
  style?: string | string[];
  tag?: string;
  attrs?: object;
  hasChildBoxes?: boolean;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export const defaultProps = {
  className: null,
  cols: null,
  alignX: null,
  alignY: null,
  children: null,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  padding: null,
  style: null,
  hasChildBoxes: null,
  tag: "div",
  attrs: {},
  href: null,
  onClick: null,
};
