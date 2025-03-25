import { useEffect } from 'react';

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

const THEMES = [
  { id: 'matrix', name: 'Matrix' },
  { id: 'cyberpunk', name: 'Cyberpunk' },
  { id: 'dracula', name: 'Dracula' },
  { id: 'solarized', name: 'Solarized' },
  { id: 'retro', name: 'Retro' }
];

export function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('terminal-theme') || 'matrix';
    onThemeChange(savedTheme);
  }, [onThemeChange]);

  const handleThemeChange = (theme: string) => {
    localStorage.setItem('terminal-theme', theme);
    onThemeChange(theme);
  };

  return (
    <div className="flex items-center space-x-2 mb-4 flex-wrap">
      <span className="text-sm">Theme:</span>
      <div className="flex space-x-2 flex-wrap gap-2">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            onClick={() => handleThemeChange(theme.id)}
            className={`px-2 py-1 rounded text-sm border border-theme hover-theme transition-colors ${
              currentTheme === theme.id ? 'bg-secondary' : ''
            }`}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}
