import React from 'react';
import './Gallery.scss';
import Thumbnail from '../../../thumbnail/Thumbnail';

const Gallery = props => (
  <div className="gallery-container">{parseItems(props)}</div>
);

const parseItems = props => {
  return props.imageList.map(image => (
    <Thumbnail key={image.id} imgAddress={image.src} />
  ));
};
export default Gallery;
