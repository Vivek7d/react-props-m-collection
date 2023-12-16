import React from "react";
import Heading from "./Heading";
import Cards from "./Cards";
import movieInfo from "../movieInfo";
function App() {
  return (
    <div>
      <Heading />
      <div className="card-container"  >
        {movieInfo.map((movieInfo) => {
          return (
            <Cards 
              img={movieInfo.image}
              title={movieInfo.title}
              year={movieInfo.year}
            />
          );
        })}
      </div>
      
    </div>
  );
}
export default App;
