'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'group relative bg-black/80 backdrop-blur-sm border border-zinc-800/50 px-6 py-8 flex flex-col justify-between w-full xl:max-w-[280px] min-h-[280px] rounded-2xl cursor-pointer transition-all duration-500 ease-out hover:bg-black/90 hover:border-zinc-700/60 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 overflow-hidden',
        className
      )}
      onClick={handleClick}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/20 via-transparent to-zinc-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zinc-700/0 via-zinc-600/20 to-zinc-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      <div className="relative z-10">
        <div className="flex-center bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 size-14 rounded-xl group-hover:bg-zinc-800/80 group-hover:border-zinc-600/60 group-hover:scale-110 transition-all duration-300 shadow-lg">
          <Image 
            src={img} 
            alt="meeting" 
            width={28} 
            height={28} 
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors duration-300 leading-tight">
          {title}
        </h1>
        <p className="text-base font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Subtle bottom highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </section>
  );
};

export default HomeCard;