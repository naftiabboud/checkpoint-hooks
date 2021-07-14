import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import "./App.css";
import StarRating from "./components/StarRating";

import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      posterURL:
        "https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg",

      rating: 3,
    },
    {
      title: "Gladiator",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",

      posterURL: "http://www.erreursdefilms.com/peplum/affiches/gladiato.jpg",
      rating: 4,
    },
    {
      title: "Joker",
      description:
        "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      posterURL:
        "https://images.squarespace-cdn.com/content/v1/56a027275a56686ee6b4b0e7/1571249608791-V15413UO6IQKXF5Z2EW8/joker-movie-review.jpg?format=300w",
      rating: 5,
    },
    {
      title: "The Wolf Of Wall Street",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      posterURL:
        "https://i.pinimg.com/originals/3e/f1/ba/3ef1baaaceb5a95c4f57a7cb2393b39d.jpg",
      rating: 5,
    },
    {
      title: "Parasite",
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",

      posterURL:
        "https://images.moviesanywhere.com/76cd3a853ffede1f5983f090839cacc8/8ca75d25-0bc2-4584-9d4c-3a381232c870.jpg?h=375&resize=fit&w=250",
      rating: 5,
    },
    {
      title: "Le Parrain",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",

      posterURL:
        "https://4.bp.blogspot.com/-s7zsMihk1t8/VuqyWR3Gj1I/AAAAAAAAAuo/-TNvam3nBQk63nnxIkzIKcQmUeziRu1jA/s320/Le%2BParrain.jpg",
      rating: 5,
    },
  ]);
  const [searchValue, setsearchValue] = useState("");
  const [rating, setRate] = useState(1);
  const handleAdd = (add) => {
    setMovies([...movies, add]);
  };
  return (
    <div className="App">
      <Navbar sticky="top"  bg="primary" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Movies</Nav.Link>
        </Nav>
        <Form inline onSubmit={(e) => e.preventDefault()} >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setsearchValue(e.target.value)} />
          <Button variant="outline-light">Search</Button>
        </Form>
        <div className="filter">
        <p> Filter By Rating: </p>
        <StarRating setRate={setRate} /> <br />
        <br />
      </div>
      
      <AddMovie Add={AddMovie} handleAdd={handleAdd}/>
      <MovieList movies={movies} searchValue={searchValue} rating={rating} />
      </Navbar>
    </div>
  );
}

export default App;
