import React, { useState } from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import UserCard from './UserCard';

const Users = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeUserData, setActiveUserData] = useState({id: null, email: '', avatar: ''});
  console.log(activeUserData)

  let users = props.users.map((u) => (
    <li class='media pt-3' key={u.id} className={s.user_item} onClick={()=>{setIsOpen(true); setActiveUserData({...activeUserData, id:u.id, email: u.email, avatar: u.avatar})}}>
      <img class="mr-3" src={u.avatar} alt=''/>
      <div class="media-body text-md-left">
      <span class="mt-0 mr-2 mb-1">{u.first_name}</span>
      <span class="mt-0 mb-1">{u.last_name}</span>
    </div>
    </li>
  ));

  return (
    <div className={s.container}>
      <Paginator
        onPageChange={props.onPageChange}
        totalItemsCount={props.totalUsersCount}
        currentPage={props.currentPage}
        portionSize={props.portionSize}
      />
      <UserCard open={isOpen} onClose={()=> setIsOpen(false)}>
          <img src={activeUserData.avatar} class="card-img-top" alt="..."/>
          <div class="card-body">
          <div>ID: {activeUserData.id}</div>
          <div>Email: {activeUserData.email}</div>
          </div>
      </UserCard>
      <ul class="list-unstyled ml-5 mb-5">
        {users}
      </ul>

    </div>
  );
};

export default Users;
