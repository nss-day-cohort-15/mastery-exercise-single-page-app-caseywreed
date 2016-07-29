var CarLot = (function () {

  var inventory = [];

  return {

    loadInventory: function (callback) {
      console.log(callback)
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(event.target.responseText);
        callback(inventory);
      })
      inventoryLoader.send();
    },

    getInventory: function () {
      console.log(inventory)
      return inventory
    },
  }; //END OF RETURN



})();