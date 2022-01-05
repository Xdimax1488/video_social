import React,{useState,useEffect} from "react";
import axios from "axios";
import dateFormat from 'dateformat'
import { Link } from "react-router-dom";

import './author.css'




function AuthorDetail({match}){


    const [author,setAuthor]=useState([])
    const [video,setVideo]=useState([])
    
    
    const id = match.params.id

    useEffect(() => {
        axios({
            method:"GET",
            url:`http://127.0.0.1:8000/api/author/${id}/`
        }).then(response=>{
            setAuthor(response.data)
            setVideo(response.data.video)
            
            
        })
        
    }, [id])
  

    return(
        
        
        
        
        <div className="author__content">
            <div className="conteiner__category">
                <div className="author__header">
                    <div className="author__avatar">
                        <img className="avatar__img" src = {author.avatar} alt="avatar"/>
                    </div>
                    <div className="author__name">
                        {author.user}
                    </div>
                </div>
                <div className="author__info">
                    <div className="first__name">
                    имя : {author.first_name}
                    </div>
                    <div className="second__name">
                    фамилия : {author.second_name}
                    </div>
                    <div className="email">
                    email пользывателя : {author.email}
                    </div>
                </div>

                <div className="add">
                <Link className="add__video" to={{pathname:`/create/`,fromDashboard:false}}>
                    Добавить видео
                </Link>
                    
                </div>
                <ul className="video__nav">
                        <li>видео</li>
                        <li>дата</li>
                        <li>категория</li>
                        <li>коментарии</li>
                    </ul>
                <div className="author__video">
                    
                    {video.map(vid=>(
                        
                        <div className="author__video--content">
                            <Link className="author__video--link" to={{pathname:`/videos/${vid.id}`,fromDashboard:false}}>
                            <div className="preview">
                                <img src = {vid.preview} alt="preview"/>
                            </div>
                            </Link>
                            
                              <div className="author__video--description">
                              <div className="author__video--hover">
                                <div className="name">
                                    
                                    {vid.name}
                                    
                                </div>
                                <div className="description">
                                    
                                    {vid.description}
                                    
                                </div>
                                
                                </div>
                                <div className="hover__up">
                                <Link className="author__video--hoverlink" to={{pathname:`/videos/${vid.id}`,fromDashboard:false}}>
                                    <img className="img__edit" src="https://www.pikpng.com/pngl/m/70-704176_edit-free-edit-icon-transparent-background-clipart.png" alt=""/>
                                    </Link>
                                    <Link className="author__video--hoverlink" to={{pathname:`/videos/${vid.id}`,fromDashboard:false}}>
                                    <img className="img__delete" src="https://mpng.subpng.com/20180711/wru/kisspng-computer-icons-clip-art-delete-image-icon-5b45dc96b07912.1758854315313051107228.jpg" alt=""/>
                                    </Link>
                                </div>

                              </div>
                            
                            <div className="published">
                                
                                {dateFormat(vid.published,"mmmm dS,yyyy")}
                            </div>
                            <div className="category">
                                {vid.category}
                            </div>
                            <div className="comment">
                                {vid.comments.length}
                            </div>
                            
                            
                                
                                 
                                     
            
                            
                        </div>
                    ))}

                </div>

            </div>
          

        </div>
    )}

export default AuthorDetail