'use client';

import { MainMenu } from './main-menu';
import Image from 'next/image';

interface HeaderProps {
  isBackVisible: boolean;
  onBack: any;
}

export function Header({ isBackVisible, onBack }: HeaderProps) {
  return (
    <nav className="flex items-center justify-between py-0 px-5 fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="flex items-center">
        <MainMenu isBackVisible={isBackVisible} onBack={onBack} />
      </div>
      <div className="flex items-center">
        <div className="relative z-20 size-12 flex items-center justify-center">
          <span className="mr-1 font-semibold">5</span>
          <div className="relative size-6">
            <Image
              src="https://mssadlt8nkffobic.public.blob.vercel-storage.com/vinyl-amol-info-ugTPebpj0XH1eY18ZHYzehD7pxcHep.png"
              alt="Products"
              fill
              className="object-contain animate-[spin_4s_linear_infinite]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
