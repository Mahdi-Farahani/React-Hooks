import { useState, useRef, useEffect } from "react";
 
function useVisible(initialIsVisible) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef(null);
 
  const handleClickOutside = (e) => {
    if (ref?.current && !ref?.current?.contains(e.target)) {
      setIsVisible(false);
    }
  };
 
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
 
  return { ref, isVisible, setIsVisible };
}
 
export default useVisible;
