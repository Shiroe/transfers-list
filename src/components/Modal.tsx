import React, { ReactNode } from 'react';

import Portal from '@/components/Portal';

interface Modal {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
  className?: string;
}

const Modal: React.FC<Modal> = ({
  isOpen,
  children,
  onClose,
  className = '',
  ...rest
}) => {
  return (
    <Portal
      onClick={onClose}
      className={`fixed inset-0 flex items-center
        justify-around bg-brand-blue bg-opacity-95
        transition-all delay-75 duration-300 ease-in-out
          ${isOpen ? `` : `translate-y-full bg-opacity-20`}
          ${className}
        `}
      {...rest}
    >
      {children}
    </Portal>
  );
};

export default Modal;
