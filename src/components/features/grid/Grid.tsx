import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { gridItems } from '@/data';
import { TechStackCard } from './TechStackCard';
import { EmailCopyCard } from './EmailCopyCard';
import { BackgroundGradientAnimation } from '@/components/ui/GradientBg';

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          >
            {/* Tech Stack Card */}
            {item.id === 3 && <TechStackCard />}

            {/* Email Copy Card */}
            {item.id === 6 && (
              <>
                <BackgroundGradientAnimation>
                  <div className='absolute z-50 flex items-center justify-center text-white font-bold' />
                </BackgroundGradientAnimation>
                <EmailCopyCard />
              </>
            )}
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
