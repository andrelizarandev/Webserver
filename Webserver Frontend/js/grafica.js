const labels = depthValues.map((_, index) => (index + 1));

const myChart = new Chart(chart, {
	type: 'line',
	data: {
		labels: depthValues.map((_, index) => (index + 1)),
		datasets: [{
			data: depthValues,
			label: "Profundidad",
			borderColor: "#3cba9f",
			fill: false
		}]
	},
	options: {
		title: {
			display: true,
			text: 'Chart JS Line Chart Example'
		}
	}
});
