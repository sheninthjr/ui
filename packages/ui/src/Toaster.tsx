import { cn } from '../../lib/utils';

interface ToasterProps {
  title: string;
  description: string;
  className?: string;
  onClose?: () => void;
}

export function Toaster({
  title,
  description,
  className,
  onClose,
}: ToasterProps) {
  return (
    <div
      className={cn(
        'h-30 p-4 text-white w-72 flex flex-col font-mono rounded-xl border border-slate-700 bg-black shadow-lg',
        className,
      )}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-start">
          <span className="font-bold text-lg truncate">{title}</span>
          <button
            className="font-thin text-neutral-300 text-lg hover:text-white"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="my-2 border-b border-neutral-600" />
      </div>
      <div className="mt-2 line-clamp-2 text-sm text-neutral-200">{description}</div>
    </div>
  );
}
