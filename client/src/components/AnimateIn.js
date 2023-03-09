import { useRef } from 'react';
import useElementOnScreen from './useElementOnScreen';

export default function AnimateIn({ children }) {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);

  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        transform: onScreen ? 'none' : 'translate(0, 2rem)',
        transition: '600ms ease-in-out',
      }}
    >
      {children}
    </div>
  );
}