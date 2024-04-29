import React, { useContext, useEffect, useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [list, setList] = useState([]);
  const [WatchListName, setWatchListName] = useState("WatchList");

  useEffect(() => {
    
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      
      const storedWatchListName = localStorage.getItem("WatchListName");
      if (storedWatchListName) {
        setWatchListName(storedWatchListName);
      }
    }
    
    const storedList = localStorage.getItem(user);
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  const signIn = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("WatchListName"); 
    window.location.href = "/";
  };

  const addWatchList = (movie) => {
    if (!user) {
      return;
    }
    const updatedList = [...list, { ...movie, mark: true }];
    setList(updatedList);
    localStorage.setItem(user, JSON.stringify(updatedList));
  };

  const removeFromWatchList = (movieIndex) => {
    
    const updatedList = [...list];
    updatedList.splice(movieIndex, 1);
    setList(updatedList);
    localStorage.setItem(user, JSON.stringify(updatedList));
  };

  const getWatchList = () => {
    if (!user) { 
      return;
    }
    const storedList = localStorage.getItem(user);
    if (storedList) {
      setList(JSON.parse(storedList));
    } else {
      setList([]);
    }
  };

  
  const updateWatchListName = (newName) => {
    setWatchListName(newName);
    localStorage.setItem("WatchListName", newName);
  };

  const myValue = {
    user,
    list,
    WatchListName,
    setWatchListName: updateWatchListName, 
    signIn,
    signOut,
    addWatchList,
    getWatchList,
    removeFromWatchList 
  };

  return  <Context.Provider value={myValue}>{children}</Context.Provider>;
};

 
  export const useMyContext = () => {
     const context = useContext(Context);
        if (!context) {
           throw new Error("useMyContext must be used inside MyProvider");
         }
  return context;
 };

export default Provider;
