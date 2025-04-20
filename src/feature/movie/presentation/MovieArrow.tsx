'use client';

import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type Direction = 'left' | 'right';

type Props = {
  direction: Direction;
  onClick: (direction: Direction) => void;
};

export default function ScrollArrowButton({ direction, onClick }: Props) {
  const isLeft = direction === 'left';
  const Icon = isLeft ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <button
      onClick={() => onClick(direction)}
      className={`
        responsive-movie-slider-arrow
        p-2 my-18
        ${isLeft ? 'left-0' : 'right-0 -mr-10'} 
      `}>
      <Icon className={`icon-2xl text-white ${isLeft ? '-ml-2' : '-ml-2'}`} />
    </button>
  );
}