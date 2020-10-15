import React from 'react';
import Ketikin from 'ketikin';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import Section from '@components/Section';
import Headings from '@components/Headings';
import Paragraph from '@components/Paragraph';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Subscription from '@components/Subscription';
import Image from '@components/Image';
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

      <ImageInsideGooey src={require('../images/avatar_web.png')} />
    </GooeyContainer>
  );
};

const ImageInsideGooey = styled(Image)`
  position: absolute;
  margin-left: 90px;
  height: 320px;

  ${mediaqueries.desktop`
    height: 280px;
    margin-left: 70px;
  `}

  ${mediaqueries.phablet`
    height: 280px;
    margin-left: 70px;
  `}
`;

const GooeyContainer = styled.div`
  height: 360px;
  width: 360px;

  ${mediaqueries.desktop`
    height: 300px;
    width: 300px;
  `}

  ${mediaqueries.phablet`
      height: 300px;
      width: 300px;
  `}
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

const greetings = [
  'Hello',
  'こんにちは',
  'Halo',
  'Приве́т',
  'Bonjour',
  'Xin Chào',
].map(text => text + '!');

function LinkText({ href = '', text = '' }) {
  return (
    <BoldLink href={href} target="_blank">
      {text}
    </BoldLink>
  );
}

const AboutPage: Template = ({ location }) => {
  const makeLink = (href, text) => <LinkText href={href} text={text} />;

  const pythonLink = 'https://www.python.org/';

  const pianoLink = 'https://en.wikipedia.org/wiki/Piano';

  const travelingLink = 'https://en.wikipedia.org/wiki/Travel';

  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title="Gema Anggada"
        description="Gema's personal site"
      />
      <Section>
        <Row>
          <BioContainer>
            <HelloDiv>
              <Ketikin texts={greetings} interval={180}>
                {value => <Title>{value || '_'}</Title>}
              </Ketikin>
            </HelloDiv>
            <P>
              👋 My name is Gema Anggada! I am a Software Engineer (He/Him) who
              grew up Jakarta, Indonesia. I've work with
              {makeLink('https://www.typescriptlang.org/', ' TypeScript')},{' '}
              {makeLink('https://reactjs.org/', 'React')} &{' '}
              {makeLink('https://reactnative.dev', 'React Native')} to create
              websites and mobile apps, while also love to play around with{' '}
              {makeLink('https://reasonml.github.io', 'ReasonML')}, or{' '}
              {makeLink('https://python.org', 'Python')}. In life, I love{' '}
              {makeLink(pianoLink, 'Piano')} and{' '}
              {makeLink(travelingLink, 'Traveling')}. This is a place to pour my
              thoughts about variety of topics, including but not limited to
              programming.
              <br />
              Meanwhile, thanks for coming by & I hope you enjoy!
            </P>
          </BioContainer>
          <ProfilePictureDiv>
            <Goeey />
          </ProfilePictureDiv>
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
            <div
              style={{
                flex: 1,
                minHeight: 400,
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <NothingYetContainer> Nothing yet.</NothingYetContainer>
            </div>
          </div>
        </Row>
        <Subscription />
      </Section>
    </Layout>
  );
};

export default AboutPage;

const BioContainer = styled.div`
  flex: 1;
  padding-top: 60px;
`;

const HelloDiv = styled.div`
  margin-bottom: 50px;
`;

const ProfilePictureDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  min-height: 45vh;
  flex-direction: row;

  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;

  opacity: 1;

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
    font-size: 3rem;
  `}

  ${mediaqueries.phablet`
    font-size: 2.8rem;
    padding: 30px 20px 0;
    margin-bottom: 10px;
  `}
`;

const NothingYetContainer = styled(Paragraph)`
  text-align: center;
  font-size: 2.3rem;
  ${mediaqueries.phablet`
    font-size: 1.8rem;
    margin-bottom; 15px;
  `}
  ${mediaqueries.phablet`
    margin-bottom: 20px;
  `}
`;

const BoldLink = styled.a`
  color: ${p => p.theme.colors.articleText};
  font-weight: 700;

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

BoldLink.defaultProps = { target: '_blank' };

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
    font-size: 1.8rem;
    margin-bottom; 15px;
  `}

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;
