import styled from "styled-components";
import breakpoints from '../common/breakpoints';

// This is the main thing to use for the home page (and probably other pages)
export const SlantedBorderElement = styled.div`
  /* Your styling goes here */

  clip-path: polygon(0 ${({offsetAmount = 30}) => offsetAmount}px, ${breakpoints.mobile}px 0px,${breakpoints.mobile}px 100%, 0 100%);
  transform: translateY(${({translateY = '-80'}) => translateY}px);

  @media (min-width: ${breakpoints.mobile}px) {
    clip-path: polygon(0 ${({offsetAmount = 30}) => offsetAmount}px, ${breakpoints.tablet}px 0px, ${breakpoints.tablet}px 100%, 0 100%);
  }
  @media (min-width: ${breakpoints.tablet}px) {
    clip-path: polygon(0 ${({offsetAmount = 50}) => offsetAmount}px, ${breakpoints.medium}px 0px, ${breakpoints.medium}px 100%, 0 100%);
  }
  @media (min-width: ${breakpoints.medium}px) {
    clip-path: polygon(0 ${({offsetAmount = 50}) => offsetAmount}px, ${breakpoints.large}px 0px, ${breakpoints.large}px 100%, 0 100%);
  }
  @media (min-width: ${breakpoints.large}px) {
    clip-path: polygon(0 ${({offsetAmount = 50}) => offsetAmount}px, ${breakpoints.xl}px 0px, ${breakpoints.xl}px 100%, 0 100%);
  }
  @media (min-width: ${breakpoints.xl}px) {
    clip-path: polygon(0 ${({offsetAmount = 50}) => offsetAmount}px, ${breakpoints.xxl}px 0px, ${breakpoints.xxl}px 100%, 0 100%);
  }
  @media (min-width: ${breakpoints.xxl}px) {
    clip-path: polygon(0 ${({offsetAmount = 50}) => offsetAmount}px, 100% 0px, 100% 100%, 0 100%);
  }
`
//FIXME: do not do percentage on translate
//FIXME: shouldn't change the bottom much