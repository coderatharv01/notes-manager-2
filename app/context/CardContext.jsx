"use client"
import {createContext , useContext , useState } from "react";
const CardContext = createContext();

export const CardProvider = ({children}) => {
  const [cards , setCards] = useState([]);

  function addCard(title, description){
    setCards((prevCards) => [
        ...prevCards , 
        { 
            id: Date.now(),
            title,
            description
        },
    ]);
  }
  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  )
}


export function useCards(){
    return useContext(CardContext);
}