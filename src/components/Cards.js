import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import Card from "./Card";
function Cards() {
  const api = "https://codehelp-apis.vercel.app/api/get-top-courses";
  console.log("error");
  const [courses, setcourses] = useState(null);
  const [loading, setloading] = useState(true);

const  fetchdata = async () => {
    setloading(true);
    try {
      let response = await fetch(api);
      let output = await response.json();

      setcourses(output.data);
      console.log("setting the data");
      console.log(output.data);   
    } catch (err) {
      toast.error("something went wrong");
    }
    setloading(false);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  console.log("error check");

  const getcourses = () => {
    let allcourses = [];
    Object.values(courses).forEach((coursecategory) => {
      coursecategory.forEach((course) => {
        allcourses.push(course);
      });
    });
    console.log();
    console.log(allcourses);
    return allcourses;
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {loading ? (
        <Spinner /> 
      ) : (
        getcourses().map((course) => {
          return <Card key={course.id} course={course} />;
        })
      )}
    </div>
  );
}
export default Cards;
