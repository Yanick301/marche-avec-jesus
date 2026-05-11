import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { COLORS } from "../../constants";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ 
  variant = "primary", 
  className = "", 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "px-10 py-4 font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: `bg-[#C5A059] text-white hover:bg-[#B38E46]`,
    secondary: `bg-[#1A365D] text-white hover:opacity-90`,
    outline: `border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white`,
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
