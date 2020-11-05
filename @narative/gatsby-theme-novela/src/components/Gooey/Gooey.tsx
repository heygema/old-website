import React from 'react';
import styled from '@emotion/styled';

import Image from '@components/Image';
import mediaqueries from '@styles/media';

const Goeey: React.FC<{}> = () => {
  return (
    <GooeyContainer>
      <GooeyInner1>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <FilledPath
            d="M62.4,-35.6C72.6,-18.4,66.8,8.4,53.8,28.5C40.7,48.6,20.4,62,-0.9,62.5C-22.2,63,-44.5,50.8,-53.1,33.3C-61.6,15.8,-56.6,-7,-45.4,-24.7C-34.3,-42.4,-17.2,-55.1,4.5,-57.7C26.1,-60.3,52.2,-52.7,62.4,-35.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </GooeyInner1>

      <GooeyInner2>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <FilledPath
            d="M62.4,-35.6C72.6,-18.4,66.8,8.4,53.8,28.5C40.7,48.6,20.4,62,-0.9,62.5C-22.2,63,-44.5,50.8,-53.1,33.3C-61.6,15.8,-56.6,-7,-45.4,-24.7C-34.3,-42.4,-17.2,-55.1,4.5,-57.7C26.1,-60.3,52.2,-52.7,62.4,-35.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </GooeyInner2>

      <GooeyInner3>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <FilledPath
            d="M62.4,-35.6C72.6,-18.4,66.8,8.4,53.8,28.5C40.7,48.6,20.4,62,-0.9,62.5C-22.2,63,-44.5,50.8,-53.1,33.3C-61.6,15.8,-56.6,-7,-45.4,-24.7C-34.3,-42.4,-17.2,-55.1,4.5,-57.7C26.1,-60.3,52.2,-52.7,62.4,-35.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </GooeyInner3>

      <ImageInsideGooey src={require('../../images/avatar_web.png')} />
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

  ${mediaqueries.tablet`
    height: 180px;
    margin-left: 50px;
  `}

  ${mediaqueries.phablet`
    height: 180px;
    margin-left: 50px;
  `}
`;

const GooeyContainer = styled.div`
  height: 360px;
  width: 360px;

  ${mediaqueries.desktop`
    height: 300px;
    width: 300px;
  `}

  ${mediaqueries.tablet`
      height: 200px;
      width: 200px;
  `}

  ${mediaqueries.phablet`
      height: 200px;
      width: 200px;
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

const FilledPath = styled.path`
  fill: ${(p) => p.theme.colors.accent};
`;

export default Goeey;
