import { forwardRef, useEffect, useState } from "react";
import { Prompt } from "./prompt";
import { CommandInput } from "./command-input";
import { History } from "./history";

interface TerminalProps {
  history: string[];
  onCommand: (command: string) => void;
}

export const Terminal = forwardRef<HTMLDivElement, TerminalProps>(
  ({ history, onCommand }, ref) => {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(() => {
      const commands = [
        "help",
		"resume",
        "about",
        "experience",
        "education",
        "skills",
        "contact",
        "clear",
        "exit",
      ];

      if (input.length > 0) {
        const filtered = commands.filter((cmd) =>
          cmd.startsWith(input.toLowerCase())
        );
        setSuggestions(filtered);
      } else {
        setSuggestions([]);
      }
    }, [input]);

    const handleSubmit = (value: string) => {
      onCommand(value);
      setInput("");
      setSuggestions([]);
    };

    return (
      <div
        ref={ref}
        className="h-full overflow-auto rounded-lg border border-green-500 bg-black p-10"
        tabIndex={0}
      >
        <div className="mb-4 text-sm">
          <p>Welcome to Dhinesh Kumar's Terminal Portfolio</p>
          <p>Type 'help' to see available commands</p>
        </div>

        <History items={history} />

        <div className="flex items-start">
          <Prompt />
          <CommandInput
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
            suggestions={suggestions}
          />
        </div>
      </div>
    );
  }
);

Terminal.displayName = "Terminal";
