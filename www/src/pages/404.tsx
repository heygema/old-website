import React from 'react';
import styled from '@emotion/styled';

import Section from '@narative/gatsby-theme-novela/src/components/Section';
import Paragraph from '@narative/gatsby-theme-novela/src/components/Paragraph';
import SEO from '@narative/gatsby-theme-novela/src/components/SEO';
import Layout from '@narative/gatsby-theme-novela/src/components/Layout';
import mediaqueries from '@narative/gatsby-theme-novela/src/styles/media';

import { Template } from '@narative/gatsby-theme-novela/src/types';

const NotFoundPage: Template = ({ location }) => {
  const messages = new Map([
    ['0', ['order a pizza', 'https://paparonspizza.com/']],
    ['1', ['buy a new Iphone', 'https://www.apple.com/iphone/']],
    ['2', ['listen to Belle Chen', 'https://www.bellechen.com/']],
    [
      '3',
      ['Watch TwoSetViolin', 'https://www.youtube.com/watch?v=Jhep4gvcC1E'],
    ],
  ]);

  let random = Math.round(Math.random() * 3);

  let [suggestion, url] = (messages || new Map()).get(String(random));

  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title="Gema Anggada"
        description="Not Found Page"
      />
      <Section>
        <Row>
          <Centered>
            <P>{`😅 404! Oops, nothing here! 🌈`}</P>
            <P>
              I suggest you
              <BoldLink href={url} target="_blank">
                {` ${suggestion}`}
              </BoldLink>
            </P>
          </Centered>
        </Row>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;

const BoldLink = styled.a`
  color: ${p => p.theme.colors.articleText};
  font-weight: 700;

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

const P = styled(Paragraph)`
  text-align: center;
  font-size: 2.3rem;
  margin-bottom: 10px;

  ${mediaqueries.phablet`
    font-size: 1.8rem;
    margin-bottom; 15px;
  `}

  ${mediaqueries.phablet`
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;

const Centered = styled(Paragraph)`
  flex-direction: column;
  display: flex;
  flex: 1;
  min-height: 400px;
  z-index: 100;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  min-height: ;
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
