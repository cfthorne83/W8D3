Array.prototype.uniq = function(){
    let uniq_vals = [];
    for (let i = 0; i < this.length; i++) {
        if (!(uniq_vals.includes(this[i]))){
            uniq_vals.push(this[i]);
        }
    }
    return uniq_vals;
}

Array.prototype.twoSum = function(){
    let result = [];
    for (let i = 0; i < this.length - 1; i++) {
        let pair = [];
        for (let j = i + 1; j < this.length; j++){
            if (this[i] + this[j] === 0 ){
                pair.push(i);
                pair.push(j);
            }
        }
        if (pair.length === 2){
            result.push(pair);
        }
    }
    return result;
}

Array.prototype.transpose = function() {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push([]);
    };

    for (let i = 0; i < this.length; i++) {
        let inner = this;
        for (let j = 0; j < inner.length; j++) {
            newArray[j].push(inner[i][j]);
        };
    };

    return newArray;
}


function logIfEven(num) {
    if (num % 2 === 0) {
        return num;
    }
}

Array.prototype.myEach = function(callback){

    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback){
    newArray = [];
   this.myEach(callback){
        
    }
}



