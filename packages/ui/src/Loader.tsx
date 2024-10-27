import { cn } from '../../lib/utils';

interface LoaderProps {
  className?: string;
  title: string;
  description?: string;
}

export function Loader({ className, title, description }: LoaderProps) {
  return (
    <div
      className={cn(
        'flex h-screen justify-center items-center bg-black opacity-90 text-white ${className}',
        className,
      )}
    >
      <div className="flex flex-col justify-center items-center font-bold text-3xl">
        <h1 className="text-3xl font-sans">{title}</h1>
        <div className="font-semibold text-neutral-400 text-xl">
          {description}
        </div>
      </div>
    </div>
  );
}
