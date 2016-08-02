CarLot = ( function (carlot) {

  carlot.selectYourCar = function (car, color) {
    resetCars();
    var node = event.target.closest(".singleCar");
    node.classList.toggle("styledCar")
    node.style.borderWidth = "12px";
    // carlot.editYourCar(node)


    function resetCars () {
      var cars = document.querySelectorAll(".styledCar")
      cars.forEach( function (car) {
        // console.log(car)
        car.classList.toggle("styledCar")
        car.style.borderWidth = "6px";
      })
    }

  }

  carlot.editYourCar = function (car) {
    userText = document.getElementById('userInput').value;
    selectedCar = document.querySelector('.styledCar')
      if ( selectedCar == null && userText !== "" ) {
        alert("Please select a car!");
      } else {
        descriptionField = document.querySelector('.styledCar .description');
        // console.log(selectedCar)
        // console.log(userText)
        console.log(descriptionField)
        descriptionField.innerText = userText
      }
}

document.addEventListener("keydown", carlot.editYourCar);
document.addEventListener("keyup", carlot.editYourCar);


  return carlot

}(CarLot));
