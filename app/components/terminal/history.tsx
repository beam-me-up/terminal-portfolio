interface HistoryProps {
    items: string[];
  }
  
  export function History({ items }: HistoryProps) {
    return (
      <div className="mb-4 space-y-2 break-words">
        {items.map((item, index) => (
          <div key={index} className="whitespace-pre-wrap font-mono text-theme">
            {item}
          </div>
        ))}
      </div>
    );
  }
  