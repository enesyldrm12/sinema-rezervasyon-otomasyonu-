const container=document.querySelector('.container');
const count=document.getElementById('count');
const amount=document.getElementById('amount');
const select=document.getElementById('movie');
const seats=document.querySelectorAll('.seat:not(.reserved');
const buy=document.getElementById('buy');

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');   //toggle ne işe yarar? seciliyse default yapar.defaultsa secer
        calculateTotal();
    }
});
select.addEventListener('change',function(e){
    calculateTotal();
});
function calculateTotal(){
    const selectedSeats=container.querySelectorAll('.seat.selected');
    let selectedSeatCount=selectedSeats.length;
    count.innerText=selectedSeatCount;
    amount.innerText=selectedSeatCount*select.value;
}


