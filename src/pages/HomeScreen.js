import React from 'react';
import './HomeScreen.css';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from "../utilities/requests";

function HomeScreen() {
    return (
        <div className = 'homeScreen'>
            <Navbar/>
            <Banner/>
            <Row 
                title = "NETFLIX ORIGINALS"
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
            <Row title = "Trending Now" fetchUrl = {requests.fetchTopRated}/>
            <Row title = "Trending Now" fetchUrl = {requests.fetchActionMovies}/>
            <Row title = "Trending Now" fetchUrl = {requests.fetchComedyMovies}/>
            <Row title = "Trending Now" fetchUrl = {requests.fetchHorrorMovies}/>
            <Row title = "Trending Now" fetchUrl = {requests.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen
