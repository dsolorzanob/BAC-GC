import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean;
  ref?: React.Ref<HTMLElement>;
}

export const Header = ({
  className,
  fixed,
  children,
  ...props
}: HeaderProps) => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };

    document.addEventListener('scroll', onScroll, { passive: true });

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'bg-background w-full flex flex-row items-center gap-3 p-4 sm:gap-4 transition-shadow relative z-40',
        fixed &&
          'header-fixed peer/header fixed z-50 rounded-md top-0 left-0 sm:h-16',
        offset > 10 && fixed ? 'shadow-md' : 'shadow-none',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 w-auto">
        <SidebarTrigger variant="outlined" className="scale-125 sm:scale-100" />
        <Separator orientation="vertical" className="h-6 hidden sm:block" />
      </div>

      {/* Children responsivos */}
      <div className="flex-1 flex justify-end">{children}</div>
    </header>
  );
};

Header.displayName = 'Header';
