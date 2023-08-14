import React from "react";

export default function filter(props) {
  let data = props.data;
  let category = props.category;
    let setcategory = props.setcategory;
  const filterhandler = (title) => {
    setcategory(title);
  };
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto py-4 justify-center">
      {data.map((item, index) => {
        return (
          <button
            className={`text-lg px-2 py-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
           ${
             category === item.title
               ? "bg-opacity-60 border-white"
               : "bg-opacity-40 border-transparent"
           }          
            `}
            key={index}
            onClick={() => filterhandler(item.title)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
}
