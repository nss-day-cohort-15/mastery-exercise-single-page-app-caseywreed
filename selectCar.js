CarLot = ( function (carlot) {

  carlot.selectYourCar = function (car, color) {
    resetCars();
    // console.log(car)
    // console.log(color)
    var node = event.target.closest(".singleCar");
    node.classList.toggle("styledCar")


    function resetCars () {
      var cars = document.querySelectorAll(".styledCar")
      console.log("resetCars is running")
      console.log(cars)
      cars.forEach( function (car) {
        console.log("removing styling")
        car.classList.remove("styledCar")
      })
    }

  }

  // carlot.resetTheCars = function () {},

  return carlot

}(CarLot));
