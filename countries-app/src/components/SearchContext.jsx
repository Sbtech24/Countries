import { createContext,useState } from "react"

export const searchContext = createContext()

export const SearchContextProvider = ({children})=>{
        const [countryData, setCountryData] = useState(null);
        const [inputData, setInputData] = useState("");
        const [search, setSearch] = useState(false);

    const fetchData=async() =>{
      const res =await fetch(`https://restcountries.com/v3.1/name/${inputData}`)
      const data = await res.json()
      setCountryData(data)
      setSearch(true)
      setInputData("")
      console.log(countryData)
      
      }

  const handleClick=(e)=>{
    e.preventDefault()
    
  }
  return(
    <searchContext.Provider value={{countryData,inputData,search,fetchData,handleClick,setInputData,setSearch}}>
    {children}
    </searchContext.Provider>
  )

}

