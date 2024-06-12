import { useEffect } from "react"
import Container from "./Container"

const Main = () => {

  return (
    <div>
        <div>
            <input type="text" placeholder='Search for a country...' />
            <select name=""id="">
                <option value="">Filter by Region</option>
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value="">Oceania</option>
            </select>
        </div>
        <Container/>
    </div>
  )
}

export default Main