import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const { pathname } = useLocation();

  return (
    <div key={pathname}>
      <div className='page-bar' />
      <div className='page-content-in'>{children}</div>
    </div>
  );
};
