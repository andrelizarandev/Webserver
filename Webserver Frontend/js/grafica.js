
    // Data-----
    const data = [];

    let prev = 0;

    for (let i = 0; i < 15; i++) {
        prev += 5 - Math.random() * 35;
        data.push({x: i, y: prev});
    }
    // Data-----

    // Animation-----
    const totalDuration = 100;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(5) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        }
    };
    // Animation-----

    // Config-----
    const config = {
        type: 'line',
        data: {
            datasets: [{
                borderColor: "#ff0000",
                borderWidth: 1,
                radius: 0,
                data: data,

            }]
        },
        options: {
            animation,
            interaction: {
                intersect: false
            },
            plugins: {
                legend: false
            },
            scales: {
                x: {
                    type: 'linear'
                }
            }
        }
    };
    // Config-----


    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

