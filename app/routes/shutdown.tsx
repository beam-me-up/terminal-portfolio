import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";

export default function Shutdown() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-mono text-green-500">
      <div className="text-center">
        <p className="mb-4 animate-pulse text-2xl">System shutting down...</p>
        <p className="text-sm">Redirecting to home in 3 seconds</p>
      </div>
    </div>
  );
}
