import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
 
    let setlikedcourses = props.setlikedcourses;
  let likedcourses = props.likedcourses;

  const clickhandler = () => {
    if (likedcourses.includes(course.id)) {
      setlikedcourses((prev) => prev.filter((id) => id !== course.id));

      toast.warning("Like Removed");
    } else {
      if (likedcourses.length === 0) {
        setlikedcourses([course.id]);
      } else {
        setlikedcourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }

    // if (like) {
    //   setlike(false);
    //   toast.warning("Like Removed");
    // } else {
    //   setlike(true);
    //   toast.success("Liked Successfully");
    // }
  };
 
  return (
    <>
    
      <div className="w-[300px] bg-[#2A2B44] bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img className="w-[300px]" src={course?.image?.url} alt=""></img>
        <div>
          <button
            onClick={clickhandler}
            className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-20px] grid place-items-center"
          >
            {likedcourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-3">
        <p className="text-white font-semibold text-lg leading-6">
          {course?.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? (`${course.description.substring(0,100)}...`)
        :(course.description)
        }
        </p>
      </div>
    </div></>
   
  );
}
export default Card;
