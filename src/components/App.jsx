import React from "react";
import Heading from "./Heading";
import Cards from "./Cards";
function App() {
  return (
    <div>
      <Heading />
      <div className="flexi">
        <Cards
          title="Interstellar"
          image="https://i.etsystatic.com/23402008/r/il/b658b2/2327469308/il_570xN.2327469308_492n.jpg"
          year="2014"
        />
        <Cards
          title="Inception"
          image="https://www.themoviedb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg"
          year="2010"
        />
        <Cards
          title="Oppenheimer"
          image="https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900"
          year="2023"
        />
        <Cards
          title="The Dark Knight"
          image="https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg"
          year="2008"
        />
        <Cards
          title="The Batman"
          image="https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg"
          year="2022"
        />
      </div>
      <div className="flexi">
        <Cards
          title="The Prestige"
          image="https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg"
          year="2006"
        />
        <Cards
          title="Dunkirk"
          image="https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
          year="2017"
        />
        <Cards
          title="Man of Steel"
          image="https://imageio.forbes.com/specials-images/imageserve/644c78237b616e7308ad4710/Official-poster-for--Man-of-Steel-/960x0.jpg?height=1037&width=711&fit=bounds"
          year="2013"
        />  
        <Cards
          title="Goodfellas"
          image="https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
          year="1990"
        />
        <Cards
          title="The Departed"
          image="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162564_p_v8_ag.jpg"
          year="2006"
        />
      </div>
      
    </div>
  );
}
export default App;
