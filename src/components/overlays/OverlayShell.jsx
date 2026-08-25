import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';

const OverlayShell = ({ 
  isOpen, 
  onClose, 
  children, 
  variant = 'modal', // 'modal' (centered pop-up) or 'fullscreen' (photo tour)
}) => {
  useBodyScrollLock(isOpen);
  const containerRef = useFocusTrap(isOpen);
  useKeyboardNav(isOpen, onClose);

  const isFullscreen = variant === 'fullscreen';

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 ${isFullscreen ? 'bg-white' : 'bg-black/50'}`}
            onClick={isFullscreen ? undefined : onClose}
          />
          
          {/* Content Container */}
          <motion.div
            ref={containerRef}
            initial={isFullscreen ? { opacity: 0, y: 50 } : { opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={isFullscreen ? { opacity: 0, y: 50 } : { opacity: 0, y: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className={`
              relative flex flex-col bg-white overflow-hidden shadow-2xl z-10
              ${isFullscreen 
                ? 'w-full h-full' 
                : 'w-full h-full md:h-[85vh] md:max-w-[780px] md:rounded-xl md:mt-10'
              }
            `}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OverlayShell;
