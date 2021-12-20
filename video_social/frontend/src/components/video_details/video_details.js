import React,{useState,useEffect} from "react";
import axios from "axios";

import './video_details.css'




function VideoDetail({match}){


    const [video,setVideo]=useState([])
    
    const id = match.params.id

    useEffect(() => {
        axios({
            method:"GET",
            url:`http://127.0.0.1:8000/api/videos/${id}/`
        }).then(response=>{
            setVideo(response.data)
            
        })
        
    }, [id])

    return(
       <div className="content">
           <div className="conteiner__category">
            <div className="video">
              <video width="1200" height="800" controls="controls">
                <source src={video.video} type="video/mp4"/>
              </video>
            </div>
            <div className="video_content">
                <div className="video__tittle">
                    {video.name}
                </div>
                <div className="video__date">
                    {video.published}
                </div>

                <div className="video__user">
                    <img className="user__avatar" src='#' alt=''/>
                    <div className="user__name">{video.author}</div>

                </div>
                <div className="video__description">
                    {video.description}
                </div>
            </div>

            
           </div>
       </div>
    )
}

export default VideoDetail;