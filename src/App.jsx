import React, { useState, useCallback } from 'react';
import { FilterIcon } from '@heroicons/react/solid';
import links from './linklist.js';

const categories = ["word", "geography", "media", "math", "rude", "funny"];
const colors = ["bg-emerald-700", "bg-red-700", "bg-sky-600", "bg-yellow-600", "bg-orange-600", "bg-purple-600"];
const colorMap = Object.fromEntries(categories.map((c, i) => [c, colors[i]]));

export default function App() {
  const [category, setCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filterCategories = useCallback((link) => {
    console.log({link})
    if (category === 'all'){
      return true;
    }
    return link?.categories.includes(category);
  }, [category]);

  return (
    <div className="p-5 max-w-md mx-auto">
      <Title />
      <FilterIcon
        className={`${showFilters ? 'text-white' : 'text-gray-600'} h-5 w-5 flex-shrink-0 absolute top-0 right-0 m-3`}
        title="show/hide filters"
        onClick={() => setShowFilters(!showFilters)}
      />
      <div className="my-2" title="filters">
        {showFilters && (
          <div className="flex flex-wrap gap-2 justify-center">
            <CategoryButton
              name={'all'}
              color="bg-gray-400"
              onClick={() => setCategory('all')}
            />
            {categories.map((c, i) => (
              <CategoryButton
                key={i}
                name={c}
                color={colors[i]}
                onClick={() => setCategory(c)}
              />
            ))}
          </div>
        )}
      </div>
      <div>
        <ul>
          {links.filter(filterCategories).map(ListItem)}
        </ul>
      </div>
    </div>
  );
}

function CategoryButton({ name, color, onClick }){
  return (
    <button
      className={`${color} rounded-md text-white text-sm font-bold px-2 py-1`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

function Badge({ name, color }){
  return (
    <span
      className={`${color} rounded-md text-white text-xs font-bold px-1 py-1`}
    >
      {name}
    </span>
  );
}

function Title() {
  return (
    <div className="text-center">
      <h1 className="inline mr-3">xdle</h1>
      <h3 className="inline text-gray-500">a directory of wordle clones</h3>
    </div>
  );
}

function ListItem({ title, url, description, categories: categoryList }) {
  if (!title || !url) return null;
  return (
    <li className="my-5 rounded-md border border-gray-900 bg-gray-700 hover:shadow-lg">
      <a href={url} className="p-2 block">
        <div className="flex justify-between">
          <div className="font-semibold">{title} </div>
          {categoryList.map((c, i) => (
            <Badge
              name={c}
              color={colorMap[c]}
              key={i}
            />
          ))}
        </div>
        <div className="text-gray-400">
          {description}
        </div>
      </a>
    </li>
  );
}