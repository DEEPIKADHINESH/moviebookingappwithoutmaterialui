import React,{Component} from "react";
import Header from "../../common/header/Header";
import "./Details.css" 
import {Link} from "react-router-dom";
import moviesData from "../../moviesData";
import Home from "../../common/home/Home";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
class Details extends Component{
    state={
        movie:{}
    }
    componentWillMount=()=>{
        let currentState=this.state.movie
        currentState.movie=moviesData.filter((mov)=>{
            return mov.id===this.props.movieId
        })[0]
        console.log(currentState)
        this.setState({movie:currentState})
    }
    // artistClickHandler=(url)=>{
    //    window.location=url
    // }
   
    
    render(){
        return(
            <div>
               <div className="topimage">
                <Header/>
               <button className="bookshow">BookShow</button></div>
              <h3 onClick={this.backToHome} style={{cursor:"pointer",color:"blue",textDecoration:"underline"}}>Back to Home</h3>
              <div className="flex-container">
                <div className="flex-container-left">
                  <img src={this.state.movie.movie.poster_url} alt={this.state.movie.title}></img>          
                </div>
                <div className="flex-container-middle">
               <div><h3>{this.state.movie.movie.title}</h3>
                <ul>
                <li><strong>Genres:</strong>{this.state.movie.movie.genres.join(",")}</li>
                <li><strong>Duration:</strong>{this.state.movie.movie.duration}</li>
                {/* <li>Release Date:{this.state.movie.movie.release_date} */}
               <li><strong>Release Date: </strong> {new Date(this.state.movie.movie.release_date).toDateString()}</li>
                <li><strong>Rating:</strong>{this.state.movie.movie.critics_rating}</li>
                <li><strong>Plot:</strong><a href={this.state.movie.movie.wiki_url} target="_blank">Wiki Link</a>{this.state.movie.movie.storyline}
                <YouTube
                videoId={this.state.movie.movie.trailer_url.split("?v=")[1]}
                // opts={this.state.movie.opts}
                // onReady={this.state.movie._onReady}
              />
                </li>
                </ul>
                </div>
                </div>
                <div className="flex-container-right"><strong>Rate this movie:</strong> 
                <div>
                    <strong>Artistis:</strong>{this.state.movie.movie.artists !=null &&
                  this.state.movie.movie.artists.map((artist)=>(
                   <ul>
                     <li onClick={() => this.artistClickHandler(artist.wiki_url)}>{artist.first_name+""+artist.last_name}</li>
                   </ul>
                  )
                   
                  )} </div>

                </div>
               </div>
            </div>
        )
    }
}
export default Details;