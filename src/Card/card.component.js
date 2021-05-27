import React from 'react'

import './card.component.scss'

export default function Card(props) {
    const { cardClickCallback } = props;
    const { usersList, activeUser } = props
    const { gender, name, email } = usersList

    const handleOnCardClick = () => {
        cardClickCallback(usersList);
    }
    return (
        <div className='card-container' style={{backgroundColor:(activeUser && activeUser===usersList) ? "blue" : "white"}}
            onClick={handleOnCardClick}>
            <p className='p-gender'>{gender}</p>
            <p className='p-name'>{name.title} {name.first} {name.last}</p>
            <p className='p-email'>{email}</p>
        </div>
    )
}