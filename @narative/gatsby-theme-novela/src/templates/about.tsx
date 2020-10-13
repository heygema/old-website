import React from 'react';
import Ketikin from 'ketikin';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import Section from '@components/Section';
import Headings from '@components/Headings';
import Paragraph from '@components/Paragraph';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import mediaqueries from '@styles/media';

import { Template } from '@types';

const Goeey: React.FC<{}> = () => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  const gooeyColor = isDark ? '#E9DAAC' : '#6166DC';

  return (
    <GooeyContainer>
      <GooeyInner1>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={gooeyColor}
            d="M62.4,-35.6C72.6,-18.4,66.8,8.4,53.8,28.5C40.7,48.6,20.4,62,-0.9,62.5C-22.2,63,-44.5,50.8,-53.1,33.3C-61.6,15.8,-56.6,-7,-45.4,-24.7C-34.3,-42.4,-17.2,-55.1,4.5,-57.7C26.1,-60.3,52.2,-52.7,62.4,-35.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </GooeyInner1>

      <GooeyInner2>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={gooeyColor}
            d="M62.4,-35.6C72.6,-18.4,66.8,8.4,53.8,28.5C40.7,48.6,20.4,62,-0.9,62.5C-22.2,63,-44.5,50.8,-53.1,33.3C-61.6,15.8,-56.6,-7,-45.4,-24.7C-34.3,-42.4,-17.2,-55.1,4.5,-57.7C26.1,-60.3,52.2,-52.7,62.4,-35.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </GooeyInner2>

      <GooeyInner3>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={gooeyColor}
            d="M62.4,-35.6C72.6,-18.4,66.8,8.4,53.8,28.5C40.7,48.6,20.4,62,-0.9,62.5C-22.2,63,-44.5,50.8,-53.1,33.3C-61.6,15.8,-56.6,-7,-45.4,-24.7C-34.3,-42.4,-17.2,-55.1,4.5,-57.7C26.1,-60.3,52.2,-52.7,62.4,-35.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </GooeyInner3>
    </GooeyContainer>
  );
};

const GooeyContainer = styled.div`
  height: 360px;
  width: 360px;
  filter: blur(0.3px);
`;

const GooeyInner1 = styled(GooeyContainer)`
  position: absolute;
  animation: infinite-rotate 7s linear infinite;
`;

const GooeyInner2 = styled(GooeyContainer)`
  position: absolute;
  animation: infinite-scale 2s linear infinite;
`;

const GooeyInner3 = styled(GooeyContainer)`
  position: absolute;
  animation: back-rotate 7s linear infinite;
`;

const AboutPage: Template = ({ location, pageContext }) => {
  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title="Gema Anggada"
        description="Gema's personal site"
      />
      <Section narrow>
        <Row>
          <div style={{ flex: 1, paddingTop: 60 }}>
            <div style={{ minHeight: 100 }}>
              <Ketikin
                texts={['Hello!', 'Halo!', 'приве́т!', 'Bonjour!']}
                interval={180}
              >
                {value => <Title>{value}</Title>}
              </Ketikin>
            </div>

            <P narrow={true} hasOverflow={true}>
              👋 My name is Gema! I am a Software Engineer (He/Him) who grew up
              Jakarta, Indonesia. I have experiences in developing website and
              mobile apps using the power of React & React Native! My main
              programming language is Javascript, but always interested to dive
              into languages like Kotlin, ReasonML, and Elm. I'm planning to
              write about many topics in here and not limited to programming.
              Meanwhile, thanks for coming by & I hope you enjoy!
            </P>
          </div>
          <div
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Goeey />
          </div>
        </Row>
        <Row>
          <div
            style={{
              flex: 1,
              flexDirection: 'column',
              display: 'flex',
              width: '100%',
              paddingTop: 60,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Title> Featured Works </Title>
            </div>
            <div style={{ flex: 1, display: 'flex' }}>
              <P> No featured works yet.</P>
            </div>
          </div>
        </Row>
      </Section>
    </Layout>
  );
};

export default AboutPage;

const Row = styled.div`
  display: flex;
  flex: 1;
  min-height: 45vh;
  flex-direction: row;

  ${mediaqueries.tablet`
    flex-direction: column-reverse;
    
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}

  ${mediaqueries.phablet`
    flex-direction: column-reverse;
    
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

const Title = styled(Headings.h1)`
  font-family: ${p => p.theme.fonts.serif};

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;  
  `}

  ${mediaqueries.phablet`
    font-size: 22px;  
    padding: 30px 20px 0;
    margin-bottom: 10px;
  `}
`;

const P = styled(Paragraph)<{
  narrow: boolean;
}>`
  font-size: 2.3rem;
  margin-bottom: 10px;
  max-width: ${p => (p.narrow ? '415px' : '515px')};
  margin-left: 0px;

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    margin-bottom; 15px;
  `}

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;
