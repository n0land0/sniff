import React from 'react'
import { Link } from 'react-router-dom'

// import './_Card.scss'

const Card = ({ id, owner_name, dog_name, profile_pic, dog_breed }) => {

  return (
    <Link to={`/profile/${id}`}>
      <article className='profile-card'>
        <img className="profile-card__image" src={profile_pic} alt='profile picture'/>
        <h3 className="profile-card__card-details">{dog_name} the {dog_breed} & {owner_name}</h3>
      </article>
    </Link>
  )
}

export default Card
