import React from "react";

function UseLocalStorage(elementName, initialValue) {
  const [element, setElement] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  React.useEffect(() =>{setTimeout(() => {
    try{
      // Obtén el elemento de localStorage o usa el valor inicial
      const getItemFromLocal = (key) => {
        const listItem = JSON.parse(localStorage.getItem(key));
        return listItem;
      };
      const localElement = getItemFromLocal(elementName) || initialValue;
      if(localElement !== element){
        setElement(localElement)
      }
      setLoading(false)
    } catch(error){
      setLoading(false)
      setError(true)
    }
  },2000)
  },[])
    // Guarda los elementos en el estado y localStorage
    function saveElements(list) {
      setElement(list);
      localStorage.setItem(elementName, JSON.stringify(list)); // Aquí debes usar elementName, no element
    }

    return {element, saveElements, error, setError, loading, setLoading };
  }
export { UseLocalStorage }