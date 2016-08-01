CarLot = ( function (carlot) {

  carlot.selectYourCar = function (car, color) {
    console.log(car)
    console.log(color)
    var node = car.parentNode;
    console.log(node)
    // while (node != null) {
    //   console.log("inside the node loop")
    //   if (node.classList) {
    //     console.log("inside node loop class list section")
    //     if (node.classList.contains("singleCar")) {
    //       console.log("ALTER THE DAMN CAR")
    //     }
    //   }
    // }
    // while (node != null) {
    //   console.log("node is not null")
    //   // If a class exists on the current node
    //   if (node.classList) {
    //     // Traversed to a 'car'
    //     if (node.classList.contains('singleCar')) {
    //       console.log("inside the SINGLECAR node loop")
    //       node.style.border = '6px solid';
    //       node.style.backgroundColor = color;
    //       break;
    //     }
    //   }
    // }
  }

  // carlot.resetTheCars = function () {},

  return carlot

}(CarLot));
