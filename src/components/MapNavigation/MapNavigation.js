import React, { Component, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ImageMapper from 'react-image-mapper';

import { textCss } from "../text/Text"
import mapAgeCleaner from "map-age-cleaner";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: center / cover no-repeat url("${props => props.src}");
  position: relative;
`

const Content = styled.div`
  ${textCss}
  position: absolute;
  top: 0;
  right: 60px;
  width: 40%;
  min-width: 400px;
  background-color: ${({ theme }) => theme.colors.blackTranslucent};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  line-height: 1.25rem;
`

export class MapNavigation extends Component{
	enterArea(area) {
    console.log('ENTER AREA', area);
		this.setState({ hoveredArea: area, msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });
  }
  
	leaveArea(area) {
    console.log('LEAVE AREA', area);
		this.setState({ hoveredArea: null, msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });
	}

  render() {
    const { imageSrc, map } = this.props;
    console.log('MAPPER', this.mapper);

    return (
      <>
        <ImageMapper 
          ref={mapper => this.mapper = mapper}
          src={imageSrc} 
          map={map}
          onMouseEnter={area => this.enterArea(area)}
          onMouseLeave={area => this.leaveArea(area)} />
        {
          map.areas.map(area => console.log('AREA', area) || (
            <span style={{ backgroundColor: 'yellow', top: `${area.coords[1]}px`, left: `${area.coords[0]}px` }}>{area.name}</span>
          ))
        }
      </>
    )
  }
}
