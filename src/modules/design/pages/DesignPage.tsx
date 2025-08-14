import { Shovel } from 'lucide-react';

export function DesignPage() {
  const a: number = 'abc';
  let b: string = 'abc';
  b = a;
  console.log(b);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] gap-4">
        <div className="text-2xl font-semibold text-gray-700">
          En construcción
        </div>
        <Shovel className="w-12 h-12 text-gray-500" />
      </div>
    </div>
  );
}
