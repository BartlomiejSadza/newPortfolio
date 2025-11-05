'use client';

import { cn } from '@/lib/utils';
import { COLORS, GRADIENTS } from '@/constants/colors';
import type { BentoGridItemProps } from '@/types';

interface BentoGridItemExtendedProps extends BentoGridItemProps {
  children?: React.ReactNode;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  children,
}: BentoGridItemExtendedProps) => {
  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: COLORS.backgroundPrimary,
        backgroundColor: GRADIENTS.cardBackground,
      }}
    >
      <div className='h-full'>
        <div className='w-full h-full absolute'>
          {img && <img src={img} alt={img} className={cn(imgClassName)} />}
        </div>
        <div className='absolute right-0 -bottom-5'>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          {description && (
            <div
              className='font-sans font-extralight md:text-xs lg:text-base text-sm z-10'
              style={{ color: COLORS.blue }}
            >
              {description}
            </div>
          )}
          <div className='font-sans text-lg lg:text-3xl max-w-96 font-bold z-10'>
            {title}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
