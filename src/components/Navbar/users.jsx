import React from "react";

export default function UsersInfo({isClicked, mail, name}) {
  return(
    <div style={{display: isClicked ? 'block' : 'none'}} className='navbar__modal'>
      <ul className='list-unstyled navbar__modal-list p-3 m-0'>
        <li className="">
          <p className='mb-4'>Medium Partner Program</p>
        </li>
        <li className="navbar__modal-item">
          <p className='mb-4'>Gift a membership</p>
        </li>
        <li className='navbar__modal-item'>
          <p className='mb-4'>Become a member</p>
        </li>
        <li className='navbar__modal-item'>
          <p className='mb-4'>Sign out</p>
        </li>
        <li className='navbar__modal-item'>
          <p className='mb-4'>Refine recommendations</p>
        </li>
        <li className='navbar__modal-item'>
          <p className='mb-4'>Manage publications</p>
        </li>
        <li className='navbar__modal-item'>
          <p className='mb-4'>Stats</p>
        </li>
        <li className='navbar__modal-item'>
          <p className='mb-4'>Settings</p>
        </li>
        <li className='navbar__modal-item d-flex align-items-center'>
          <img className='navbar__avatar' src="https://picsum.photos/id/23/70" alt="user" />
          <div className="navbar__modal-box">
            <h2 className="navbar__modal-name">{name}</h2>
            <p className="navbar__modal-mail">@{mail}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}