




const recommendedCarsId = JSON.parse(localStorage.getItem('recommendedCarsId'))

if (recommendedCarsId) {
	console.log('does not exists')
} else {
	console.log('exists', recommendedCarsId)
}