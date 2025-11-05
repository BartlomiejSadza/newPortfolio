'use client';

import { TECH_STACK_PRIMARY, TECH_STACK_SECONDARY } from '@/constants/tech-stack';

export const TechStackCard = () => {
  return (
    <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
      <div className='flex flex-col gap-3 lg:gap-8'>
        {TECH_STACK_PRIMARY.map((item) => (
          <span
            key={item}
            className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
          >
            {item}
          </span>
        ))}
        <span className='py-4 px-3 rounded-lg text-center bg-[#10132E]' />
      </div>
      <div className='flex flex-col gap-3 lg:gap-8'>
        <span className='py-4 px-3 rounded-lg text-center bg-[#10132E]' />
        {TECH_STACK_SECONDARY.map((item) => (
          <span
            key={item}
            className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
