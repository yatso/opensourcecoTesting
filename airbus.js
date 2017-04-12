var totalTickets = 555;
var counterBuyTickets = prompt("There are 555 tickets, how many tickets you want to buy?");
var balanceTickets = totalTickets - counterBuyTickets;

if(counterBuyTickets === 555) {
		alert("You have bought all tickets, there are no tickets left")
	}else{
		alert("You are buying " + counterBuyTickets + "!")
}
