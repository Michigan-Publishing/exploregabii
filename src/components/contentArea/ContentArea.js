import React from "react"
import styled from "styled-components"
import palette from "../../utils/palette"
import { TABLET_LANDSCAPE_WIDTH } from "../../constants"

const ContentWrapper = styled.main`
  padding: 0 2rem;
  align-self: center;
  max-width: 95%; 
  
  & h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
  }

  & p,
  li {
    margin: 1.5rem 0.75rem;
  }

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    max-width: 95vw;
    width: 95vw;
    padding: 0 0.5rem;
    margin: 0 0.5rem 0 0.5rem;
  }
`

export default class extends React.Component {
  render() {
    const { children, style } = this.props
    return <ContentWrapper style={style}>{children}</ContentWrapper>
  }
}
