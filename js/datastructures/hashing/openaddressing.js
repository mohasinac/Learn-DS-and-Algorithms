function OpenAddressing(key,table,length,openAddressProbes=null){
    if(!openAddressProbes){
        //Linear probing
        //h(k,i) = (h`(k) + i ) mod m
        for(let i=0;i<length;i++){
            let hash = ((key% 101 )+i) % 101 ;
            if(table[hash] != null){
                collision = true;
                continue
            }
            else{
                table[hash] = key
                break;
            }
        }
    }
    else{
        //probes given
        let collision = false;
        for(let i of openAddressProbes){
            let hash = key % 101 + i;
            if(table[hash] != null){
                collision = true;
                continue
            }
            else{
                table[hash] = key
                break;
            }
        }
    }
}

function DoubleHashing(key,table,i){
    //1st hash is modulo
    //second hash is multiplication
    // double hashing [h1(k) + i *h2(k) ] mod m
    h1 = key % 101
    h2 = Math.floor( 101 * (key * 0.621 )% 1);
    return (h1 + i * h2 )  % 101
}


function QuadraticProbing(key,table){
    // [ h`(k) + (c1 * i + c2 * i2 ^ 2 )] mod m
    // c2 ! = 0
    let c1 = 1;
    let c2 = 5;
    let h1 = key % 101;
    for(let i=0;i< 101 ;i ++){
        let hash = (h1 + ((c1 * i) + (c2* Math.pow(i,2))) % 101;
        if(table[hash]){
            continue;
        }
        else{
            table[hash] = key;
        }
    }
}
module.exports = {
    OpenAddressing,
    DoubleHashing,
    QuadraticProbing
}