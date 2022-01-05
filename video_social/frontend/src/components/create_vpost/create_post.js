import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './create_post.css'

function CreatePost() {
    

    function handleFormSubmit  (event){
        event.preventDefault();
        const name =event.target.elements.name.value;
        const description =event.target.elements.description.value;
        const video =event.target.elements.video.value;
        const preview =event.target.elements.preview.value;
        
        console.log(name,description,video,preview)
        axios({
            method:'POST',
            url:"http://127.0.0.1:8000/api/videos/",
            date:{
                name:name,
                description:description,
                video:video,
                preview:preview,
                category:"2",
                author: "1"
                
            }
        })
    
    

        

    }

    return (
        <div className="content">
          <div className="conteiner__category">
            <form className="create__form" onSubmit={(event)=>handleFormSubmit(event)}>
                <ul>
                    <li>
                       <label for= "name">Название:</label>
                       <input className="input__text" type="text" id="name" name="name"/>
                    </li>
                    <li>
                       <label for= "description">Описание:</label>
                       <input className="input__text" type="text" id="description" name="description"/>
                    </li>
                    <li>
                       <label for= "video">Видео:</label>
                       <input type="file" id="video" name="video"/>
                    </li>
                    <li>
                       <label for= "preview">Картинка на превю:</label>
                       <input type="file" id="preview" name="preview"/>
                    </li>
                </ul>
                <button className='create__botton' type='primery' htmlType="submit">
                    <h1>Добавить </h1>
                </button>
            </form>
            </div>
        </div>
    )
}

export default CreatePost
