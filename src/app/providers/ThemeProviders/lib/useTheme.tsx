import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem('LOCAL_STORAGE_THEME_KEY', newTheme);
    }

    return { theme, toggleTheme };
}
