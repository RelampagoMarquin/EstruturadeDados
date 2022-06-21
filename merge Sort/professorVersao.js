const merge = (ae, ad) => {
    const arr = [];
    while(ae.length > 0 && ad.length > 0){
        //vai adicinonar ao arrey e o "shift()" vai remover da lista temporaria, deixando sempre 0
        arr.push(
            ae[0] > ad[0] ? ad.shift() : ae.shift()
        )
    }

    while(ae.length > 0){
        arr.push(ae.shift())
    }

    while(ad.length > 0){
        arr.push(ad.shift())
    }
    return arr
}

const mergeSort = (a) => {
    if (a.length < 2) return a;

    const meio = Math.floor(a.length/2);

    let ae = a.slice(0, meio);
    let ad = a.slice(meio, a.length);

    return merge(ae, ad)

}

// var arr = [ 12, 11, 13, 5, 6, 7 ];
var arr = [1,5,8,9,-1, 5, 2]
console.log(mergeSort(arr));