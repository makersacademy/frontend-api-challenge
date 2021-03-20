// View All Peeps:
function viewAllPeeps() {
	var feed = document.getElementById('peep-feed');
	console.log("Hi!");
	// API Get Peeps
	let file = "https://chitter-backend-api-v2.herokuapp.com/peeps";
	// API Fetch
	// # Response
	fetch(file).then(response => {
		return response.json();
	// # Data
	}).then(data => {
		let html = ""
		for (let i = 0; i < 25; i ++) {
			html += `<p>${data[i].user.handle} peeped: ${data[i].body}</p>`
		}
		feed.innerHTML = html;
		// data.forEach(peep => {
		// 	console.log(peep.body)
		// 	console.log(peep.user.handle)
		// });
	});
	}



	// Handle
	// Body
	// Time




viewAllPeeps()