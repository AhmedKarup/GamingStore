function testContact() {

  var productName = localStorage['PRODUCT_NAME'];

  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;


  if (name.length == 0) {
    alert("Ime je prazno!")
  } else if (lastName.length == 0) {
    alert("Prezime je prazno!")
  } else if (email.length == 0) {
    alert("Email je prazan")
  } else if (phone.length == 0) {
    alert("Polje broj je prazno")
  } else {
    alert(`Proizvod ${productName} je uspjesno narucen!`)
  }
}


function buyProduct(name) {
  localStorage.setItem("PRODUCT_NAME", name);

  window.location.href = "Kontakt.html"
}

function setName() {

  var productName = localStorage['PRODUCT_NAME']

  document.getElementById("title").innerHTML = "ZAHTJEV ZA KUPNJU PROIZVODA  <br> " + productName;
}



