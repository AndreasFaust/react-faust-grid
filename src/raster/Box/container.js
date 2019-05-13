import React from 'react'
import styled from 'styled-components'
import Container from '../utils/container'

const GridContainer = styled(Container)`
  box-sizing: border-box;
  display: ${props => props.hasChildBoxes ? 'grid' : 'flex'};

  ${props => props.hasChildBoxes && props.media.map((media, index) => {
    return media`
      grid-template-columns: repeat(${props => props.colspan[index]}, 1fr);
      grid-auto-columns: ${props => props.colspan[index]}fr;
      grid-column-gap: ${props.gutterX[index]};
      grid-row-gap: ${props.gutterY[index]};
    `
  })}
  ${props => props.media.map((media, index) => {
    return media`
      grid-column: auto / span ${props.cols[index]};
      margin-left: ${props.left[index]};
      margin-right: ${props.right[index]};
      margin-top: ${props.top[index]};
      margin-bottom: ${props.bottom[index]};
      ${props.style[index]}

      align-items: ${props => props.alignY[index]};
      justify-content: ${props => props.alignX[index]};    
    `
  })}
`

const FlexContainer = styled(Container)`
  display: flex;
  box-sizing: border-box;
  
  ${props => props.media.map((media, index) => {
    return media`
      width: ${props.cols[index]}%;
      
      padding-left: calc(${props.gutterX[index]} / 2);
      padding-right: calc(${props.gutterX[index]} / 2);
      padding-top: calc(${props.gutterY[index]} / 2);
      padding-bottom: calc(${props.gutterY[index]} / 2);

      margin-left: ${props.left[index]};
      margin-right: ${props.right[index]};
      margin-top: ${props.top[index]};
      margin-bottom: ${props.bottom[index]};
      ${props.style[index]}
    `
  })
}
`

export default (props) => {
  if (props.cssMode === 'flex') {
    return <FlexContainer {...props} />
  }
  return <GridContainer {...props} />
}