import styled from "styled-components"

// This is the main thing to use for the home page (and probably other pages)
export const SlantedBorderElement = styled.div`
  /* Your styling goes here */
  clip-path: polygon(0 ${({offsetAmount = 4}) => offsetAmount + '%'}, 100% 0, 100% ${({offsetAmountBottom = 96}) => offsetAmountBottom + '%'}, 0 100%);
  transform: translateY(${({translateY = '-10%'}) => translateY});
`
