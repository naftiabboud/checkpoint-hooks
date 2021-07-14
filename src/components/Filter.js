import MovieCard from "./MovieCard";
const Filter=({ movies, searchValue, rating }) =>{
    return (
        <div>
          {movies
            .filter(
              (el) =>
                el.title.toUpperCase().includes(searchValue.toUpperCase()) &&
                el.rating >= rating
            )
            .map((el, i) => (
              <MovieCard movies={el} />
            ))}
        </div>
      );
    }
    
    
   
export default Filter;
