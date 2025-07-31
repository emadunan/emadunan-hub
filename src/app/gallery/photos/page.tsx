"use client"

import { Masonry } from 'masonic';
import React from 'react';
import { photos } from '@/data/photo.data';
import PhotoCard from '@/components/gallary/PhotoCard';
import MainContainer from '@/components/layout/MainContainer';


const PhotosPage = () => {
  return (
    <MainContainer>
      <Masonry
        items={photos}
        columnWidth={320}
        columnGutter={24}
        overscanBy={2}
        itemKey={(item, index) => `${item.order}-${index}`}
        render={({ index, data }) => <PhotoCard item={data} />}
      />
    </MainContainer>
  )
}

export default PhotosPage;