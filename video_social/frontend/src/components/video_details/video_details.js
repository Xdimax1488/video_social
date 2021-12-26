import React,{useState,useEffect} from "react";
import axios from "axios";

import './video_details.css'




function VideoDetail({match}){


    const [video,setVideo]=useState([])
    const [comment,setComment]=useState([])
    
    const id = match.params.id

    useEffect(() => {
        axios({
            method:"GET",
            url:`http://127.0.0.1:8000/api/videos/${id}/`
        }).then(response=>{
            setVideo(response.data)
            setComment(response.data.comments)
            
            
        })
        
    }, [id])
    const caunter = comment.length
    return(
       <div className="content">
           <div className="conteiner__category">
            <div className="video">
              <video width="1200" height="800" controls="controls" poster={video.preview}>
                <source src={video.video} type="video/mp4"/>
              </video>
            </div>
            <div className="video__detail-content">
                <div className="video__detail-tittle">
                    {video.name}
                </div>
                <div className="video__detail-date">
                    {video.published}
                </div>
            

                <div className="video__detail-user">
                    <img className="user__avatar" src='https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg' alt=''/>
                    <div className="user__detail-name">{video.author}</div>

                </div>
                <div className="video__detail-description">
                    {video.description}
                </div>
                <div className="video__comments">
                    <h1 className="tittle">{caunter} коментариев : </h1>
                    {comment.map(com=>(
                        <div className="commets__details">
                            <div className="comments__header">
                                <div className="comments__user">
                                  {com.name}
                                </div>
                                <div className="comments__date">
                                   {com.created}
                                </div>
                            </div>
                            <div className="comments__body">
                              {com.body}
                            </div>
                        
                        
                        

                        </div>


                    ))}

                </div>

            </div>

            
           </div>
       </div>
    )
}

export default VideoDetail;