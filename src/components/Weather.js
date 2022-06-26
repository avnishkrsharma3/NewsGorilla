import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsItem from './NewsItem'
import Spinner from "./Spinner";
const Weather = (props) => {
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0);
    const [location, setLocation] = useState({});
    const [current, setCurrent] = useState({});
    const [condition, setCondition] = useState("Mist");
    const [inputField, setInputField] = useState('New-Delhi');
    const updateNews = async () => {
        let url = `https://api.weatherapi.com/v1/current.json?key=7a10147a943a406e8dc152547222606&q=${props.cityName}`
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        setLocation(parseData.location);
        setCurrent(parseData.current);
        setLoading(false);
    }
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }
    console.log(inputField);
    document.title = "Weather-Report Gorilla News"
    return (

        <div className='container' style={{ marginTop: "150px" }}>
            {loading && <Spinner />}
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" className="sr-only">Choose Location</label>
                    <input type="text" className="form-control" id="inputPassword2" onChange={inputsHandler} placeholder="New-Delhi"/>
                </div>
                <button to="/weather" style={{marginLeft:"18px"}} type="submit" className="btn btn-primary mb-2">Search</button>
            </form>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Location</th>
                        <th scope="col">Current Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Place Name</td>
                        <td>{location.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Region</td>
                        <td>{location.region}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td >Country</td>
                        <td >{location.country}</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td >Local Time</td>
                        <td >{location.localtime}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td >Temperature</td>
                        <td >{current.temp_c}<span>&#x2103;</span></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td >Feels Like</td>
                        <td >{current.feelslike_c}<span>&#x2103;</span></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td >Wind Speed</td>
                        <td >{current.wind_kph}<span> Km/h</span></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Humidity</td>
                        <td>{current.humidity}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
export default Weather;
