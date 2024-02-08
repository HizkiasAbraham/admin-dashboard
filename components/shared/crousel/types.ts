export type CrouselInput = {
  items: CrouselItem[];
  autoSlide: boolean;
  autoSlideInterval?: number;
};

export type CrouselItem = {
  src: string;
  alt?: string;
};
