import { HTMLMotionProps, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import React from 'react';
interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden';
  const variants = {
    primary: 'bg-[#FFC94A] text-white focus:ring-[#FFC94A] shadow-lg shadow-[#FFC94A]/20',
    secondary: 'bg-[#007B83] text-white hover:bg-[#00666D] focus:ring-[#007B83] shadow-lg shadow-[#007B83]/20 hover:shadow-[#007B83]/40',
    outline: 'border-2 border-[#FFC94A] text-[#FFC94A] hover:bg-[#FFC94A] hover:text-[#1E2A38]',
    ghost: 'text-white hover:bg-white/10 hover:text-white'
  };
  const sizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  };
  return <motion.button whileHover={{
    scale: 1.02,
    y: -1
  }} whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} disabled={isLoading} {...props}>
      {/* Glow effect for primary buttons */}
      {variant === 'primary' && <motion.div className="absolute inset-0 bg-white/20" initial={{
      x: '-100%'
    }} whileHover={{
      x: '70%'
    }} transition={{
      duration: 0.5
    }} />}

      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </motion.button>;
}