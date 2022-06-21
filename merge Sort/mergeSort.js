/// Função de juntar os arrays
function merge(arr, inicio, meio, fim){
    /// Define o valor final dos arrays temporaririos
    var n1 = meio - inicio + 1;
    var n2 = fim - meio;
    /// Cria os arrays limitando aos finais
    var esquerda = new Array(n1);
    var direita = new Array(n2);

    /// preenche os arreys temporarios com os valores do array principal 
    for (var i = 0; n1 > i; i++){
        esquerda[i] = arr[i + inicio];
    }
    for (var j = 0; n2 > j; j++){
        direita[j] = arr[j + meio + 1];
    }
    ///reseta as variaveis para serem usadas como index
    var i=0;///array da esquerda
    var j=0;///array da direita
    var k=inicio;///array principal

    /// Compara os valores e reordena no array principal
    while (i < n1 && j < n2) {
        if (esquerda[i] <= direita[j]) {
            arr[k] = esquerda[i];
            i++;
        }
        else {
            arr[k] = direita[j];
            j++;
        }
        k++;
    }
    ///caso falte algum elemento ser adicionado
    while(i < n1){
        arr[k] = esquerda[i];
        i++;
        k++;
    }

    while(j < n2){
        arr[k] = direita[j];
        j++;
        k++;
    }

}

/// Função de dividir o array
function mergeSort(arr, inicio, fim){
    ///enquanto fim for maior haverá a chamada das funções dentro do if
    if (inicio < fim){
        ///define a meio do array
        var meio = Math.floor((fim+inicio)/2);
        /// chama a função até a meio
        mergeSort(arr, inicio, meio)
        /// chama a função começando pelo meio+1
        mergeSort(arr, meio+1, fim)
        /// Finalmente junta as listas e ordena
        merge(arr, inicio, meio, fim)
    }
}


var arr = [ 12, 11, 13, 5, 6, 7 ];
//var arr = [1,5,8,9,-1, 5, 2]
var t = arr.length - 1;
mergeSort(arr, 0, t)
console.log(arr);

  
