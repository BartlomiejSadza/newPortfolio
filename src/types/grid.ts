export type GridCardType = 'default' | 'tech-stack' | 'email-copy' | 'gradient-background';

export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
  cardType?: GridCardType;
}

export interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}
