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
      className={`absolute h-[211px] w-15 ${isLeft ? 'left-0' : 'right-0'} 
        top-1/2 -translate-y-1/2 z-10 
        bg-black/50 hover:bg-black/80 text-white 
        hover:text-red-500 transition p-2`}
    >
      <Icon className={`w-14 h-14 text-white ${isLeft ? '-ml-2' : '-mr-2'}`} />
    </button>
  );
}