import React, { Component, useState } from "react"
import styled from "styled-components"
import ImageMapper from "./ImageMapper"
import { unescapeWithRegexp } from "../../utils/escape"
import { Box } from "rebass"

const AreaTag = styled.span`
  position: absolute;
  color: #fff;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
  transform: translate3d(-50%, -50%, 0);
  border-radius: 5px;
  pointer-events: none;
  z-index: 1000;
`

export default class MapNavigation extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    areaCoords: null,
  }

  componentDidMount() {
    if (this.mapper && this.mapper.computeCenter) {
      const areaCoords = JSON.parse(
        unescapeWithRegexp(this.props.map)
      ).areas.reduce((accum, area) => {
        area.coords = JSON.parse(area.coords)
        accum[area.name] = this.mapper.computeCenter(area)
        return accum
      }, {})
      this.setState({ areaCoords })
    }
  }

  render() {
    const { imageSrc, map: mapString, alt } = this.props
    var map = ""
    try {
      map = JSON.parse(unescapeWithRegexp(mapString))
    } catch (ex) {}

    if (map && Array.isArray(map.areas)) {
      map.areas.forEach(area => {
        area.coords = JSON.parse(area.coords)
      })
    } else {
      map.areas = []
    }

    return (
      <Box {...this.props}>
        <div style={{ position: "relative" }}>
          {imageSrc && (
            <ImageMapper
              ref={mapper => (this.mapper = mapper)}
              src={imageSrc}
              map={map}
              alt={alt}
              key="mapper"
            />
          )}
          {this.mapper &&
            this.state.areaCoords &&
            !this.props.hideTag &&
            map.areas.map(area => {
              const coords = this.state.areaCoords[area.name]
              return (
                <AreaTag
                  key={area.name}
                  alt={area.name}
                  style={{ top: `${coords[1]}px`, left: `${coords[0]}px` }}
                >
                  {area.name}
                </AreaTag>
              )
            })}
        </div>
      </Box>
    )
  }
}
