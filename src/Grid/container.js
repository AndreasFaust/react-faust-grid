import styled from 'styled-components'
import Container from '../utils/container'

const StyledContainer = styled(Container)`
  overflow: hidden;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;

  ${props => props.media.map((media, index) => {
    return media`
      position: ${props => props.position[index]};
      padding-left: ${props.left[index]};
      padding-right: ${props.right[index]};
      padding-top: ${props.top[index]};
      padding-bottom: ${props.bottom[index]};
    `
  })}
`

const StyledContainerCustom = styled(StyledContainer)`
  ${props => props.media.map((media, index) => {
    return media`
      ${props.style[index]}   
    `
  })}
`

export default StyledContainerCustom