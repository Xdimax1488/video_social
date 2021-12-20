import React from 'react';
import {Link} from 'react-router-dom'
import CategoryNav from '../category_nav/category_nav'


import './header.css'

function Header(){
    return(
        <div className="header">
      <div className="conteiner">
        <div className="header__inner">
          <div className="logo">
            <a href="/">My<span>Tube</span></a>
          </div>
          <div className="serch_form">
            <form action="">
              <input type="text" placeholder="serch"/>
              <button>9</button>
            </form>
          </div>
          <div className="header__nav">
            <ul>
              <li>
                
                  <span>dima</span>
                  <a href="{% url 'account_logout' %}" class="nav__link">Выход</a>
                
                  <a className="nav__link" href="{% url 'account_login' %}">Вход</a>
                  <a className="nav__link" href="{% url 'account_signup' %}">Регестрация</a>
                 
              </li>
              <li className="nav__link-img">
                <a href="#">
                  <img src="" alt=""></img>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="conteiner__category">
        
          <CategoryNav/>
         
        
      </div>
    </div>
    )
}

export default Header