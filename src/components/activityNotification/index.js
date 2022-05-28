import React from 'react'
import "./style.css"


function index({UserImg,Msg,Time,Name}) {
  return (
    <div className='activityTab flex flex-row m-2'>
       <div className="info flex flex-col px-2 pl-3">
           <p className='msg fs-7 my-1 font-semibold'>{Msg}</p>
           <p className='userName fs-7  my-1 font-semibold'>{Name} </p>
           <p className='dateTime fs-6 my-1 text-gray-400'>{Time}</p>
       </div>
       <div className="userPic my-1">
           <img src={UserImg} alt="userImage" />
       </div>
    </div>
  )
}

export default index