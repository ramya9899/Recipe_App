import React, { useEffect, useState } from "react";
import "./food.css";
import { IoCloseSharp } from "react-icons/io5";

export default function Food()
{
    const [state,setstate]=useState([]);
    const [food,setfood]=useState([]);

    const [modelData, setModelData] = useState({}); //for storing temporary data
    
    const open=(item1)=>{
        // item1.preventDefault(); // why using form tag no need 
        console.log(item1);
        setModelData({...item1});  // setting temporary data in state
        document.getElementById("ing").style.visibility="visible";
    }
    const close=() => {
            document.getElementById("ing").style.visibility="hidden";
    }

    const searchBox=document.getElementById("searchbox");
    
    useEffect(()=>{
        const apidata=fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${state}`)
        const apicall=apidata.then(res=>res.json());
        apicall.then((item)=>{
            console.log(item.meals);
            setfood(item.meals);
        })
    },[state])

    
    const change= (data) =>{
        data.preventDefault();
        const inputvalue=searchBox.value.trim();
        setstate(inputvalue);
    }
    return(
        <>
            <div className="navbar">
                <h1 className="logo">Recipe App</h1>
                <form onClick={(e)=> change(e)}>
                    <input type="text" placeholder="Search for recipes...." id="searchbox"/>
                    <button type="button" id="searchbtn">Search</button>
                </form>
            </div>
            <div className="home">
                <h1>Search your favourite Recipe.....</h1><br/>
                <div className="recipe">
                    {food ? food?.map((value)=>{
                        return(
                        <div className="container">
                             <div className="box" id="main">
                                    <img className="image" src={value.strMealThumb} alt="img"/>
                                    <h5>{value.strMeal}</h5>
                                    <p>{value.strArea} Dish</p>
                                    <p>Belongs to {value.strCategory}</p>
                                        <button className="submit"  onClick={()=>open(value)}>View Recipe</button>
                                </div> 
                                    <div className="box1" id="ing">
                                    <button className="close" id="close"onClick={close}><IoCloseSharp /></button>
                                    <h1><u>{modelData.strMeal}</u></h1><br/>
                                    <h3>Ingredents:</h3>
                                    <ul>
                                        <p>{modelData.strMeasure1}   {modelData.strIngredient1}</p>
                                        <p>{modelData.strMeasure2} {modelData.strIngredient2}</p>
                                        <p>{modelData.strMeasure3} {modelData.strIngredient3}</p>
                                        <p>{modelData.strMeasure4} {modelData.strIngredient4}</p>
                                        <p>{modelData.strMeasure5} {modelData.strIngredient5}</p>
                                        <p>{modelData.strMeasure6} {modelData.strIngredient6}</p>
                                        <p>{modelData.strMeasure7} {modelData.strIngredient7}</p>
                                        <p>{modelData.strMeasure8} {modelData.strIngredient8}</p>
                                        <p>{modelData.strMeasure9} {modelData.strIngredient9}</p>
                                        <p>{modelData.strMeasure10} {modelData.strIngredient10}</p>
                                        <p>{modelData.strMeasure11} {modelData.strIngredient11}</p>
                                        <p>{modelData.strMeasure12} {modelData.strIngredient12}</p>
                                        <p>{modelData.strMeasure13} {modelData.strIngredient13}</p>
                                        <p>{modelData.strMeasure14} {modelData.strIngredient14}</p>
                                        <p>{modelData.strMeasure15} {modelData.strIngredient15}</p>
                                        <p>{modelData.strMeasure16} {modelData.strIngredient16}</p>
                                        <p>{modelData.strMeasure17} {modelData.strIngredient17}</p>
                                        <p>{modelData.strMeasure18} {modelData.strIngredient18}</p>
                                        <p>{modelData.strMeasure19} {modelData.strIngredient19}</p>
                                        <p>{modelData.strMeasure20} {modelData.strIngredient20}</p> 
                                    </ul>
                                    <button className="submit"> <a href={modelData.strYoutube}>Watch Video</a></button>
                                </div> 
                            </div>
                        )}) : <h1>Ｎｏ 😥 Ｒｅｓｕｌｔ Ｉｓ Ｆｏｕｎｄ ！ </h1> }
                     
                </div>
            </div>
        </>
    )
}