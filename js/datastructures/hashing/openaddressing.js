function OpenAddressing(key,table,length,openAddressProbes=null){
    if(!openAddressProbes){
        //Linear probing
        for(let i=0;i<length;i++){
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

module.exports = {
    OpenAddressing
}