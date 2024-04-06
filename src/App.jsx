import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lotery from './Lotery'
import Ticket from './Ticket'
import { sum } from './helper'
function App() {
    // let winCondition=(ticket)=>{
    //   return sum(ticket)===15;

    // }
    // if winning condition changed all numbers are equal then win
    // let winCondition=(ticket)=>{
    //  return ticket.every((num)=> num===ticket[0]);
    // }
    // agar ticket ka pahila number 0 hai to win
    let winCondition=(ticket)=>{
     return ticket[0]===0;
    }

  return (
    <>
      {/* <Lotery></Lotery> */}
      {/* <Ticket ticket={[0,1,2]}></Ticket>
      <Ticket ticket={[0,1,2,5,7,6]}></Ticket> */}
      {/* <Lotery n={4} winningSum={15}></Lotery> */}
      <Lotery n={3} winCondition={winCondition}></Lotery>
    </>
  )

}

export default App
