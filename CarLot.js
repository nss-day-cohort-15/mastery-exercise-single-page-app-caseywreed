var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {

    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(event.target.responseText);
        // console.log(inventory)
      })
      inventoryLoader.send();
    }
  };

CarLot.loadInventory()

})();