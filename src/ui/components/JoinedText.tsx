'use client';

type Props = {
  text: string
  className?: string
  showComma: boolean
};

export default function JoinedText({ text, showComma, className }: Props) {
  return (
    <span className={className}>
      {text}{showComma && ', '}
    </span>
  )
}