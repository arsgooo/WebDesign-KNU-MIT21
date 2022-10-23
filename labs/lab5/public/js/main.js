let item;
const result = document.getElementById("result");

function buttonClick() {
  fetch("http://localhost:3000/headphones")
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      let headphonesArray = JSON.parse(text);
      headphonesArray.forEach((element) => {
        item = document.createElement("div");
        item.innerHTML = `<div>
                            <img src = ${element.image_link}><br>
                            <span>${element.id}</span> 
                            <h3>${element.title}</h3> 
                            <p>${element.type}</p>
                          </div>`;
        result.appendChild(item);
      });
    });
}
