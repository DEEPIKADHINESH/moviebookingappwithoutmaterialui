import React,{Component} from "react";
import "./Home.css"
import Header from "../header/Header";
import moviesData from "../../moviesData";
import { Link } from "react-router-dom";
import Details from "../../screens/details/Details"
import genres from "../../genres";
import artists from "../../artists";
import ReactDOM from "react-dom";
class Home extends Component{
  state={
      movieName:"",
      filterMovie:[],  
      genres:[],
      artists:[]
  }
movieClickHandler=(movieId)=>{
 ReactDOM.render(<Details movieId={movieId}/>,document.getElementById("root"))
     
}
movieNameChangeHandler=(event)=>{
  this.setState({movieName:event.target.value})
}
genreSelectHandler=(event)=>{
  this.setState({genres:event.target.value})
}
artistSelectHandler=(event)=>{
  this.setState({artists:event.target.value})
}

  render(){
    
   return(
        <div>
        <span ><Header/> </span>
        <div className="upcoming-movies">Upcoming  Movies</div>
        <div className="moviepixel">
          {moviesData.map(movie=>(<div key={movie.id}><img className="imagepixel"src ={movie.poster_url} alt={movie.title}></img> 
        {movie.title}</div>)
        )}
        </div>
        <div className="split-page">
        <div className="flex-container">
        {moviesData.slice(2,6).map(movie=>(<div key={movie.id}> 
          {/* <Link to={`/details/${movie._id}`}> </Link> */}
          <img className="released-pixel" src={movie.poster_url} alt={movie.title} 
          onClick={()=>this.movieClickHandler(movie.id)}>
          
          </img>
         
        </div>))}
        {/* <Details    /> */}
        </div>
        <div className="left">
        <form className="filter">
        <h2 style={{color:"lightblue"}}>Find Movies By:</h2>
        <input typeof="text" placeholder="Movie Name" 
        onChange={this.movieNameChangeHandler}></input><br/>
       <select value={this.state.genres} 
       onChange={this.genreSelectHandler}>
        <option>Select one genre</option>
        {genres.map((genre)=><option key={genre.id}
        onChange={this.genreSelectHandler}>{genre.name}</option>)}
       </select><br/>
       <select value={this.state.artists}
       onChange={this.artistSelectHandler}>
        <option>Select artists</option>
        {artists.map((artist)=><option key={artist.id}>{artist.first_name} {artist.last_name}</option>)}
       </select>
        <div><h5>Release Date Start</h5>
        <input type="date" placeholder="dd-mm-yyyy"></input></div>
        <div><h5>Release Date End</h5>
        <input type="date" placeholder="dd-mm-yyyy"></input></div><br/>
        <button type="button" className="btn btn-primary">Apply</button>
        </form>
        </div>
        </div>
        </div> 
        )
    }
}
export default Home;
