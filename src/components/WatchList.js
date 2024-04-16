import React, { useEffect, useState } from 'react';
import { useMyContext } from '../context/Provider';

function WatchList() {
  const { list, user, getWatchList, removeFromWatchList,WatchListName,setWatchListName } = useMyContext(); 
  const username = user || "Guest";
  const [newName, setNewName] = useState(WatchListName || '');
  const [editing, setEditing] = useState(false);


  console.log("all lists",list)
  useEffect(() => {
    getWatchList();
  }, [user]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleInputBlur = () => {
    setEditing(false);
   
    setWatchListName(newName);
  };

  return (
    <div>
      <div style={{ margin: '20px' }}>
        {editing ? (
          <input
            style={{height: '50px', width: '200px',fontSize: '30px',paddingLeft: '10px',fontWeight: 'bolder',color: 'red'}}
            type="text"
            value={newName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        ) : (
          <h1  style={{ color: 'red', cursor: 'pointer' }}>
            {WatchListName}
            <svg
              onClick={handleEditClick}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
              style={{ marginLeft: '10px' }}
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </h1>
        )}
      </div>

      <div style={{ margin: "20px", marginBottom: "60px" }}>
        <h5>About This WatchList</h5>
        <p>This watch list contains all the movies and shows that <span><b>{username}</b></span> is interested in watching.</p>
      </div>

      <div className="row">
        {list.map((movie, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 position-relative" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
              <img
                width={170}
                height={300}
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/100'}
                className="card-img-top"
                alt={movie.Title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">({movie.Year})</p>

                <div className="position-absolute bottom-0 start-0 end-0 ">
                  <button type="button" className="btn btn-primary  w-100" style={{ backgroundColor: '#FF204E', border: '#FF204E' }} onClick={() => removeFromWatchList(index)}>Remove From WatchList</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchList;
