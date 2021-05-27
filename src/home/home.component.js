import React, { useState, useEffect } from 'react';
import Card from '../Card/card.component';
import PersonInfo from '../PersonInfo/personInfo.component';
import axios from 'axios'

import './home.component.scss'
import Loader from '../loader/loader.component';

export default function Home() {

    const [results, setResult] = useState()
    const [loader, setLoader] = useState(true)
    const [activeUser, setActiveUser] = useState()
    useEffect(() => {
        fetchFilteredMissions()
    }, [])

    function fetchFilteredMissions(params) {
        let url = 'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results= 20'
        axios.get(url).then(res => {
            if (res) {
                setResult(res.data.results);
                setLoader(false)
                setActiveUser(res.data.results[0])
            }
        });
    }
    console.log(results)
    console.log(loader)

    const handleCardClick = (activeUser) => {
        setActiveUser(activeUser);
    }

    console.log(activeUser)

    return (
        <div className='home-container'>
            <PersonInfo
                activeUser={activeUser}
            />
            <div className='card-wrapper'>
                {results ? results.map(users => <Card
                    usersList={users}
                    activeUser={activeUser}
                    cardClickCallback={(users) => handleCardClick(users)}
                />) : <Loader />}
            </div>
        </div>
    )
}