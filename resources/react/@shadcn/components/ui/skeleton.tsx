import { cn } from '@shadcn/lib/utils';
import { HTMLAttributes } from 'react';

const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('animate-pulse rounded-md bg-slate-100 dark:bg-slate-800', className)}
    {...props}
  />
);

export { Skeleton };
