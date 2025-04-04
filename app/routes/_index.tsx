import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@remix-run/react";
import { Terminal } from "~/components/terminal/terminal";
import { CommandParser } from "~/components/terminal/command-parser";
import { Sidebar } from "~/components/terminal/sidebar";
import { ThemeSwitcher } from "~/components/terminal/theme-switcher";
import "../styles/themes.css";

export default function Index() {
  const [history, setHistory] = useState<string[]>([]);
  const [theme, setTheme] = useState("solarized");
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.focus();
    }
  }, []);

  const handleCommand = (command: string) => {
    setHistory((prev) => [...prev, command]);
    
    if (command === "exit") {
      setTimeout(() => navigate("/shutdown"), 1000);
      return;
    }

    if (command === "clear") {
      setHistory([]);
      return;
    }

    const output = CommandParser.execute(command);
    setHistory((prev) => [...prev, output]);
  };

  return (
    <div className={`flex min-h-screen terminal-theme theme-${theme}`}>
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen p-4 overflow-hidden">
        <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
        <div className="flex-1 min-h-0"> {/* This ensures proper scrolling */}
          <Terminal
            ref={terminalRef}
            history={history}
            onCommand={handleCommand}
          />
        </div>
      </main>
    </div>
  );
}
