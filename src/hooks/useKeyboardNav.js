import { useEffect } from 'react';

export const useKeyboardNav = (isOpen, onClose, onNext, onPrev) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
      if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
      if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);
};
