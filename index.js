//a76ae486afb44b3fb35d722e0e4e1d41

let accordion = document.getElementById("accordion");
let searchbtn=document.getElementById("searchbtn");
let searchtxt=document.getElementById("searchtxt");
let spinner=document.getElementById("spinner");
let apiKey = "a76ae486afb44b3fb35d722e0e4e1d41";
let country='in'
rendernews();
searchbtn.addEventListener("click",function(){
  rendernews();
});

function rendernews() {
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        
        let json = JSON.parse(this.responseText);
        let html = "";
        let articles = json.articles;
        articles.forEach(function (element, index) {
            html += `
         <div class="accordion-item">
         <h2 class="accordion-header" id="heading${index+1}">
             <button class="accordion-button" type="button" data-bs-toggle="collapse"
                 data-bs-target="#collapse${index+1}" aria-expanded="true" aria-controls="collapseOne">
                 ${element['title']} 
                 </button>
         </h2>
         <div id="collapse${index+1}" class="accordion-collapse collapse"       aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
             <div class="accordion-body">
              ${element["content"]}....
              <br><a href="${element['url']}" target="_blank">Read More Here</a>
              </div>
         </div>
         </div>`

        });
        accordion.innerHTML=html;
    }
    else {
        console.log("Some error occured")
    }

};
xhr.send();

}