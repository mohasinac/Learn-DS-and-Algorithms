/*
    Huffman Coding For Data Compression

    Find characters which occur least number of times (least frequently)
    A 5, B 25 , C 7 ,D 15,E 4,F 12
    total space : 204 bits required if each has 3 bits length

    create tree with child with two smallest children repeatedly
    and combine time
    EA 9, B 25, C 7,D 15, F 12
    EAC 16, B 25, D 15, F 12
    EAC 16, B 25, DF 27
    EACB 41 , DF 27
    EACFDB 68

    root is 1
    each left child is 0 and each right child is 1
    so based on each item node in the tree we can save the item
    A : 1011 4 bits
    B : 11 2 bits
    C :  100 3 bits
    D : 01 2 bits
    E : 1010 : 4 bits
    F : 00 2 bits
    this is a variable length representation as every character is rep by different number of bits
    this is variable length huffman encoded
    now bits needed is 161 bits

    run n times and pick two least frequent each iteration , min-heap so the order is 
    O(nlogn)
*/