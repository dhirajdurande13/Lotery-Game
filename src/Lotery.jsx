import { useState } from "react"
import "./Lotery.css"
import { getTicket } from "./helper";
import { sum } from "./helper";
import Ticket from "./Ticket";
import Button from '@mui/material/Button';
export default function Lotery({n=3,winCondition})
{
    // let [ticket,setTicket]=useState(getTicket(3));
    let [ticket,setTicket]=useState(getTicket(n));
    // let isWining=sum(ticket)===15;
    // let isWining=sum(ticket)===winningSum;
    let isWining = winCondition(ticket);
    // console.log(isWining);
    let getRandomNumber=()=>{
        // setTicket(getTicket(3));
        setTicket(getTicket(n));
    }
    return (
        <div className="Lotery">
            <h1>Lotery Game!</h1>
            <div className="ticket">
            {/* <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span> */}
            <Ticket ticket={ticket}></Ticket>
            </div>
            <br /><br />
            {/* <button onClick={getRandomNumber}>Buy New Ticket</button> */}
            <Button variant="outlined" onClick={getRandomNumber} color="secondary"><i>Buy New Ticket</i> </Button>
            <h3>{isWining ? "Congratulations you won!":"Better luck next time"}</h3>
        </div>
    )
}