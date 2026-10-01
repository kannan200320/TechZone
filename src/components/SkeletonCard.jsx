import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#1E1E1E] border border-[#EFEBE9] dark:border-[#2D2D30] rounded-3xl p-4 shadow-sm animate-pulse">
      <div className="aspect-square bg-[#EFEBE9] dark:bg-[#2D2D30] rounded-2xl mb-4 relative overflow-hidden skeleton-shimmer"></div>
      <div className="h-3 w-20 bg-[#EFEBE9] dark:bg-[#2D2D30] rounded mb-2 skeleton-shimmer"></div>
      <div className="h-5 w-4/5 bg-[#EFEBE9] dark:bg-[#2D2D30] rounded mb-1 skeleton-shimmer"></div>
      <div className="h-4 w-3/5 bg-[#EFEBE9] dark:bg-[#2D2D30] rounded mb-4 skeleton-shimmer"></div>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#EFEBE9] dark:border-[#2D2D30] mb-4">
        <div className="h-4 w-12 bg-[#EFEBE9] dark:bg-[#2D2D30] rounded skeleton-shimmer"></div>
        <div className="h-4 w-14 bg-[#EFEBE9] dark:bg-[#2D2D30] rounded skeleton-shimmer"></div>
      </div>
      <div className="h-10 w-full bg-[#EFEBE9] dark:bg-[#2D2D30] rounded-xl skeleton-shimmer"></div>
    </div>
  );
}
