"use client"
import Cookies from 'js-cookie';
import React, { useState } from 'react'

const Input = (props) => {

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const sendTaskDets = (event) => {
    event.preventDefault();
    // console.log(title, desc);
    if (title.length == 0) {
      console.log("blank");
      document.querySelector("#title>.error-div").style.display = "block";
      // document.querySelector("#title>.error-div").style.paddingTop = "24px";

    }
    if (desc.length == 0) {
      console.log("desc blank");
      document.querySelector("#description>.error-div").style.display = "block";
      // document.querySelector("#description>.error-div").style.paddingTop = "24px";

    }
    else {
      document.querySelector("#description>.error-div").style.display = "none";
      document.querySelector("#title>.error-div").style.display = "none";

      // COOKIES TRYING
      // Cookies.set('task-dets', JSON.stringify({ title, desc }), { expires: 7 });

      props.sendChildData({ title, desc, completed:false })
      settitle("");
      setdesc("");
    }
  }

  return (
    <div id="input-wrapper" className='mt-4'>
      <form className='flex-col flex md:flex-row gap-5 md:gap-22 items-center' onSubmit={sendTaskDets}>
        <div id="title">
          <input className='text-lg md:text-2xl border-2 border-gray-400 px-3 py-1.5 rounded-lg text-center focus:border-gray-800' type="text" placeholder='Enter Task Title' value={title} onChange={(event) => { settitle(event.target.value) }} />
          <div className='error-div text-red-600 font-semibold hidden'> Task Title is Required </div>
        </div>
        <div id="description">
          <input className='text-lg md:text-2xl border-2 border-gray-400 px-3 py-1.5 rounded-lg text-center md:w-[120%] focus:border-gray-800' type="text" placeholder='Enter Task Description' value={desc} onChange={(event) => { setdesc(event.target.value) }} />
          <div className='error-div text-red-600 font-semibold hidden'> Task Description is Required </div>
        </div>
        <button className='md:ml-10 px-3 bg-blue-500 text-white font-semibold w-fit text-md md:text-xl rounded-lg  md:h-12 hover:cursor-pointer'> Add Task </button>

      </form>
    </div>
  )
}

export default Input