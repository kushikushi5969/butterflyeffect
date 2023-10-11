import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const FadeInSnsList = ({ children }) => {
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
    <animated.li style={props} ref={ref} className="p-sns__lists__list c-fade__in">
      {children}
    </animated.li>
  );
};

export default FadeInSnsList;
