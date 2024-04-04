import {useState} from 'react' ;
import "./index.css"
import { IoSearchOutline } from "react-icons/io5";

interface ISearchInput{

}
const SearchInput : React.FC = ():JSX.Element =>{
    const [state,setState] = useState("");

    const handleClick = ()=>{
        console.log(state)
        setState("");
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setState(e.target.value)
    }

    return (

    <div className="searchInputWrapper">
        <input type="text" placeholder="جستجو کنید ..." className="searchInput" onChange={handleChange} value={state} />
        <button className="searchIcon" onClick={handleClick}><IoSearchOutline /></button>
    </div>

    )
}

export default SearchInput;