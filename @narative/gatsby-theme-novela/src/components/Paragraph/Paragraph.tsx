import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

// before: font-size: 18px
const Paragraph = styled.p`
  line-height: 1.756;
  font-size: 20px;
  color: ${(p) => p.theme.colors.articleText};
  font-family: ${(p) => p.theme.fonts.serif};
  letter-spacing: .25px;
  transition: ${(p) => p.theme.colorModeTransition};
  margin: 0 auto 35px;
  width: 100%;
  max-width: 680px;

  b {
    font-weight: 800;
  }

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
    margin: 0 auto 25px;
    font-size: 17px;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`;

export default Paragraph;
