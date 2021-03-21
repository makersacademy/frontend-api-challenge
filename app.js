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
		// OPTION 1
		let html = ""
		for (let i = 0; i < 25; i ++) {
			html += `<div id="peep">
									<p><b>@${data[i].user.handle}</b> peeped:</p>
									<p id="body">${data[i].body}</p>
									<p id="time">at ${data[i].created_at}</p>
							 </div>`

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