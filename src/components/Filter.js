import React from "react";

export default function filter({ data }) {
  const filterhandler = (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
    
  };
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto py-4 justify-center">
      {data.map((item, index) => {
        return (
          <button
           className= "text-white bg-gray-800 hover:bg focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            key={index}
            onClick={filterhandler}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
}
