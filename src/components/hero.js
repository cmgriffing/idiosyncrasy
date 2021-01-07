import React from "react"
import styled from "styled-components"
import colors from "../common/colors"
import breakpoints from "../common/breakpoints"

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 50vh;
  width: 100%;
  @media (min-width: ${breakpoints.tablet}px) {
    min-height: 70vh;
  }
  @media (min-width: ${breakpoints.medium}px) {
    min-height: 85vh;
  }
`

const HeroBackground = styled.div`
    position: relative;
    top: 0;
    margin: 0 auto;
    background-image: url('${({ image }) => image}');
    background-size: cover;
    filter: blur(27px);
    min-height: 50vh;
    z-index: -1;
    width: 100%;
    @media (min-width: ${breakpoints.tablet}px) {
        min-height: 70vh;
    }
    @media (min-width: ${breakpoints.medium}px) {
        min-height: 85vh;
    }
`

const HeroOverlay = styled.div`
  position: relative;
  top: -30vh;
  left: 0;
  align-items: center;
  @media (min-width: ${breakpoints.tablet}px) {
    top: -50vh;
  }
`

const MiddleRow = styled.div`
    display: flex;
    justify-content: center;
    padding; 10vh;
    flex-wrap: wrap;
    align-items: center;
`
const MiddleRowTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  color: ${colors.typography.light};

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 48px;
  }
  @media (min-width: ${breakpoints.medium}px) {
    font-size: 62px;
  }
`

const Hero = ({ children: { backgroundImage, title } }) => {
  return (
    <StyledInnerWrapper>
      <HeroBackground image={backgroundImage} />
      <HeroOverlay>
        <MiddleRow>
          <MiddleRowTitle>{title}</MiddleRowTitle>
        </MiddleRow>
      </HeroOverlay>
    </StyledInnerWrapper>
  )
}

export default Hero
