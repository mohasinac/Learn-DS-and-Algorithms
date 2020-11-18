/*
    A has to be between 0 and 1
    m has to be an exponent of 2 making the computation easy
    h(k) = Math.floor( m * (k*A mod 1)) 
    mod 1 means the fractional part
    e.g. kA = 2.621
    then mod 1 is 0.621
    when m is power 2 then the bit operations would be very fast
    best values for A comes from golden ratio
*/

function MultiplicationHashFunction(key,m=64,A=0.618){
    if(A >0 && A < 1){
        h = Math.floor( m* (key * A)% 1)
    }
    else{
        return 'ERROR';
    }
}