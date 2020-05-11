var StringManipulation = /** @class */ (function () {
    function StringManipulation(strCollection) {
        this.strCollection = strCollection;
    }
    StringManipulation.prototype.SortAndReverse = function () {
        this.strCollection = this.strCollection.sort();
        console.log(strCollection);
        for (var i = 0; i < this.strCollection.length; i++) {
            if (this.strCollection[i].length > 10) {
                this.strCollection[i] = this.strCollection[i].split('').reverse().join('');
            }
        }
    };
    StringManipulation.prototype.GetItems = function () {
        return this.strCollection;
    };
    return StringManipulation;
}());
var strCollection = new Array();
strCollection.push("James Bond");
strCollection.push("Ethan Hunt");
strCollection.push("Indiana Jones");
strCollection.push("Jason Bourn");
var sm = new StringManipulation(strCollection);
sm.SortAndReverse();
console.log(sm.GetItems());
