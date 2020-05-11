class StringManipulation {
    constructor (private strCollection:Array<string>){}

    SortAndReverse() {
        this.strCollection = this.strCollection.sort()
        console.log(strCollection);

        for(let i=0;i<this.strCollection.length; i++) {
            if(this.strCollection[i].length > 10) {
                this.strCollection[i] = this.strCollection[i].split('').reverse().join('');
            }
        }
    }

    GetItems() {
        return this.strCollection;
    }
}

let strCollection: Array<string> = new Array<string>();
strCollection.push("James Bond");
strCollection.push("Ethan Hunt");
strCollection.push("Indiana Jones");
strCollection.push("Jason Bourn");

let sm = new StringManipulation(strCollection)
sm.SortAndReverse();
console.log(sm.GetItems());
