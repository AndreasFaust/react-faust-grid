import React, { useEffect, useContext, useState } from "react";
import { nanoid } from "nanoid/non-secure";

import getColsPercent from "../utils/getColsPercent";
import Inner from "../utils/inner";
import Resetter from "../utils/resetter";
import getAlign from "../utils/getAlign";
import getAlignmentXRest from "../utils/getAlignmentXRest";
import normalizeRest from "../utils/normalizeRest";
import normalizeProps from "../utils/normalizeProps";
import getReset from "../utils/getReset";
import ErrorMessage from "../utils/ErrorMessage";

import Context from "../context";
import StyledBox from "./StyledBox";
import { ControlBox } from "../Control";
import { Props } from "./props";

import useMarginPercent from "./hooks/useMarginPercent";

const Box = React.forwardRef<HTMLElement, Props>(
  (
    {
      attrs = {},
      alignX,
      alignY,
      bottom = 0,
      children,
      className,
      cols,
      component,
      hasChildBoxes,
      href,
      left = 0,
      onClick,
      padding,
      right = 0,
      style,
      tag = "div",
      top = 0,
      order,
      innerHTML,
    },
    ref
  ) => {
    const context = useContext(Context);
    if (!context) {
      return <ErrorMessage />;
    }
    const {
      breakpoint,
      breakpoints,
      colspan,
      controlColor,
      controlIsVisible,
      cssMode,
      gutterX,
      gutterY,
      media,
      parentCols,
      rest,
      registerChildBox,
    } = context;

    const [id] = React.useState(nanoid);
    const [childBoxes, setChildBoxes] = useState([]);
    const hasChildBoxesNormalized = getReset({
      hasChildBoxesFromProps: hasChildBoxes,
      hasChildBoxesFromRegister: !!childBoxes.length,
    });
    const alignXNormalized = getAlign({
      align: normalizeProps({ prop: alignX, breakpoints }),
      cssMode,
      hasChildBoxes: hasChildBoxesNormalized,
    });
    const alignYNormalized = getAlign({
      align: normalizeProps({ prop: alignY, breakpoints }),
      cssMode,
      hasChildBoxes: hasChildBoxesNormalized,
    });

    const restNormalized = normalizeRest({ rest, breakpoints, id });

    const leftNormalized = normalizeProps({ prop: left, breakpoints });
    const rightNormalized = normalizeProps({ prop: right, breakpoints });
    const topNormalized = normalizeProps({ prop: top, breakpoints });
    const bottomNormalized = normalizeProps({ prop: bottom, breakpoints });
    const paddingNormalized = normalizeProps({ prop: padding, breakpoints });
    const styleNormalized = normalizeProps({ prop: style, breakpoints });
    const orderNormalized = normalizeProps({ prop: order, breakpoints });

    const colsNormalized = normalizeProps({
      prop: cols,
      defaultProp: parentCols,
      breakpoints,
    });

    const colsPercent = getColsPercent({
      cols: colsNormalized,
      left: leftNormalized,
      right: rightNormalized,
      parentCols,
      cssMode,
    });

    const restPercent = useMarginPercent({
      prop: restNormalized,
      cols: colsPercent,
    });
    const leftPercent = useMarginPercent({
      prop: leftNormalized,
      cols: colsPercent,
    });
    const rightPercent = useMarginPercent({
      prop: rightNormalized,
      cols: colsPercent,
    });
    const topPercent = useMarginPercent({
      prop: topNormalized,
      cols: colsPercent,
    });
    const bottomPercent = useMarginPercent({
      prop: bottomNormalized,
      cols: colsPercent,
    });

    const alignmentXRest = getAlignmentXRest({
      breakpoints,
      childBoxes,
      cssMode,
      alignX: alignXNormalized,
      cols: colsNormalized,
    });

    useEffect(() => {
      if (registerChildBox)
        registerChildBox({
          left: leftNormalized,
          right: rightNormalized,
          cols: colsNormalized,
          id,
        });
    }, []);

    return (
      <StyledBox
        component={component}
        cssMode={cssMode}
        breakpoints={breakpoints}
        className={
          cssMode === "grid" && className ? ["Box", className].join(" ") : "Box"
        }
        cols={colsPercent}
        rest={restPercent}
        media={media}
        gutterX={gutterX}
        gutterY={gutterY}
        colspan={colsNormalized}
        hasChildBoxes={hasChildBoxesNormalized}
        alignX={alignXNormalized}
        alignY={alignYNormalized}
        tag={tag}
        left={leftPercent}
        right={rightPercent}
        top={topPercent}
        bottom={bottomPercent}
        padding={paddingNormalized}
        controlIsVisible={controlIsVisible}
        controlColor={controlColor}
        order={orderNormalized}
        style={cssMode === "grid" && styleNormalized}
        ref={ref}
        attrs={{
          ...attrs,
          ...(innerHTML &&
            cssMode === "grid" && {
              dangerouslySetInnerHTML: { __html: innerHTML },
            }),
          ...(href && { href }),
          ...(onClick && { onClick }),
        }}
      >
        <Inner
          cssMode={cssMode}
          media={media}
          alignX={alignXNormalized}
          alignY={alignYNormalized}
          style={styleNormalized}
          hasChildBoxes={hasChildBoxes}
          innerHTML={innerHTML}
          className={
            className ? ["Box__Inner", className].join(" ") : "Box__Inner"
          }
        >
          <>
            {controlIsVisible && <ControlBox controlColor={controlColor} />}
            <Resetter
              cssMode={cssMode}
              className="Box__Resetter"
              hasChildBoxes={hasChildBoxesNormalized}
              media={media}
              gutterX={gutterX}
              gutterY={gutterY}
              alignX={alignXNormalized}
              alignY={alignYNormalized}
              padding={paddingNormalized}
            >
              <Context.Provider
                value={{
                  breakpoints,
                  breakpoint,
                  gutterX,
                  gutterY,
                  colspan,
                  media,
                  parentCols: colsNormalized,
                  controlIsVisible,
                  controlColor,
                  cssMode,
                  rest: alignmentXRest,
                  registerChildBox: (childBox: {
                    left: number[];
                    right: number[];
                    cols: number[];
                    id: string;
                  }) => {
                    setChildBoxes((childBoxes) => [...childBoxes, childBox]);
                  },
                }}
              >
                {children}
              </Context.Provider>
            </Resetter>
          </>
        </Inner>
      </StyledBox>
    );
  }
);

Box.displayName = "Box";

export default Box;
export { Box };