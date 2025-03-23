'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ClientOnly from './utils/ClientOnly';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <ClientOnly>
      <div
        className={`z-20 bg-white fixed top-[36px] ${
          isVisible ? 'sticky-header' : 'sticky-header-hidden'
        }`}
      >
        <div className="flex justify-center items-center px-20 py-4 lg:py-[1.65rem] border-b border-[rgba(88,88,88,0.08)]">
          <Image src="/logo.avif" alt="DoctorsNote" height={30} width={240} />
        </div>
      </div>
    </ClientOnly>
  );
}
