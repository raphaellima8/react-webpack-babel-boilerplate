import React from 'react';
import styled from 'styled-components';

import Thumbnail from '../../../../../../../components/presentational/Thumbnail';

const GalleryContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;

  @media (min-width: 600px) {
    flex-grow: 0;
    justify-content: space-between;
    > img:last-child {
      margin-right: 0;
    }
  }
`;

const Gallery = ({ imageList }) => (
  <GalleryContainer>{parseItems(imageList)}</GalleryContainer>
);

const parseItems = imageList => {
  return imageList.map(({ id, src }) => (
    <Thumbnail key={id} imgAddress={src} />
  ));
};

export default Gallery;
