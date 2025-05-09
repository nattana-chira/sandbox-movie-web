'use client';

type Props = {
  className?: string
};

export default function FeaturedMovieLoadingSkeleton({ className }: Props) {
  return (
    <div className={`animate-pulse space-y-2 rounded p-4 w-full ${className}`}>
      <div className="h-[40vw] bg-zinc-700 rounded mb-3" />
      <div className="h-[4vw] bg-zinc-700 rounded w-1/3 mb-2" />
      <div className="h-[calc(30px+10vw)] bg-zinc-700 rounded" />
    </div>
  )
}