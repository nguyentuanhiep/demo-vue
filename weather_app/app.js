

var app = new Vue({
    el: '#app',
    data: {
        results: {}
    },
    mounted() {
        axios({
            url: 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22',
            method: 'get',
        })
            .then(res => {
                res.data.weather.img = './img/' + res.data.weather.icon + '.png'
                this.results = res.data
                console.log(res)

            });
    },
    // computed: {
    //     convertedResults: function () {
    //         this.results.main.temp_min = this.results.main.temp_min - 273
    //         return this.results
    //     }
    // }
})