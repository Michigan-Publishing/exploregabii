import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Content = styled.div`
  width: 1024px;
  max-width: 1024px;
`

export function LayoutWrapper({ children, className, style }) {
  return (
    <Container style={style}>
      <Content className={className}>{children}</Content>
    </Container>
  )
}
