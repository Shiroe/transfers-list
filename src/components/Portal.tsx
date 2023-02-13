import React, { useEffect, useState, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Portal: React.FC<PortalProps> = ({ children, className, ...rest }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portalContainer');
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className={className} {...rest}>
          {children}
        </div>,
        ref.current
      )
    : null;
};

export default Portal;
