import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './category_nav.css'


function CategoryNav (){
    const[categories,setCategories]= useState([])
    const[activeItem,setactiveItem]=useState(null)
   

    
    useEffect(()=>{
        axios({
            method:'GET',
            url:"http://127.0.0.1:8000/api/category"
        }).then(response=>{
            setCategories(response.data)
        })
    },[])

    
    return(
        <div className="category__inner">

         <Link className={activeItem === null ? 'btn_category activ' : 'btn_category'} to = {{pathname:`/`,fromDashboard:false}}  onClick={()=>setactiveItem(null)}>all</Link>

        {categories.map(cat=>(
             <Link className={activeItem === cat.id ? 'btn_category activ' : 'btn_category'} to = {{pathname:`/category/${cat.id}/`,fromDashboard:false}}  onClick={()=>setactiveItem(cat.id)}>{cat.name}</Link>
          ))}
        </div>
    )
}

export default CategoryNav