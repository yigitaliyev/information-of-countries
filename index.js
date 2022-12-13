let inputId = document.getElementById("input-id");
let buttunId = document.getElementById("button-id");

buttunId.addEventListener("click",()=>{
    let inputValue = inputId.value;
    URL = `https://restcountries.com/v3.1/name/${inputValue}?fullText=true`;
      fetch(URL)        
       .then((response) => response.json())
       .then((data)=>{   
         result.innerHTML =`
            <img src ="${data[0].flags.svg}" class="flag_img">
            <h2> ${data[0].name.common}</h2>
           
            <div class="wrapper_data">
              <h3> Davlat poytahti:</h3>
              <span> ${data[0].capital[0]}</span>
            </div>
           
            <div class="wrapper_data">
              <h3> Joylashgan qit'a:</h3>
              <span> ${data[0].continents[0]}</span>
           </div>
           
            <div class="wrapper_data">
              <h3> Aholisi:</h3>
              <span> ${data[0].population} ta </span>
            </div>
           
            <div class="wrapper_data">
             <h3> Valyutasi:</h3>
             <span> ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}  </span>
            </div>
           
            <div class="wrapper_data">
              <h3> Umumiy tili:</h3>
              <span> ${Object.values(data[0].languages).toString().split(" , ").join(" , ")}</span>
            </div>
         ` ;      
        }).catch(()=> {
          if(inputValue.length == 0){
            result.innerHTML = `<h4>Kirish maydoni bo'sh bo'lishi mumkin emas</h4>`
          }else{
            result.innerHTML=`<h4>Bunday davlat mavjud emas</h4>`
          }
        })
})