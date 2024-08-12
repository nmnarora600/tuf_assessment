import { useEffect, useState } from "react";
import { AlertFun } from "./components/alert";
import ChartComponent from "./components/Chart";
import Main from "./components/main";
import Header from "./components/Header";

function App() {
  const [chartKey, setChartKey] = useState<number>(1); // Use number type for the key
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    title: "",
    description: "",
    bludesc: "",
    showBanner: true,
    closetime: 10,
    weblink:"",
  });
  const [banner, setBanner] = useState(true);

  const [skip, setSkip] = useState(data.closetime);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkip((prevSkip) => {
        if (prevSkip > 1) {
          return prevSkip - 1;
        } else {
          setBanner(false);
          clearInterval(interval); // Stop the interval when skip reaches 0
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [data]);

  useEffect(() => {
    if (data.showBanner == false) {
      setBanner(false);
    }
    setSkip(data.closetime);
  }, [data.showBanner]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3003/api/fetch");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
      
        setData(result[0]);
      } catch (error) {
        setData({
          title: "takeUForward",
          description: "Focus on time complexity",
          bludesc: "AI handle the intricacy.",
          showBanner: true,
          closetime: 10,
          weblink:"https://www.namanarora.in"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      let y = localStorage.getItem("vite-ui-theme");
      // Update the key to force re-render if necessary
      if (y == "dark") setChartKey(1);
      else if (y == "light") setChartKey(2);
      else setChartKey(3); // Use Date.now() to generate a new key
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[100vh]">
      <Header data={data}/>
      <div className="relative ">
        {
          <div
            className={`absolute z-30 w-full ${
              data.showBanner ? "" : "hidden"
            } ${banner === true ? "block" : "hidden"}`}
          >
            <Main data={data} loading={loading} skip={skip} />
          </div>
        }
        <div
          className={`text-center font-semibold pt-10 text-4xl content ${
            banner ? "hidden" : "banner-show"
          }`}
        >
          Some Sample Data
        </div>
        <div className={`${banner ? "hidden" : ""} flex md:flex-row flex-col`}>
          <div className="md:w-[60vw] space-y-5 py-12 px-10">
            <AlertFun
              heading={"Task 1"}
              subHeading={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut exercitation."
              }
            />
            <AlertFun
              heading={"Task 2"}
              subHeading={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut exercitation."
              }
            />
            <AlertFun
              heading={"Task 3"}
              subHeading={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut exercitation."
              }
            />
          </div>
          <div className="md:w-[40vw] h-32 py-16 px-10 mb-10">
            <ChartComponent key={chartKey} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
