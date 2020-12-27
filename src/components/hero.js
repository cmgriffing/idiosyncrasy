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
    h1 {
        font-size: 24px;
        text-align: center;
        color: ${colors.typography.light};

        @media (min-width: ${breakpoints.tablet}px) {
            font-size: 48px;
        }
        @media (min-width: ${breakpoints.medium}px) {
            font-size: 62px;
        }
    }
`

const Hero = ({children}) => {

  console.log(children);

  return (
    <StyledInnerWrapper>
      <HeroBackground image={children[0]} />
      <HeroOverlay>        
        <MiddleRow>
            {children[1]}
        </MiddleRow>        
      </HeroOverlay>
    </StyledInnerWrapper>
  )
}

export default Hero
