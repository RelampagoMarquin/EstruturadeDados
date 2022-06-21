let a = [2, 10, 4, 11, 3, 7];

function insertSort(a) {
    for (let j = 1; j < a.length; j++) {
        // Salva a a posição no array
        let key = a[j]
        // Volta uma posição no index
        let i = j - 1
        // Faz a comparação dos valores
        while ((i >= 0) && (a[i] > key)) {
            // Faz a substituição do valor da posição seguinte pelo atual
            a[i + 1] = a[i]
            // Volta uma posição no index
            i = i - 1
        }
        // Coloca o valor salvo na posição correta (onde para a o while)
        a[i + 1] = key
    }
    return a;
}

insertSort(a)
console.log(a);