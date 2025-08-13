import { Shovel } from "lucide-react";

export const Dashboard = () => {
  return (
    <main className="flex-1 p-0 bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] gap-4">
        <div className="text-2xl font-semibold text-gray-700">
          En construcción
        </div>
        <Shovel className="w-12 h-12 text-gray-500" />
      </div>
    </main>
  );
};
