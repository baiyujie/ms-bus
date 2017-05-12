define('services/filterService.ts', function(require, exports, module) {

  "use strict";
  var avalon = require("node_modules/avalon2/dist/avalon");
  avalon.filters.showPrices = function (priceList) {
      var prices = '';
      if (!priceList) {
          return prices;
      }
      for (var i = 0; i < priceList.length; i++) {
          if (i !== 0) {
              prices += '，';
          }
          prices += priceList[i].discount_price + '/' + priceList[i].count_unit;
      }
      return prices;
  };
  avalon.filters.decodeHTML = function (str) {
      return decodeURIComponent(str);
  };
  //# sourceMappingURL=/ms-bus/static/services/filterService.js.map
  

});
