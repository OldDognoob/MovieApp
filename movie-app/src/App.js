import React from "react";
import Movie from "./components/Movie";

function App() {
  // any array of movies where we are going to loop over the movies
  const movies = ["1", "2", "3"];
  return <div>
   {movies.map(movie =>(
   <Movie/>
   ))}
   
    </div>;
}
export default App;
