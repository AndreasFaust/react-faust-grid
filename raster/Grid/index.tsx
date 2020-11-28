import React, { useMemo } from "react";
import classNames from "classnames";
import Context from "../context";
import normalizeProps from "../utils/normalizeProps";
import getMediaQueries from "../utils/getMediaQueries";
import getAlign from "../utils/getAlign";
import useControl from "../utils/useControl";
import Inner from "../utils/inner";
import Resetter from "../utils/resetter";
import useCssMode from "../utils/useCssMode";
import StyledContainer from "./container";
import { ControlGrid } from "../Control";
import useCurrentBreakpoint from "../utils/useCurrentBreakpoint";
import getAlignmentXRest from "../utils/getAlignmentXRest";
import Props from "./props";

const Grid = React.forwardRef<HTMLElement, Props>(
  (
    {
      breakpoints = [0, 432, 768, 1024, 1200, 1400],
      left = "0",
      right = "0",
      top = "0",
      bottom = "0",
      gutterX = "0",
      gutterY = "0",
      alignX = "",
      alignY = "",
      colspan = 1,
      control = false,
      controlColor = "rgba(0, 0, 0, 0.1)",
      position = "relative",
      style = "",
      className = "",
      children = null,
      cssMode = undefined,
      tag = "div",
      attrs = {},
      isControl = false,
    },
    ref
  ) => {
    const controlIsVisible = useControl(control);
    const cssModeNormalized = useCssMode(cssMode || "grid");

    const breakpointsNormalized = useMemo(() => breakpoints, [breakpoints]);
    const currentBreakpoint = useCurrentBreakpoint(breakpointsNormalized);
    const gutterXNormalized = useMemo(
      () =>
        normalizeProps({ prop: gutterX, breakpoints: breakpointsNormalized }),
      [gutterX, breakpointsNormalized]
    );
    const gutterYNormalized = useMemo(
      () =>
        normalizeProps({ prop: gutterY, breakpoints: breakpointsNormalized }),
      [gutterY, breakpointsNormalized]
    );
    const alignXNormalized = useMemo(
      () =>
        getAlign({
          align: normalizeProps({
            prop: alignX,
            breakpoints: breakpointsNormalized,
          }),
          cssMode: cssModeNormalized,
          hasChildBoxes: true,
        }),
      [alignX, breakpointsNormalized, cssModeNormalized]
    );
    const alignYNormalized = useMemo(
      () =>
        getAlign({
          align: normalizeProps({
            prop: alignY,
            breakpoints: breakpointsNormalized,
          }),
          cssMode: cssModeNormalized,
          hasChildBoxes: true,
        }),
      [alignY, breakpointsNormalized, cssModeNormalized]
    );

    const media = useMemo(() => getMediaQueries(breakpointsNormalized), [
      breakpointsNormalized,
    ]);
    const parent = useMemo(
      () =>
        normalizeProps({ prop: colspan, breakpoints: breakpointsNormalized }),
      [colspan, breakpointsNormalized]
    );
    const leftNormalized = useMemo(
      () => normalizeProps({ prop: left, breakpoints: breakpointsNormalized }),
      [left, breakpointsNormalized]
    );
    const rightNormalized = useMemo(
      () => normalizeProps({ prop: right, breakpoints: breakpointsNormalized }),
      [right, breakpointsNormalized]
    );
    const topNormalized = useMemo(
      () => normalizeProps({ prop: top, breakpoints: breakpointsNormalized }),
      [top, breakpointsNormalized]
    );
    const bottomNormalized = useMemo(
      () =>
        normalizeProps({ prop: bottom, breakpoints: breakpointsNormalized }),
      [bottom, breakpointsNormalized]
    );
    const positionNormalized = useMemo(
      () =>
        normalizeProps({ prop: position, breakpoints: breakpointsNormalized }),
      [position, breakpointsNormalized]
    );
    const styleNormalized = useMemo(
      () => normalizeProps({ prop: style, breakpoints }),
      [style, breakpoints]
    );

    const alignmentXRest = useMemo(
      () =>
        getAlignmentXRest({
          children,
          breakpoints,
          colsTotal: normalizeProps({ prop: colspan, breakpoints }),
          alignX: alignXNormalized,
          cssMode,
          alignXRaw: alignX,
        }),
      [alignX, alignXNormalized, breakpoints, children, colspan, cssMode]
    );

    return (
      <StyledContainer
        cssMode={cssModeNormalized}
        colspan={colspan}
        className={classNames([
          "Grid",
          `bp-${currentBreakpoint.index}`,
          `bp-${currentBreakpoint.value}`,
          className,
        ])}
        gutterX={gutterXNormalized}
        gutterY={gutterYNormalized}
        alignX={alignXNormalized}
        alignY={alignYNormalized}
        media={media}
        left={leftNormalized}
        right={rightNormalized}
        top={topNormalized}
        bottom={bottomNormalized}
        position={positionNormalized}
        tag={tag}
        attrs={attrs}
        style={styleNormalized}
        ref={ref}
        isControl={isControl}
      >
        {control && controlIsVisible && (
          <ControlGrid
            cssMode={cssModeNormalized}
            colspan={colspan}
            breakpoints={breakpoints}
            gutterX={gutterX}
            gutterY={gutterY}
            left={left}
            right={right}
            top={top}
            bottom={bottom}
            controlColor={controlColor}
          />
        )}
        <Inner
          cssMode={cssModeNormalized}
          className="Grid__Inner"
          alignX={alignXNormalized}
          alignY={alignYNormalized}
          media={media}
          hasChildBoxes
        >
          <Resetter
            cssMode={cssModeNormalized}
            className="Grid__Resetter"
            hasChildBoxes
            gutterX={gutterXNormalized}
            gutterY={gutterYNormalized}
            alignX={alignXNormalized}
            alignY={alignYNormalized}
            media={media}
          >
            <Context.Provider
              value={{
                cssMode: cssModeNormalized,
                breakpoints: breakpointsNormalized,
                gutterX: gutterXNormalized,
                gutterY: gutterYNormalized,
                media,
                colspan,
                parent,
                controlIsVisible,
                controlColor,
              }}
            >
              {alignmentXRest
                ? React.Children.map(children, (child, index) => {
                    return React.cloneElement(
                      child as React.ReactElement<any>,
                      {
                        rest: alignmentXRest && alignmentXRest[index],
                      }
                    );
                  })
                : children}
            </Context.Provider>
          </Resetter>
        </Inner>
      </StyledContainer>
    );
  }
);

export default Grid;
export { Grid };