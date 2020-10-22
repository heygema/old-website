import React from 'react';
import styled from '@emotion/styled';

import Headings from '@components/Headings';
import Section from '@components/Section';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Paginator from '@components/Navigation/Navigation.Paginator';
import mediaqueries from '@styles/media';
import ArticlesList from '../sections/articles/Articles.List.tsx';

function TagPage({ location, pageContext }) {
  const { group: articles, tag } = pageContext;

  return (
    <Layout>
      <SEO pathname={location.pathname} title={tag} />
      <Section>
        <HeroHeading>{`All articles tagged in #${tag}`}</HeroHeading>
      </Section>
      <Section narrow>
        <ArticlesContainer>
          <ArticlesList articles={articles} alwaysShowAllDetails />
        </ArticlesContainer>

        <AuthorPaginator>
          <Paginator {...pageContext} />
        </AuthorPaginator>
      </Section>
      <AuthorsGradient />
    </Layout>
  );
}

export default TagPage;

const ArticlesContainer = styled.div`
  border-radius: 8px;
  padding: 88px 98px;
  position: relative;
  z-index: 1;

  ${mediaqueries.desktop_medium`
    padding: 80px;
  `}

  ${mediaqueries.desktop`
    padding: 0;
    background: transparent;
  `}
`;

const HeroHeading = styled(Headings.h2)`
  font-family: ${(p) => p.theme.fonts.serif};
  margin-top: 60px;
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.32;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 3rem;
  `}

  ${mediaqueries.phablet`
    font-size: 3rem;
  `}
`;

const AuthorsGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${(p) => p.theme.colors.gradient};
  transition: ${(p) => p.theme.colorModeTransition};
`;

const AuthorPaginator = styled.div`
  text-align: center;
`;
