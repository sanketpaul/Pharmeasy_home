let getLocation=()=>{
    let location=document.getElementById('location1')
    let temprature=document.getElementsByClassName('temparature')[0]
    let dyntempicon=document.getElementById('dyntempicon')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showlocation)

    }
    else{
        console.log('geonot supported')
    }
    function showlocation(data){
        console.log(data)
        let lat=data.coords.latitude;
        let lon=data.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
        fetch(url).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            location.innerText=data.city.name;
            let tempresult=(data.list[0].temp.max).toFixed(0)
            temprature.innerHTML=`${tempresult} °C`;

        })

    }


}