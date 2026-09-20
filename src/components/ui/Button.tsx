import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98] select-none';

    const variants = {
      primary: 'bg-[#0EA5A4] hover:bg-[#0D9488] text-white shadow-sm hover:shadow-md shadow-teal-500/20 focus-visible:outline-[#0EA5A4]',
      secondary: 'bg-[#1E3A8A] hover:bg-[#1E40AF] text-white shadow-sm hover:shadow-md shadow-blue-900/20 focus-visible:outline-[#1E3A8A]',
      accent: 'bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-900 font-semibold shadow-sm hover:shadow-md focus-visible:outline-[#FBBF24]',
      outline: 'border-2 border-[#0EA5A4] text-[#0EA5A4] hover:bg-[#0EA5A4]/10 bg-transparent focus-visible:outline-[#0EA5A4]',
      ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:outline-slate-400',
      white: 'bg-white hover:bg-slate-50 text-[#0EA5A4] font-semibold shadow-md hover:shadow-lg focus-visible:outline-white'
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold'
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
