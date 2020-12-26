import { useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { FaHeart, FaCalendarAlt, FaRobot, FaBell, FaLink } from 'react-icons/fa'
import colors from '../common/colors'
import breakpoints from '../common/breakpoints'

const StyledInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 80vh;
    width: 100%;
`

const HeroBackground = styled.div`
    position: relative;
    top: 0;
    margin: 0 auto;
    background-image: url('${({image}) => image}');
    background-size: cover;
    filter: blur(27px);
    min-height: 50vh;
    z-index: -1;
    width: 100%;
    max-width: 1340px;
    @media (min-width: ${breakpoints.tablet}px) {
        min-height: 70vh;
    }
    @media (min-width: ${breakpoints.medium}px) {
        min-height: 85vh;
    }
`

const HeroOverlay = styled.div`
    position: relative;
    top: -55vh;
    left: 0;
    z-index: 9999;
    @media (min-width: ${breakpoints.tablet}px) {
        top: -75vh;
    }
    @media (min-width: ${breakpoints.medium}px) {
        top: -90vh;
    }
`

const TopRow = styled.div`
    filter: unset;
    -webkit-filter: unset;
    display: flex;
    justify-content: space-around;
    padding: 12vh 0 2vh 0;
    font-size: 48px;
    color: ${colors.backgrounds.header};
    @media (min-width: ${breakpoints.tablet}px) {
        font-size: 62px;
    }
    @media (min-width: ${breakpoints.medium}px) {
        font-size: 96px;
    }
`

const OffsetHigh = styled.div`
    display: inline-block;
    position: relative;
    top: -50px;
`

const OffsetLow = styled.div`
    display: inline-block;
    position: relative;
    top: 50px;
    max-height: 70px;
    font-size: 24px;
    vertical-align: text-bottom;
    padding: 20px 25px;
    color: ${colors.typography.light};
    background-color: ${colors.backgrounds.footer};
`

const MiddleRow = styled.div`
    display: flex;
    justify-content: center;
    padding; 10vh;
    flex-wrap: wrap;
    h1 {
        max-width: 40vw;
        font-size: 24px;
        text-align: center;
        color: ${colors.backgrounds.footer};

        @media (min-width: ${breakpoints.tablet}px) {
            font-size: 48px;
        }
        @media (min-width: ${breakpoints.medium}px) {
            font-size: 62px;
        }
    }
`

const BottomRow = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 4vh 0 12vh 0;
    font-size: 48px;
    color: ${colors.backgrounds.header};
    @media (min-width: ${breakpoints.tablet}px) {
        font-size: 62px;
    }
    @media (min-width: ${breakpoints.medium}px) {
        font-size: 96px;
    }
`;

const Hero = () => {
    const data = useStaticQuery(graphql`
        query {
        placeholderImage: file(relativePath: { eq: "image 1.png" }) {
            childImageSharp {
            fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)

    console.log(data)

    return (
    <StyledInnerWrapper>
        <HeroBackground image={data.placeholderImage.childImageSharp.fluid.src} />
        <HeroOverlay>
            <TopRow>
                <div><FaCalendarAlt /></div>
                <OffsetHigh className="robot-icon"><FaRobot /></OffsetHigh>
                <div><FaLink /></div>
            </TopRow>
            
            <MiddleRow><h1>Take Your Broadcast To The Next Level</h1></MiddleRow>
            <BottomRow>
                <div />
                <div><FaHeart /></div>
                <OffsetLow className="robot-icon">Sign Up</OffsetLow>
                <div><FaBell /></div>
                <div />
            </BottomRow>
        </HeroOverlay>
    </StyledInnerWrapper>
    )
}

export default Hero