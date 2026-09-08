import React from 'react'
import logo from '../Components/logoo.png'
const Tailwind = () => {
  return (
    <div class="h-[100vh] w-[100vw] p-4 bg-red-400 place-content-between flex flex-row ">
        <div class="">
            <img class="h-20 w-20" src={logo} alt="" />
        </div>
        <div >
            <ul class="flex flex-row gap-20 place-content-evenly">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}
export default Tailwind
