const recommendedCarsId = JSON.parse(localStorage.getItem('recommendedCarsId'))

let card = ({name}) => `
	<div class="card container">
	  <div class="card-body">
	     <div class="car-img col-sm-4" >
	        <img src="/images/logo.png" alt="carimg">
	     </div>
	     <div class="col-sm-5">
	        <h3>${name}</h3>
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
	let params = new URLSearchParams(recommendedCarsId.map((s, i)=>[`id${i+1}`,s])).toString()
	fetch(`http://127.0.0.1:5000/cars?${params}`)
		.then(res => res.json())
		.then(cars => {
			cars.forEach(car => section += card(car["Car names"]))
			$('section').append(section)
		})
		.catch(err => console.warn(err))
} else {
	console.log('does not exists')
}

