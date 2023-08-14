import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "./card.css";
function Card({ course }) {
  const [like, setlike] = useState(false);
  const toastloader = () => {
    if (like) {
      setlike(false);
      toast.warning("Like Removed");
    } else {
      setlike(true);
      toast.success("Liked Successfully");
    }
  };
  return (
    <div className="w-[300px] bg-[#2A2B44] bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img className="w-[300px]" src={course?.image?.url} alt=""></img>
        <div>
          <button
            onClick={toastloader}
            className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-20px] grid place-items-center"
          >
            {like ? (
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
        <p className="mt-2 text-white">{course?.description}</p>
      </div>
    </div>
  );
}
export default Card;
