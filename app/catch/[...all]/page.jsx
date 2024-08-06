'use client';
import React from 'react';

const All = ({params}) => {
  const arr = params.all;
    console.log(params, arr);
  return (
    <div>All Routes
      <ul className="grid gap-5">
        {arr && arr.length > 0 && arr.map((ele, i) => {
          return <li
           key={i}
           className="w-full p-5 bg-purple-500">{ele}</li>;
        })}
      </ul>
    </div>
  )
}

export default All