CarLot = ( function (carlot) {

  carlot.selectYourCar = function (car, color) {
    resetCars();
    var node = event.target.closest(".singleCar");
    node.classList.toggle("styledCar")
    node.style.borderWidth = "12px";


    function resetCars () {
      var cars = document.querySelectorAll(".styledCar")
      cars.forEach( function (car) {
        console.log(car)
        car.classList.toggle("styledCar")
        car.style.borderWidth = "6px";
      })
    }

  }

  return carlot

}(CarLot));
