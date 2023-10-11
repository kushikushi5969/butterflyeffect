import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const FadeInTextInfo = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const props = useSpring({
    opacity: isInView ? 1 : 0,
  });

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <animated.p style={props} ref={ref} className="p-information__text c-fade__in">
      {children}
    </animated.p>
  );
};

export default FadeInTextInfo;
