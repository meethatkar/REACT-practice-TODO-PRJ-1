"use client"
import Input from '@/Component/Input'
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'

const page = () => {


  const [mainTask, setmainTask] = useState([]);

  const getChildData = (childData) => {
    setmainTask([...mainTask, childData]);

    // COOKIES TRYING
    // let cookieData = JSON.parse(Cookies.get('task-dets'));
    // console.log(cookieData);
    // setmainTask([...mainTask,cookieData]);

  }

  let renderTask = <p className='text-center text-xl font-medium'> No task Added !! </p>
  let renderStateMob = <p className='text-center text-xl font-medium'> No task Added !! </p>

  // COOKIES TRYING
  // useEffect(() => {
  //   console.log("mainTask updated:", mainTask);
  //   Cookies.set("main-tasks",mainTask);
  // }, [mainTask]);


  if (mainTask.length > 0) {

    /*
    slice() makes a copy of the array so the original mainTask is not mutated.
    reverse() just changes the order to show latest tasks first.
    */
    renderTask = mainTask.map((task, index) => {
      return <li className='grid grid-cols-[80px_200px_1fr_150px_150px] text-lg gap-4 mb-5' key={index}>
        {/* key acts like ID, if compulosory in react, as react identifies each unquie li using key only. */}
        <p> {task.completed ? "✅ " + (index+1) :  (index+1)} </p>
        <p>  {task.title} </p>
        <p> {task.desc} </p>
        <button className='bg-green-400 w-1/2 h-fit text-white rounded-lg hover:cursor-pointer' onClick={() => { completeTask(index) }}> Done </button>
        <button className='bg-red-400 w-1/2  h-fit rounded-lg hover:cursor-pointer' onClick={() => { deleteTask(index) }}>Delete</button>
      </li>
    })

    renderStateMob = mainTask.map((task,index)=>{
      return <div className="task pb-3 border-b-1 border-b-gray-400 flex flex-col" key={index}>
            <h3 className='text-2xl font-medium'> {task.completed ? "✅ Task " + (index+1) : "Task " + (index+1)} </h3>
            <div id="title-mob" className='flex gap-4'> <span className='min-w-[105px] font-medium'> Title:- </span>  <h5> {task.title} </h5> </div>
            <div id="desc-mob" className='flex gap-4'> <span className='min-w-[100px] font-medium'> Description:- </span>  <h5> {task.desc} </h5> </div>
            <button className='mr-5 px-3 py-0.5 bg-green-400 text-white rounded-lg mt-5 w-fit' onClick={() => { completeTask(index) }}> check </button>
            <button className='mr-5 px-3 py-0.5 bg-red-400 text-white rounded-lg mt-5 w-fit' onClick={() => { deleteTask(index) }}> Delete </button>
          </div>
    })
  }

  const deleteTask = (index) => {
    // alert("Are you sure, you want to delete it");
    let clonedTaskArr = [...mainTask];
    clonedTaskArr.splice(index, 1);
    setmainTask(clonedTaskArr);
  }

  const completeTask = (index) => {
    let clonedArr = [...mainTask];
    clonedArr[index].completed = true;
    setmainTask(clonedArr);
    // let liDiv = eventDiv.parentNode;
    // liDiv.children[0].textContent = "✅  " + liDiv.children[0].textContent;
    // liDiv.style.color = "green";
  }

  return (
    <div id="wrapper" className='md:bg-gradient-to-br md:from-[#CFB908] md:via-[#39A68B] md:to-[#1339B9] min-h-screen w-screen flex items-center justify-center '>
      <div id="container" className='bg-white w-screen min-h-[100%] md:h-auto md:w-10/12 md:w-3/4 py-6 px-8 rounded-xl text-black md:shadow-md shadow-black/70 flex flex-col items-center gap-5'>
        <img src="./Screenshot 2025-07-11 235240.png" alt="" className='h-18 md:h-25' />
        <h1 className='text-2xl md:text-4xl font-medium'> Todo List App</h1>
        <p className='-mt-3 text-gray-500 text-lg text-center '> Create your Task(s) and get organised today </p>
        <Input sendChildData={getChildData}></Input>
        {/* <Input></Input> */}
        <div id="task-dets" className='hidden md:block w-11/12 bg-gray-100/60  px-4 py-4 mt-5 shadow-xs shadow-gray-500/60 rounded-lg'>
          <div id="heading" className='grid grid-cols-[80px_200px_1fr_150px_150px] text-xl gap-4 font-medium pb-2 mb-8 border-b-2 border-gray-500'>
            <p> Sr.no </p>
            <p> Title  </p>
            <p> Description </p>
            <p> Mark Done </p>
            <p> Delete 🗑️ </p>
          </div>
          {renderTask}
        </div>

        <div id="mob-task" className='md:hidden flex flex-col item-start w-full h-full gap-5'>
          {renderStateMob}
        </div>
      </div>
    </div>
  )
}

export default page