// Metodo de recursividade de "divide o array"
const quickSOrtImpl = (arr, start, end) => {
    // Se o start for maior que o end para a execução
    if(start>=end) return;
    // Retorna o pivo
    let indePivo = partition(arr, start, end);
    // Chama o metodo para o que for menor que o pivo
    quickSOrtImpl(arr, start, indePivo - 1);
    //  Chama o metodo para o que for maior que o pivo
    quickSOrtImpl(arr, indePivo + 1, end);

    return arr;
}

const partition = (arr, start, end) => {
    // Armazena a ultima posição como o pivo
    const valorPivo = arr[end];
    // Difine que i esta fora do array
    let i = start - 1;
    // Comparação
    for (let j = start; j<= end-1; j++){
        // Entra no array se a x for maior que a posição j
        if(arr[j] < valorPivo){
            i++;
            // ALtera a posição no array
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
    [arr[i+1], arr[end]] = [arr[end], arr[i+1]];
    return i+1;
}

arr = [1,6,9,2,10,3,6]
quickSOrtImpl(arr, 0, arr.length - 1)
console.table(arr)