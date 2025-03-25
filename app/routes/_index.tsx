import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@remix-run/react";
import { Terminal } from "~/components/terminal/terminal";
import { CommandParser } from "~/components/terminal/command-parser";
import { Sidebar } from "~/components/terminal/sidebar";

export default function Index() {
  const [history, setHistory] = useState<string[]>([]);
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
    <div className="flex min-h-screen bg-black text-green-500">
      <Sidebar />
      <div className="flex-1 p-4">
        <Terminal
          ref={terminalRef}
          history={history}
          onCommand={handleCommand}
        />
      </div>
    </div>
  );
}
