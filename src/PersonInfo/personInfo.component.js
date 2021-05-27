import React, { useState } from 'react';

import './personInfo.component.scss'

export default function PersonInfo(props) {
    const { activeUser} = props;
    console.log(activeUser);

    return (
        <div className='info-container'>
           <div className='user-img'>
               <img
                    src={activeUser && activeUser.picture.large}
                    alt='user img'
                    className='person-img'
                /> 
            </div>
            <div className='user-info'>
                <h1 className='user-name'>{activeUser && activeUser.name.title} {activeUser && activeUser.name.first} {activeUser && activeUser.name.last}</h1>
                <p className='user-address'>
                <span style={{color:"blue"}}>  {activeUser && activeUser.location.street.number}, </span>
                <span>   {activeUser && activeUser.location.street.name},</span>
                <span>   {activeUser && activeUser.location.city},</span>
                <span style={{fontWeight:"bold"}}>  {activeUser && activeUser.location.country}</span>
                <span>   {activeUser && activeUser.location.postcode}</span>
                <span>  {activeUser && activeUser.location.state}</span>
                <span>  {activeUser && activeUser.location.offset}</span>
                <span>  {activeUser && activeUser.location.description} </span></p>
                <p className='user-gender'>{activeUser && activeUser.gender}</p>
            </div> 
        </div>
    )
}