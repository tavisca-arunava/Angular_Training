var StringOperations = /** @class */ (function () {
    function StringOperations(str) {
        this.str = str;
    }
    StringOperations.prototype.FindIndex = function (c) {
        var indx = [];
        for (var i = 0; i < this.str.length; i++) {
            if (this.str[i] === c)
                indx.push(i);
        }
        console.log("Occurance of '" + c + "' in the string is " + indx.length);
    };
    StringOperations.prototype.FindStatement = function () {
        var indx = [];
        for (var i = 0; i < this.str.length; i++) {
            if (this.str[i] === '.')
                indx.push(i);
        }
        console.log("Total statements in the string is " + indx.length);
    };
    StringOperations.prototype.ConvertToUpper = function () {
        var newStr = [];
        var setUpper = false;
        newStr[0] = this.str.charAt(0).toUpperCase();
        for (var i = 1; i < this.str.length; i++) {
            if (this.str[i] === '.') {
                setUpper = true;
                newStr.push(this.str[i]);
                continue;
            }
            if (setUpper && this.str[i] !== ' ') {
                newStr.push(this.str.charAt(i).toUpperCase());
                setUpper = false;
            }
            else {
                newStr.push(this.str[i]);
            }
        }
        console.log("Statement after converting -->>  " + newStr.join(''));
    };
    return StringOperations;
}());
var str = 'lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    'lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
    'it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' +
    'it was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ';
var strObj = new StringOperations(str);
strObj.FindIndex('a');
strObj.FindStatement();
strObj.ConvertToUpper();
