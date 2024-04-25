import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Card from "../card/card";
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { database } from "../../Firebase"
import Signout from "../Signout/Signout";

const Navbar = () => {
  const [search,setsearch]=useState("");
  const [move,setmove]=useState([]);
 
  
  const fetchSearch=async()=>{
    const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`)
    const response=await data.json()
    setmove(response.results)
    

  }
  const handlesubmit=(e)=>{
    
    e.preventDefault();

    fetchSearch();
    
  }

  

  return (
    <>
   
    <div className="header">
      <div className="headerLeft">
      <img
            className="header__icon"
            src="https://c4.wallpaperflare.com/wallpaper/625/303/671/fiction-logo-black-background-comic-wallpaper-thumb.jpg"
            alt=""
       />
        <Link to={"/home"}>
          <span>Home</span>
        </Link>
        <Link to={"/movies/popular"}>
          <span>Movies</span>
        </Link>
        <Link to={"/movies/top_rated"}>
          <span>TV Series</span>
        </Link>
        <Link to={"/movies/upcoming"}>
          <span>MovieLibray</span>
        </Link>
        
        {/* <Link to={"/"}>
          <span>Login</span>
        </Link> */}
        
        <form onSubmit={(e)=>{handlesubmit(e)}}>
          <input style={{margin:"30px 90px",padding:"5px 50px"}} type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}} placeholder="Search Here"/>
          <button style={{padding:"10px 10px",  border:"10px" , backgroundColor:"orange", cursor:"pointer"}}>Search</button>
        </form>
        
        
        
     
      </div>

      <Signout/>
      
    </div>
    {move.map((movie) => (
      <Card movie={movie} key={movie.id} />
    ))}
     
    

     </>
  );
};

export default Navbar;
