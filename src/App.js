import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { data } from "./data";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const api = "https://codehelp-apis.vercel.app/api/get-top-courses";

  const [category, setcategory] = useState(data[0].title);
  const [courses, setcourses] = useState(null);
  const [loading, setloading] = useState(true);
  const fetchdata = async () => {
    setloading(true);
    try {
      let response = await fetch(api);
      let output = await response.json();

      setcourses(output.data);
      console.log("setting the data");
      console.log(output.data);
    } catch (err) {
      toast.error("Something Went Wrong");
    }
    setloading(false);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#4A4E69]">
      <ScrollToTop smooth width="40" />
      <div>
        <Navbar />
 
      </div>
      <div className="bg-[#4A4E69]">
        <Filter data={data} category={category} setcategory={setcategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
