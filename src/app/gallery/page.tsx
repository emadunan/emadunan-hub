import PhotoGallery from '@/components/gallary/MediaGallery';
import MainContainer from '@/components/layout/MainContainer';
import React from 'react';

const GalleryPage: React.FC = () => {
  return (
    <MainContainer>
      <PhotoGallery />
    </MainContainer>
  )
}

export default GalleryPage