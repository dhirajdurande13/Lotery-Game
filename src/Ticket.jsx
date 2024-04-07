import TicketNum from "./TicketNum"
import './Ticket.css'
export default function Ticket({ticket})
{
    return (
        <div className="Ticket">
            {/* <TicketNum num={ticket[0]}></TicketNum>
            <TicketNum num={ticket[1]}></TicketNum> */}
            <h3>Ticket</h3>
           { ticket.map((ele,idx)=>(
                <TicketNum num={ele} key={idx}></TicketNum>
            ))}
        </div>
    )
}