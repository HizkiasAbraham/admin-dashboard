'use client';
import React, { useState, useEffect } from 'react';
import { OutlinedButton } from '../buttons/outlined-button';
import { Icon } from '../icon';
import { CrouselInput } from './types';

export function Carousel(props: CrouselInput) {
  const [curr, setCurr] = useState(0);
  const { autoSlide = false, autoSlideInterval = 300, items: slides } = props;

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative rounded-xl">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((item, index) => (
          <img
            key={index}
            className="object-cover"
            src={item.src}
            alt={item.alt || ''}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          <OutlinedButton onClick={prev} color="inactive">
            <Icon.ChevronLeft className="w-5 h-5 text-green" />
          </OutlinedButton>
          <OutlinedButton onClick={next} color="inactive">
            <Icon.ChevronRight className="w-5 h-5 text-green" />
          </OutlinedButton>
        </div>
      </div>
    </div>
  );
}
