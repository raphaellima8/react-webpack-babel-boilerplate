import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Image from '../presentational/Image';
import { selectedImage, toggleModal } from '../../actions';

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

let dispatchFn;

const Gallery = ({ imageList }) => {
  dispatchFn = useDispatch();
  return (
    <GalleryContainer>
      {parseItems(imageList, sendImageSrcToStore)}
    </GalleryContainer>
  );
};

const sendImageSrcToStore = imageSrc => {
  dispatchFn(selectedImage(imageSrc));
  dispatchFn(toggleModal(true));
};

const parseItems = (imageList, clickCb) => {
  return imageList.map(({ id, src }) => (
    <Image key={id} imgAddress={src} clickCb={clickCb} />
  ));
};

export default Gallery;
