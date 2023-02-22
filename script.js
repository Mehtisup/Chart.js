<script>
var xyValues = [
    {x:23, y:53},
    {x:32, y:59},
    {x:20, y:30},
    {x:42, y:24},
];

new Chart("myChart", {
    type: "scatter",
    data: {
        datasets: [{
            pointRadius:4,
            pointBackgroundColor:"red",
            data: xyValues,
        }]
    },
    options: {
        legend: {display:false},

        scales: {
            xAxes: [{ticks: {min:0, max:100}}],
            yAxes: [{ticks: {min:0, max:100}}],
        }
    }
})
</script>
