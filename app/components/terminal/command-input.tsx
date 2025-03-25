import { useEffect, useRef, KeyboardEvent } from "react";

interface CommandInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  suggestions: string[];
}

export function CommandInput({
  value,
  onChange,
  onSubmit,
  suggestions,
}: CommandInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(value);
    } else if (e.key === "Tab" && suggestions.length > 0) {
      e.preventDefault();
      onChange(suggestions[0]);
    }
  };

  return (
    <div className="relative flex-1">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full bg-transparent text-green-500 outline-none"
        spellCheck={false}
        autoComplete="off"
      />
      {suggestions.length > 0 && (
        <div className="absolute left-0 top-full mt-1 rounded border border-green-500 bg-black p-2">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              className="cursor-pointer px-2 py-1 hover:bg-green-900"
              onClick={() => onChange(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
