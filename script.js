// // // let years=document.getElementById("years").innerText
// // // console.log(years)

// // // let months=document.getElementById("months").innerText
// // // console.log(months)

// // // let days=document.getElementById("days").innerText
// // // console.log(days)

// // // let hours=document.getElementById("hours").innerText
// // // console.log(hours)


// // // let minutes=document.getElementById("minutes").innerText
// // // console.log(minutes)

// // // let seconds=document.getElementById("seconds").innerText
// // // console.log(seconds)

// // // let birtdayPicker=document.querySelector("[name=birthday]");
// // // birtdayPicker.addEventListener("change",()=>{
// // //     let years=new Date().getFullYear() - new Date(birtdayPicker.value).getFullYear();
    
// // // })



    let years=document.querySelector("#years")
    let months=document.querySelector("#months")
    let days=document.querySelector("#days")
    let hours=document.querySelector("#hours")
    let minutes=document.querySelector("#minutes")
    let seconds=document.querySelector("#seconds")
    let birtdayPicker=document.querySelector("[name=birthday]")
     
    setInterval(Event,1000);
    birtdayPicker.addEventListener("change",()=>{
        let year=new Date().getFullYear() -new Date(birtdayPicker.value).getFullYear();
        document.getElementById("years").innerHTML=year;
        let month=new Date().getMonth() - new Date(birtdayPicker.value).getMonth();
        document.getElementById("months").innerHTML=month;
        let day=new Date().getDay() - new Date(birtdayPicker.value).getDay();
        document.getElementById("days").innerHTML=day;
        let hours=new Date().getHours() - new Date(birtdayPicker.value).getHours();
        document.getElementById("hours").innerHTML=hours;
        let minutes=new Date().getMinutes() - new Date(birtdayPicker.value).getMinutes();
        document.getElementById("minutes").innerHTML=minutes;
        let seconds=new Date().getSeconds() - new Date(birtdayPicker.value).getSeconds();
        document.getElementById("seconds").innerHTML=seconds;
        

    })
    let body=document.querySelector("body")
    let loading=document.querySelector(".loading")
    birtdayPicker.addEventListener("click",()=>{
        loading.style.display="none";
        body.style.background="url('https://images3.alphacoders.com/853/thumb-1920-85305.jpg')";
    })