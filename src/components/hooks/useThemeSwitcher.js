import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme:dark)';
  const [mode, setMode] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userpref = window.localStorage.getItem('theme');

    const handleChange = () => {
      if (userpref) {
        let check = userpref === 'dark' ? "dark" : "light";
        setMode(check);
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
      else {
        let check = mediaQuery.matches ? 'dark' : 'light';
        setMode(check);
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    }
  }, [])




  





  return (
    <div>
      
    </div>
  )
}

export default useThemeSwitcher
