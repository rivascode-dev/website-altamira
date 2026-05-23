import { useEffect, useState, useRef, RefObject } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends Element = HTMLDivElement>({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: UseIntersectionObserverOptions = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    if (freezeOnceVisible && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        if (freezeOnceVisible && isElementIntersecting) {
          setIntersecting(true);
          observer.unobserve(element);
        } else {
          setIntersecting(isElementIntersecting);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

  return [ref, isIntersecting];
}
