import React from "react";

function useLocalStorage(itemName, initialValue){

  const [item,setItem] = React.useState(initialValue);
  const [loading,setLoading] = React.useState(true);
  const [error,setError] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(() => {
      try{
        const localStorageTodos = localStorage.getItem(itemName);
        let parsedItem;
  
        if(!localStorageTodos){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem=initialValue;
        }else{
            parsedItem = JSON.parse(localStorageTodos);
            setItem(parsedItem);
        }
  
        setLoading(false);
      }catch(error){
        setLoading(false);
        setError(true);
      }
    },1000);
  },[]);

  

  const saveItem = (newItem) =>{
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
  };

  return {
    item, 
    saveItem, 
    loading, 
    error};
}

export {useLocalStorage};

// localStorage.removeItem('Todos_V1');
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('Todos_V1',JSON.stringify(defaultTodos));