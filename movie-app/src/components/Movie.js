import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >=8){
        return "blue"
    }else if (vote>=6){
        return "yellow"
    }else {
        return"red";
    }
}

const Movie=({title, poster_path, overview, vote_average})=>(
    // if we have the poster image we add the poster
    // path to the image url otherwise 
    // we just show this image
    <div className="movie">
        <img src={poster_path ? (IMG_API + poster_path) : 'https://unsplash.com/photos/CiUR8zISX60'} alt={title}/>
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={
                `tag ${setVoteClass(vote_average)}`
                }>
                    {vote_average}
            </span>
        </div>

        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
);
export default Movie;