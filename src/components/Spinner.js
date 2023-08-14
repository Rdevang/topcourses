import { CirclesWithBar } from "react-loader-spinner";


function Spinner() {
  return (
    <div className="spinner flex flex-col items-center space-y-2">
          <CirclesWithBar
        className="circle"
        height="200"
        width="200"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
      <p className="text-bgDark text-lg font-semibold">Loading....</p>
    </div>
  );
}
export default Spinner