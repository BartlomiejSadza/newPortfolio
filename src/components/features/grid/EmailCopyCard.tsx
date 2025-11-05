'use client';

import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { CONTACT_EMAIL } from '@/constants/contact';
import { COLORS } from '@/constants/colors';
import MagicButton from '@/components/ui/MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import animationData from '@/data/confetti.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const EmailCopyCard = () => {
  const { copied, copyToClipboard } = useCopyToClipboard(CONTACT_EMAIL);

  return (
    <div className='mt-5 relative'>
      <div className='absolute -bottom-5 right-0'>
        <Lottie
          options={{
            loop: copied,
            autoplay: copied,
            animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
        />
      </div>
      <MagicButton
        title={copied ? 'e-mail copied!!' : 'Copy my e-mail'}
        icon={<IoCopyOutline />}
        position='left'
        otherClasses={`!bg-[${COLORS.backgroundCard}]`}
        handleClick={copyToClipboard}
      />
    </div>
  );
};
