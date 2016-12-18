// function calculatorCreator(number) {
//     var _prod = number * 2;

//     return {
//         prod : _prod,
//         doIt: function() {
//         console.log(prod);
//     }
// }
// }


var ts = (function() {
    var _tax   = 1.09,
        _trk55 = 0;

    return {
        trk55 : _trk55,
        tax   : _tax,
        
        
        calc  : function(number) {
            console.log(this.tax);

            var sum = parseFloat(number + this.trk55);
            console.log(sum);

            var total = sum * this.tax;

            console.log('$' + sum.toFixed(2));
        }
    }
})();

var budgetController = (function() {
    var x = 23; 
    var add = function(a) {
        return x + a;
    };

    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }
})();

// console.dir(ts);

