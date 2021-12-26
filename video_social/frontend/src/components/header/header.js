import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


import './header.css'

function Header(){
  const [author,setAuthor]=useState([])
  const [id,setId] = useState([])
    
    
    

    useEffect(() => {
        axios({
            method:"GET",
            url:"http://127.0.0.1:8000/api/author/"
        }).then(response=>{
            setAuthor(response.data)
            
            
            
        })
        
    }, [])
    console.log(author)
    return(
        <div className="header">
      <div className="conteiner">
        <div className="header__inner">
          <div className="logo">
            <a href="/">My<span>Tube</span></a>
          </div>
          
          <div className="header__nav">
            
            {author.map(aut=>(
              
            <ul>
              <li>
                
                  <span>{aut.first_name}</span>
                  <a href="{% url 'account_logout' %}" class="nav__link">Выход</a>
                
                  <a className="nav__link" href="{% url 'account_login' %}">Вход</a>
                  <a className="nav__link" href="{% url 'account_signup' %}">Регестрация</a>
                 
              </li>
              <li className="nav__link-img">
              <Link to={{pathname:`/author/${aut.id}`,fromDashboard:false}}>
                  <img src={aut.avatar} alt=""></img>
                </Link>
              </li>
            </ul>
            ))}
          </div>

        </div>
      </div>
     
    </div>
    )
}

export default Header