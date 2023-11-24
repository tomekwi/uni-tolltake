
import { useState} from "react";
import TicketList from "./ticketList";
import './home.css';
import ConvertPrice from "./ConvertPrice";
import PaymentTicketList from "./PaymentTicketList";

const Home = () => {





return(
<div className="home">{



(() => {
        


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [ticketType, setTicketType] = useState('2');
    const [price, setPrice] = useState(0);
    const [tickets, setTickets] = useState([]);

    //Changes rendered screen to the payment screen. Set to Bulk Buy screen by default. 
    const [visibleItem, setVisibleItem] = useState("tick");
    const [payeeName, setPayeeName] = useState('');
    const [payeeSurname, setPayeeSurname] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [payeeData, setPayeeData] = useState([]);
    const [email, setEmail] = useState(''); 
    const [ticketCount, setTicketCount] = useState(0);


    const handleSubmit = (e) => {
        

      setPrice(price+(parseInt(ticketType.valueOf())));
      //console.log(parseInt(ticketType.valueOf()))
      //console.log(price);
      let id = Math.floor(Math.random()*1000);
      e.preventDefault();
      const ticket = { id, name, surname, ticketType, price};
      const newTicket = [...tickets, ticket]
      setTickets(newTicket)
      setTicketCount(ticketCount + 1);
  
    }



    const handleSubmitPayment = (e) =>{
      e.prevent.default();
      let id = Math.floor(Math.random()*100000);
      const payeeDataString = {id, payeeName, payeeSurname, price, tickets, cardNumber};
      setPayeeData([payeeDataString]);
      console.log(payeeData)
      setPayeeName(''); setPayeeSurname(''); setCardNumber(''); setEmail('');
      //AT THIS POINT REACT WILL PASS PayeeData TO BACKEND PAYMENT API AND TO DB API WITH ADDITIONAL FIELD 'isConfirmed' SET BY DEFAULT TO FALSE;
      //AS SOON AS PAYMENT API RETURNS WITH CONFIRMED PAYMENT, ANOTHER FUNCTION WILL CHANGE FIELD 'isConfirmed' TO TRUE

    }



    const handleDelete = (id, p) =>{
        //console.log("Ticket Type: " , p , "ID: ", id)
        setPrice(price-(parseInt(p.valueOf())));
        const deletedTicket = tickets.filter(ticket => ticket.id !== id);
        setTickets(deletedTicket)
        setTicketCount(ticketCount - 1);
    }

    //const root = ReactDOM.createRoot(document.getElementById('root'));
    //root.render(<ConvertPrice ab = {price} />);


    


return <> 


{visibleItem === "tick" && 
<div className="add">
<h2>Ticket Selection</h2>
<form onSubmit={handleSubmit}>
  <input 
    type="text" 
    required 
    value={name}
    placeholder="Passenger's name"
    onChange={(e) => setName(e.target.value)}
  />
  <input 
    type="text" 
    required 
    value={surname}
    placeholder="Passenger's surname"
    onChange={(e) => setSurname(e.target.value)}
  />
    <select
      value={ticketType}
      onChange={(e) => setTicketType(e.target.value)}
    >
  <option value="2">Single person, light load - 1 As</option>
  <option value="4">Single person, heavy load - 2 As</option>
  <option value="6">Single person, hand-drawn cart - 1 Dupondius, 1 As</option>
  <option value="8">1 horse + rider - 2 Dupondius</option>
  <option value="12">Horse-drawn cart, 1 horse - 3 Dupondius</option>
  <option value="16">Horse-drawn cart, 2–3 horses - 4 Dupondius</option>
  <option value="20">Horse-drawn cart, 4–5 horses - 1 Denarius</option>
  <option value="30">Horse-drawn cart, 6 horses - 1 Denarius, 2 Sesterius</option>
</select>

{/* THIS WILL DISABLE BUTTON IF NUMBER OF TICKETS REACH 10 */}

<button disabled={ticketCount >= 10} >ADD TICKET</button>
</form>
<TicketList tickets = {tickets} handleDelete={handleDelete}/> <div className="pricepay">

<div className="total"><div className="allTickets">Total tickets price:</div><div className="allTprice"><ConvertPrice as = {price}/></div></div>
<div className="payB"><button className="paymentButton" onClick={() => setVisibleItem("payment")}>Proceed to payment</button></div>
</div></div>
}


{visibleItem === "payment" && 
  <div className="payment">
<h1>Payment</h1>
    <PaymentTicketList tickets = {tickets} price = {price}/>


    <form className = "formPayment" onSubmit={handleSubmitPayment}>
    
    <input 
    type="text" 
    required 
    value={payeeName}
    placeholder="Payee name"
    onChange={(e) => setPayeeName(e.target.value)}
  />
  <input 
    type="text" 
    required 
    value={payeeSurname}
    placeholder="Payee surname"
    onChange={(e) => setPayeeSurname(e.target.value)}
  />
   <input 
    type="email" 
    required
    value={email}
    placeholder="Card number"
    onChange={(e) => setEmail(e.target.value)}
  />
    <input 
    type="text" 
    required
    value={cardNumber}
    placeholder="Card number"
    onChange={(e) => setCardNumber(e.target.value)}
  />
<br></br><br></br><br></br>
    <button>PAY NOW</button>
  </form>
  <br></br><br></br><br></br>
    
    <button className="paymentButton" onClick={() => setVisibleItem("tick")}>Back to Ticket List</button>
  </div>}





</>
})()}

<div className="disclaimer">Please, read ConvertPrice.tsx file for explination of how currency is presented.</div>
</div>
)
}

export default Home;