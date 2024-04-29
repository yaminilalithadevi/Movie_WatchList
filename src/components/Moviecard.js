import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { useMyContext } from "../context/Provider";
import { useState ,useEffect} from "react";
import SignUp from "./SignUp";

const MovieCard = ({ movie, index }) => {
  const { addWatchList, user, list, removeFromWatchList ,getWatchList } = useMyContext();
 
  
  const [showModal, setShowModal] = useState(false);

  const isMarked = list.some((item) => item.imdbID === movie.imdbID );


  const handleWatchList = (movie) => {
    if (isMarked) {
      removeFromWatchList(index);
    } else {
      if (user) {
        addWatchList(movie);
      } else {
        setShowModal(!showModal);
      }
    }
  };

 
  useEffect(() => {
    getWatchList();
  }, [user]);



  return (
    <div className="col-md-3 mb-4">
      <div
        className="card h-100 position-relative image-container"
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
      >
        <button
          onClick={() => handleWatchList(movie)}

          className="button-bookmark"
        >
          <BsBookmarkPlusFill style={{ fontSize: "34px", color: isMarked ? "#FF204E" : "lightgrey"}} />
        </button>
        <img
          width={170}
          height={300}
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/100"
          }
          className="card-img-top"
          alt={movie.Title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">({movie.Year})</p>
          <p>
          { isMarked &&
          
          
          <div className="position-absolute align-items-center bottom-0 start-0 end-0 ">
                  <button type="button" className="btn btn-primary  w-10" style={{ backgroundColor: '#FF204E', border: '#FF204E' }} >Added To WatchList</button>
                </div>
          }
          </p>
        </div>
      </div>
        <SignUp showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default MovieCard;
