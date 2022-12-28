import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'


function Randomizer() {
    
    const[restaurants, setRestaurants] = useState([])
    const[number, setNumber] = useState(0)
    const[quotes,setQuotes] = useState('')

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');
    axios.defaults.headers.common["X-CSRFToken"]=csrftoken

    function quotesTest(){
        
        axios.get('https://web-series-quotes-api.deta.dev/quote/?series=dark&all=false').then(response =>{
            let data = response.data
            // console.log(data[0]['quote'])
            setQuotes(data[0]['quote'])
        })
    }
    
    function test(){

        var config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20near%20me%20IL&key=${TempKey}`,
        headers: { }
        };

        axios(config)
        .then(function (response) {
        // console.log(response.data.results);
        setRestaurants(response.data.results);
        })
        .catch(function (error) {
        console.log(error);
        });

        setNumber(Math.floor(Math.random() * 20) + 1)
        
    }
    useEffect( () => {
        test()
        quotesTest()
    },[])
    
    // console.log(restaurants[number];

  return (
    <div>
        <h4> Randomizer's List of Restaurants </h4>
        
        {restaurants && restaurants.map((restaurant)=> {
            return(
                <div> Restaurant: {restaurant.name}, Rating: {restaurant.rating}</div>
            )
        })}
        <hr/>
        <h3>Our Randomly Pick</h3>

        <h4>{number}</h4>
        <hr/>
        <h3>{quotes}</h3>
    </div>

  )
}

export default Randomizer