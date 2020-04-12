import React, { Component } from "react"

import { Layout } from "../components/layout";
import SEO from "../components/seo";
import styled from 'styled-components';
import colors from "../common/colors";

const MainContainer = styled.div`
  color: ${colors.typography.light};
  background-color: ${colors.backgrounds.dark1};
  clip-path: polygon(0 4%, 100% 0, 100% 96%, 0 100%);
  transform: translateY(-10%);
  `;
const Title = styled.h2`
  padding-top: 32px;
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 47px;
`;
const Section = styled.div`
  display: flex;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  margin-left: -20%;
  min-width: 400px;
`;
const RightAlignSection = styled(Section)`
  margin-right: -40%;
`;
const BigNumber = styled.div`
  font-size: 60px;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  font-weight: 600;
  font-size: 144px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Description = styled.div`
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 420px;
`;
const SectionTitle = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 47px;
`;
const SectionParagraph = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
`;

const GettingStartedComponent = () => (
    <MainContainer>

        <Title>Getting Started</Title>

        <Section>
            <BigNumber>1</BigNumber>
            <Description>
                <SectionTitle>Sign up and log in.</SectionTitle> 
                <SectionParagraph>It takes 30 seconds</SectionParagraph>
            </Description>
        </Section>

        <RightAlignSection >
            <BigNumber>2</BigNumber>
            <Description>
                <SectionTitle>Configure some settings. </SectionTitle> 
                <SectionParagraph>Add some Alerts. Connect up some lights.</SectionParagraph>
            </Description>
        </RightAlignSection> 

        <Section>
            <BigNumber>3</BigNumber>
            <Description>
                <SectionTitle>Profit!</SectionTitle> 
                <SectionParagraph>The Sky is the limit.</SectionParagraph>
            </Description>
        </Section>

    </MainContainer>
);

export default GettingStartedComponent;