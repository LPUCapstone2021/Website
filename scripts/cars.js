const recommendedCarsId = JSON.parse(localStorage.getItem('recommendedCarsId'))

let card = `
	<div class="card container">
	  <div class="card-body">
	     <div class="car-img col-sm-4" >
	        <img src="/images/logo.png" alt="carimg">
	     </div>
	     <div class="col-sm-5">
	        <h3>Name of the car</h3>
	        <p>little bit details about the car</p>
	        <h4>Price Rs. 4 - 6 Lack</h4>
	        <p>Milege | Seating space</p>
	     </div>
	     <div class="col-sm-3">
	        <p>reviews of the car</p>
	        <a href="#" class="car-view-btn">View Details</a>
	     </div>
	  </div>
	</div>
`

if (recommendedCarsId) {
	let section = ``
	recommendedCarsId.forEach(car => section += card)
	$('section').append( section );
} else {
	console.log('does not exists')
}

