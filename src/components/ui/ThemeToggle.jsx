import { useEffect, useState } from 'react';

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const systemTheme = getSystemTheme();
    const savedTheme = localStorage.getItem('theme');
    const hasUserOverride = savedTheme === 'dark';
    const activeTheme = hasUserOverride ? 'dark' : systemTheme;
    
    console.log('=== Theme Detection ===');
    console.log('System Theme:', systemTheme);
    console.log('Saved Preference:', savedTheme || 'None');
    console.log('Active Theme:', activeTheme, hasUserOverride ? '(user override)' : '(system fallback)');
    console.log('=====================');
    
    if (activeTheme === 'dark') {
      setIsDark(true);
      applyTheme('dark');
    } else {
      setIsDark(false);
      applyTheme('light');
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        console.log('System theme changed to:', newTheme);
        applyTheme(newTheme);
        setIsDark(newTheme === 'dark');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
    
    applyTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <label className="switch" title="Toggle Dark Mode">
      <input type="checkbox" checked={isDark} onChange={toggleTheme} />
      <span className="slider"></span>
      <span className="clouds_stars"></span>
    </label>
  );
};

export default ThemeToggle;
