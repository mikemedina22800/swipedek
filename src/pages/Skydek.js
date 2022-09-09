import React, { useState, useEffect } from 'react';
// import Profile from '../components/Profile';
// import Chat from '../components/Chat';
// import SwipeDeck from '../components/SwipeDeck';
// import Post from '../components/Post';
// import Home from '../components/Home';
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTv, faUserGroup, faUsers, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { auth, db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';

import './Skydek.css';

const Skydek = () => {

  auth.onAuthStateChanged((user) => {
    if (user) {
      setSkydek(true)
      setName(auth.currentUser.displayName)
    } else {
      window.location.replace('./login')
    }
  });

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    }
    getUsers()
  }, [])

  const [skydek, setSkydek] = useState(false)

  const [name, setName] = useState('')  

  const [home, setHome] = useState(true)
  const [profile, setProfile] = useState(false)
  const [chat, setChat] = useState(false)
  const [swipeDeck, setSwipeDeck] = useState(false)
  const [post, setPost] = useState(false)
  
  const openProfile = () => {
    setHome(false)
    setProfile(true)
  }

  return (
    <>
      {skydek && <div className='skydek'>
        <div className='navbar'>
          <div className='logo'>Skydek™</div>
          <FontAwesomeIcon icon={faHouse} title='skydek'/>
          <FontAwesomeIcon icon={faUserGroup} title='Friends'/>
          <FontAwesomeIcon icon={faTv} title='Watch'/>
          <FontAwesomeIcon icon={faStore} title='Marketplace'/>
          <FontAwesomeIcon icon={faUsers} title='Groups'/>
          <button className='signOut' onClick={() => signOut(auth)}>Sign Out</button>
        </div>
        <div className='navbar-left'>
          <div className='profile' title='Profile' onClick={openProfile}>
            <FontAwesomeIcon className='icon' icon={faUser}/>{name}
          </div>
        </div>
        <div className='content'>
          {/* {home && <Home/>}
          {profile && <Profile/>}
          {chat && <Chat/>}
          {swipeDeck && <SwipeDeck/>}
          {post && <Post/>} */}
        </div>
      </div>}
    </>
  )
}

export default Skydek