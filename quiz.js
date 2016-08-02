CarLot = ( function (carlot) {

  carlot.populatePage = function (inventory) {
    // Loop over the inventory and populate the page
    // console.log(inventory)
    var outputElement = document.getElementById("outputElement");


    inventory.cars.forEach( function (car) {
      // console.log(car)
      outputElement.innerHTML += `
        <article class="col-md-3 col-md-3-offset-1 singleCar carSelectField" style="border: 6px solid ${car.color}">
        <table class="table table-striped carSelectField">
        <tr><td class="carSelectField"><span class="bold">Make:</span> ${car.make}</td></tr>
        <tr><td class="carSelectField"><span class="bold">Model:</span> ${car.model}</td></tr>
        <tr><td class="carSelectField"><span class="bold">Year:</span> ${car.year}</td></tr>
        <tr><td class="carSelectField"><span class="bold">$${car.price}</span></td></tr>
        <tr><td class="carSelectField"><span class="bold">Color:</span> ${car.color}</td></tr>
        <tr><td class="carSelectField"><span class="bold">Purchased:</span> ${car.purchased}</td></tr>
        <tr><td class="carSelectField"><span class="bold">Description:</span> <span class="description">${car.description}</span></td></tr>
        </table>
        </article>
      `

    })
  carlot.activateEvents = function () {
     var singleCar = document.querySelectorAll(".carSelectField")
     var input = document.getElementById("userInput")
     // console.log(singleCar)
     singleCar.forEach( function (car) {
      // console.log("looping through carSelectField")
      car.addEventListener("click", e => {
        // resetCars();
        carlot.selectYourCar(e.target, '#FFA000')
        input.value = "";
        input.focus();
      })
      // car.addEventListener("click", function (evt) {console.log(evt)})
     })
    }
    // Now that the DOM is loaded, establish all the event listeners needed
    carlot.activateEvents();
    }

carlot.loadInventory(carlot.populatePage)

  return carlot

}(CarLot));


// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();