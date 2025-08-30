import { SVGProps } from 'react';

interface CrossProps extends SVGProps<SVGSVGElement> {}

export function Cross({ className, ...props }: CrossProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      {...props}
    >
      {/* Függőleges szár, felső rész */}
      <path d="M45,12 
             a2,2 0 0 1 2,-2 
             h6 
             a2,2 0 0 1 2,2 
             v23 
             h-10 
             z" />
             
      {/* Függőleges szár, alsó rész */}
      <path d="M45,45 
             h10 
             v43 
             a2,2 0 0 1 -2,2 
             h-6 
             a2,2 0 0 1 -2,-2 
             z" />
             
      {/* Vízszintes szár */}
      <path d="M20,37 
            a2,2 0 0 1 2,-2 
            h56
            a2,2 0 0 1 2,2 
            v6 
            a2,2 0 0 1 -2,2 
            h-56
            a2,2 0 0 1 -2,-2 
            z" />
    </svg>
  );
}
