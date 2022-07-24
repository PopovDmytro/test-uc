import { useEffect } from 'react';

const useClickOutside = (ref, cb = () => {}) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, cb]);
};

export default useClickOutside;
