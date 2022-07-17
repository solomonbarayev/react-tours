import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteTour = (id) => {
    setData(data.filter((tour) => tour.id !== id));
  };

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => getData(), []);

  const reloadTours = () => {
    setIsLoading(true);
    getData();
  };

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h2 className="title">
            {data.length === 0 ? "No Tours Left" : "Our Tours"}
          </h2>
          <div className="underline"></div>
        </div>
      )}

      <Tours tours={data} deleteTour={deleteTour} />
      {data.length === 0 && !isLoading && (
        <button className="btn" onClick={reloadTours}>
          Refresh
        </button>
      )}
    </main>
  );
}

export default App;
