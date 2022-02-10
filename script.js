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
     
    
    birtdayPicker.addEventListener("change",()=>{
        if( new Date(birtdayPicker.value)>new Date){
           return  alert("geçersiz tarih!!!!");
             
            
        }else{
            setInterval(()=>{
           
           if(new Date().getDate()-new Date(birtdayPicker.value).getDate()<0){
               days.innerText=new Date().getDate()-new Date(birtdayPicker.value).getDate() +30;

           }else{
               days.innerText=new Date().getDate()-new Date(birtdayPicker.value).getDate()
           } 
           if(new Date().getMonth()-new Date(birtdayPicker.value).getMonth()<0){
               months.innerText=new Date().getMonth()-new Date(birtdayPicker.value).getMonth() + 12;
               years.innerText=new Date().getFullYear() - new Date(birtdayPicker.value).getFullYear() - 1;
           } else{
               months.innerText=new Date().getMonth()-new Date(birtdayPicker.value).getMonth()
               years.innerText=new Date().getFullYear() - new Date(birtdayPicker.value).getFullYear() 
           }   

        
       
       new Date().getDate() - new Date(birtdayPicker.value).getDate();
        hours.innerText=new Date().getHours() - new Date(birtdayPicker.value).getHours();
    
         minutes.innerText=new Date().getMinutes() - new Date(birtdayPicker.value).getMinutes();
       seconds.innerText=new Date().getSeconds() - new Date(birtdayPicker.value).getSeconds();},1000)}})
    
        

    
    let body=document.querySelector("body")
    let loading=document.querySelector(".loading")
    birtdayPicker.addEventListener("click",()=>{
        loading.style.display="none";
        body.style.background="url('http://3.bp.blogspot.com/-H95QDWZ7FyY/VWsVQQidSHI/AAAAAAAAJO8/1UaWkHLksiw/s1600/0gCSA.jpg')";
        body.style.backgroundSize="cover"

    })
