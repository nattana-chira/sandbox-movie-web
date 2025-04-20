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
        max-w-[60px] w-[calc(4.5vw)] sm:w-[calc(4.5vw)] md:w-[calc(4vw)] lg:w-[calc(3.5vw)] 
        h-[calc(25.3vw)] sm:h-[calc(22.4vw)] md:h-[calc(13vw)] lg:h-[calc(8.5vw)]
        absolute h-[215px]-translate-y-1/2 z-10 cursor-pointer
        bg-black/50 hover:bg-black/80 text-white 
        hover:bg-red-500 transition p-2 
        ${isLeft ? 'left-0' : 'right-0 -mr-10'} 
        `
      }>
      <Icon className={`icon-2xl text-white ${isLeft ? '-ml-2' : '-ml-2'}`} />
    </button>
  );
}