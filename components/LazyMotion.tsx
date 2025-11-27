import React, { useEffect, useState } from 'react';

// Lightweight wrappers that lazy-load framer-motion only when rendered
export const LazyAnimatePresence: React.FC<{ children: React.ReactNode; mode?: 'sync' | 'popLayout' | 'wait' }>
  = ({ children, mode = 'wait' }) => {
    const [{ AnimatePresence }, setLib] = useState<any>({});
    useEffect(() => {
      let mounted = true;
      import('framer-motion').then(mod => {
        if (mounted) setLib({ AnimatePresence: mod.AnimatePresence });
      });
      return () => { mounted = false; };
    }, []);
    if (!AnimatePresence) return <>{children}</>;
    return <AnimatePresence mode={mode}>{children}</AnimatePresence>;
};

export const LazyMotionDiv: React.FC<any> = ({ children, ...rest }) => {
  const [{ motion }, setLib] = useState<any>({});
  useEffect(() => {
    let mounted = true;
    import('framer-motion').then(mod => {
      if (mounted) setLib({ motion: mod.motion });
    });
    return () => { mounted = false; };
  }, []);
  if (!motion) return <div {...rest}>{children}</div>;
  const MDiv = motion.div;
  return <MDiv {...rest}>{children}</MDiv>;
};
