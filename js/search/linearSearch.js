//simplest O(n) for unsorted array
function LinearSearch(inputArr, key){
    for(let i=0;i< inputArr.length ; i++){
        if(inputArr[i] == key){
            return i;
        }
    }
    return -1;
}

module.exports = {
    LinearSearch
}