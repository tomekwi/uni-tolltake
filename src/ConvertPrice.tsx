// I adopted the following currency conversion method:
// The price of each ticket has been reduced to the lowest possible divisor (semis)
// All ticket prices have been added together
// The tests were performed in order from the highest currency to the lowest, i.e. SUM/20, SUM/5, etc.

// Hence, for example
// 1 Dupondius, 1 As
// Is shown as
// 1 Sesterius, 0 As and 1 Semis


// Equivalencies are adopted from https://en.wikipedia.org/wiki/Roman_currency#Equivalences
// Early Republic values (after 211 BC) table


// Early Republic values[17][18] (after 211 BC)
//              Denarius	Sestertius	Dupondius	As	    Semis	 Quincunx	    Triens      Quadrans    Uncia
// Denarius	    1	        4	        5	        10	    20	     24	            30	        40	        120
// Sestertius	1⁄4	        1	        1+1⁄4	    2+1⁄2	5	     6	            7+1⁄2	    10	        30
// Dupondius	1⁄5	        4⁄5     	1	        2	    4	     4+4⁄5   	    6	        8   	    24
// As	        1⁄10    	2⁄5     	1⁄2 	    1	    2	     2+2⁄5	        3	        4	        12
// Semis	    1⁄20	    1⁄5	        1⁄4	        1⁄2	    1	     1+1⁄5	        1+1⁄2	    2	        6
// Quincunx	    1⁄24	    1⁄6	        5⁄24	    5⁄12	5⁄6	     1	            1+1⁄4	    1+2⁄3	    5
// Triens	    1⁄30	    2⁄15	    1⁄6 	    1⁄3	    2⁄3	     4⁄5	        1	        1+1⁄3	    4
// Quadrans	    1⁄40	    1⁄10	    1⁄8	        1⁄4	    1⁄2	     3⁄5	        3⁄4	        1	        3
// Uncia	    1⁄120	    1⁄30	    1⁄24	    1⁄12	1⁄6	     1⁄5	        1⁄4	        1⁄3     	1

const ConvertPrice = ({as}) =>{
    return(
        <div className="ConvertPrice">{
            (()=>{
                //console.log(<>{as} , Price Passed to CP</>)
                function ifSemis(){
                    if (as>=20)
                    return (<>{(((as%20)%5)%4)%2}</>)
                    if (as<=20)
                    return(<>{((as%5)%4)%2} </>)
                
                }    
                function ifDenarius(){
                    return(<>{Math.floor(as/20)} Denarius, {Math.floor((as%20)/5)} Sesterius, 
                    {Math.floor(((as%20)%5)/4)} Dupondius, {Math.floor((((as%20)%5)%4)/2)} As, 
                    {ifSemis()} Semis</>)
                }
                function ifNotDenarius(){
                    return(<>{Math.floor(as/5)} Sesterius, {Math.floor((as%5)/4)} Dupondius, 
                    {Math.floor(((as%5)%4)/2)} As, {ifSemis()} Semis</>)
                }
                return(

                    (()=>{
                        if(as>=20) {return(<>{ifDenarius()}</>)}
                        else { return(<>{ifNotDenarius()}</>)}
                    })()
                )
            })()}
        </div>
)
}
export default ConvertPrice;