'use client';

type Props = {
  className?: string
};

export default function MovieDetailsLoadingSkeletion({ className }: Props) {
  return (
    <div className={`animate-pulse space-y-2 rounded bg-zinc-800 p-4 w-full ${className}`}>
      <div className="h-100 bg-zinc-700 rounded" />
      <div className="h-4 bg-zinc-700 rounded w-3/4" />
      <div className="h-4 bg-zinc-700 rounded w-1/2" />
      <div className="h-4 bg-zinc-700 rounded w-3/5" />
      <div className="h-4 bg-zinc-700 rounded w-5/6 mb-10" />

      <div className="h-30 bg-zinc-700 rounded" />
      <div className="h-30 bg-zinc-700 rounded" />
      <div className="h-30 bg-zinc-700 rounded" />
    </div>
  )
}