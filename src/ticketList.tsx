// The component retrieves the ticket list and the handleDelete function from the Home component.
// It then displays a list of tickets that have been added to the Bulk Buy list.
// Adds a "DELETE TICKET" button to each ticket, pressing which deletes the selected ticket from the list



import ConvertPrice from './ConvertPrice';
import './ticketList.css'

const TicketList = ({tickets, handleDelete}) => {


   
    return (<>
      <div className="Ticket-list">
        
        <div className="nsname">Bookers Name and Surname</div><div className="tprice">Price</div><div className="delCol"></div>
        {tickets.map(ticket => (
         <> 
          <div className="Tlist" key={ticket.id} >
            <div className="nsname">{ ticket.name } {ticket.surname}</div> <div className="tprice"> <ConvertPrice as = {(parseInt(ticket.ticketType.valueOf()))}/></div>
            <div className="delete" onClick={()=>handleDelete(ticket.id, ticket.ticketType) }>delete ticket</div>
          </div>
          </>))}
      </div>
      </>)
        }
   
  export default TicketList;