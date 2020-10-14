import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import Paragraph from '@components/Paragraph';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import mediaqueries from '@styles/media';

import { Template } from '@types';

const NotFoundPage: Template = ({ location }) => {
  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title="Gema Anggada"
        description="Not Found Page"
      />
      <Section>
        <Row>
          <Centered>404. Oops, nothing here.</Centered>
        </Row>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;

const Centered = styled(Paragraph)`
  display: flex;
  flex: 1;
  min-height: 400px;
  z-index: 100;
  justify-content: center;
  align-items: center;
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
