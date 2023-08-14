import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { data } from "./data";
function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <div>
        <Navbar />
      </div>
      <div className="bg-[#4A4E69]">
        <Filter data={data} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
         
          <Cards />
        </div>
      </div>
    </div>
  );
}
export default App;
