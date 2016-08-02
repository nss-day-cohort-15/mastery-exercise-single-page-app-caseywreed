CarLot = ( function (carlot) {

  carlot.populatePage = function (inventory) {

    var outputElement = document.getElementById("outputElement");

    inventory.cars.forEach( function (car) {
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
     singleCar.forEach( function (car) {
      car.addEventListener("click", e => {
        carlot.selectYourCar(e.target, '#FFA000')
        input.value = "";
        input.focus();
      })
     })
    }
    carlot.activateEvents();
    }

carlot.loadInventory(carlot.populatePage)

  return carlot

}(CarLot));
