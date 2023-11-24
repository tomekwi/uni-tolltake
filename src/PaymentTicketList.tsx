// The component retrieves the ticket list and the handleDelete function from the Home component.
// It then displays a list of tickets that have been added to the Bulk Buy list



import './ticketList.css'
import ConvertPrice from './ConvertPrice';


const PaymentTicketList = ({tickets, price}) => {


   
    return (<>
      <div className="PaymentTicketList">
        
        <div className="nsname">Holder:</div><div className="tprice">Price:</div>
        {tickets.map(ticket => (
         <> 
          <div className="Tlist" key={ticket.id} >
            <div className="nsname">{ ticket.name } {ticket.surname}</div> <div className="tprice"> <ConvertPrice as = {(parseInt(ticket.ticketType.valueOf()))}/></div>
          </div>
          
          </>))}

          <div className="pricepay">
          <div className="nsname">Total price to pay</div><div className="tprice"><ConvertPrice as={price}/></div>
          </div>
      
      </div>
      </>)
        }
   
  export default PaymentTicketList;