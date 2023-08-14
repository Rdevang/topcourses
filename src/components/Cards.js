import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let category = props.category;
  let courses = props.courses;

  const [likedcourses, setlikedcourses] = useState([]);

  const getcourses = () => {
  
    if (category === "All") {
      let allcourses = [];
      Object.values(courses).forEach((coursecategory) => {
        coursecategory.forEach((course) => {
          allcourses.push(course);
        });
      });

      return allcourses;
    } else {
      if (Array.isArray(courses[category])) {
        return courses[category];
      } else {
        return [];
      }
    }
  };
  
  
// len = 0;
 if (courses === null) {
   return (
     <div className="flex flex-wrap justify-center gap-4 mb-4">
       <h1 className="text-center text-gray-400 text-5xl">No Data Found...</h1>
     </div>
   );
 } else if (courses.length === 0) {
   return (
     <div className="flex flex-wrap justify-center gap-4 mb-4">
       <h1 className="text-center text-gray-400 text-5xl">No Data Found...</h1>
     </div>
   );
 }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getcourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedcourses={likedcourses}
            setlikedcourses={setlikedcourses}
          />
        );
      })}
    </div>
  );
}
export default Cards;
