CarLot = ( function (carlot) {

  carlot.populatePage = function (inventory) {
    // Loop over the inventory and populate the page
    console.log(inventory)
    var outputElement = document.getElementById("outputElement");
    inventory.cars.forEach( function (car) {
      console.log(car)
      outputElement.innerHTML += `<h1>${car.make}</h1>`

    })
    // Now that the DOM is loaded, establish all the event listeners needed
    // carlot.activateEvents();
    }

carlot.loadInventory(carlot.populatePage)

  return carlot

}(CarLot));


// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();

// populatePage: function  (inventory) {
//   console.log("inside inventory")
//   console.log(inventory)
//   var outputElement = document.getElementById("outputElement");
//   outputElement = [];
//   inventory.forEach( function (car) {
//     outputElement.innerHTML += ` `
//   })
// },