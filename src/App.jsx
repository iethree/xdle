import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';

export default function App() {
  return (
    <div>
      <h1 className="text-4xl text-blue-700">
        <CodeIcon className="inline-block mr-2 h-10" />
        Main Page
      </h1>
      <button className="px-3 py-1 border rounded-sm mx-2 hover:border-gray-400">button</button>
    </div>
  );
}