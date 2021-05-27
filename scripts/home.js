




const recommendedCarsId = JSON.parse(localStorage.getItem('recommendedCarsId'))

if (recommendedCarsId) {
	console.log('exists', recommendedCarsId)
} else {
	console.log('does not exists')
}