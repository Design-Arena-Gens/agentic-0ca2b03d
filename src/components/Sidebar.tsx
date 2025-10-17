'use client';

import React, { useState } from 'react';

interface Page {
  id: number;
  title: string;
}

const Sidebar = () => {
  const [pages, setPages] = useState<Page[]>([
    { id: 1, title: 'Page 1' },
    { id: 2, title: 'Page 2' },
  ]);

  const addPage = () => {
    const newPage = {
      id: pages.length + 1,
      title: `Page ${pages.length + 1}`,
    };
    setPages([...pages, newPage]);
  };

  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Pages</h2>
        <button onClick={addPage} className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded">
          +
        </button>
      </div>
      <ul>
        {pages.map((page) => (
          <li key={page.id} className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white">
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
