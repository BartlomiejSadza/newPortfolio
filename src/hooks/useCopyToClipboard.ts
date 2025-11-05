'use client';

import { useState } from 'react';

interface UseCopyToClipboardReturn {
  copied: boolean;
  copyToClipboard: () => void;
}

export const useCopyToClipboard = (text: string): UseCopyToClipboardReturn => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return { copied, copyToClipboard };
};
