//h(k) = k mod m
/*
    m should a prime number ideally and not be a power of 2
*/
function ModuloHashFunction(key,m = 101){
    return key % m;
}