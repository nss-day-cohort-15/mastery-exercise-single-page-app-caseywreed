CarLot = ( function (carlot) {

  carlot.populatePage = function (inventory) {
    // Loop over the inventory and populate the page
    carlot.getInventory()
    var outputElement = document.getElementById("outputElement");
    inventory.forEach( function (car) {
      car.model

    })
    // Now that the DOM is loaded, establish all the event listeners needed
    carlot.activateEvents();
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