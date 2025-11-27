import React from 'react';

export const SkeletonBox: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...rest }) => (
  <div className={`animate-pulse bg-white/5 rounded ${className}`} {...rest} />
);

export const SkeletonText: React.FC<{ width?: string; className?: string }> = ({ width = 'w-24', className = '' }) => (
  <div className={`animate-pulse bg-white/10 h-3 rounded ${width} ${className}`} />
);

export const TrackCardSkeleton: React.FC = () => (
  <div className="glass-panel p-4 rounded-2xl">
    <SkeletonBox className="aspect-square rounded-xl mb-4" />
    <SkeletonText width="w-3/4" className="mb-2" />
    <SkeletonText width="w-1/2" className="mb-3" />
    <div className="flex items-center justify-between mt-3">
      <SkeletonText width="w-16" />
      <SkeletonText width="w-10" />
    </div>
  </div>
);

export const GenreTileSkeleton: React.FC = () => (
  <div className="h-40 rounded-2xl bg-white/5 animate-pulse" />
);

export const TableRowSkeleton: React.FC = () => (
  <tr className="border-b border-white/5">
    <td className="px-6 py-4"><SkeletonText width="w-6" /></td>
    <td className="px-6 py-4"><div className="flex items-center gap-3"><SkeletonBox className="w-10 h-10 rounded" /><SkeletonText width="w-32" /></div></td>
    <td className="px-6 py-4"><SkeletonText width="w-24" /></td>
    <td className="px-6 py-4"><SkeletonText width="w-20" /></td>
    <td className="px-6 py-4 text-right"><SkeletonText width="w-10 ml-auto" /></td>
  </tr>
);
