#função de juntar
def merge(arr, inicio, metade, fim):
    n1 = metade - inicio + 1
    n2 = fim - metade
    #declara o tamanho do arr de L=esquerda=(n1+1) e R=direita=(n2+1)
    esquerda = [0] * (n1)
    direita = [0] * (n2)
    #Substitiui o range do array esquerda e direita
    #Pelos respectivos do arr principal
    for i in range(0, n1):
        esquerda[i] = arr[inicio + i]

    for j in range(0, n2):
        direita[j] = arr[metade + 1 + j]

    # Reseta as variaveis para serem usados como index dos arrey
    i = 0 
    j = 0
    k = inicio # index do arrey principal

    # Compara os valores e ordena no arrey principal
    while (i < n1 and j < n2):
        if (esquerda[i] <= direita[j]):
            arr[k] = esquerda[i]
            i+=1
        else:
            arr[k] = direita[j]
            j+=1
        k+=1

    # Se faltou algum elemento será executado para completar o principal
    while(i < n1):
        arr[k] = esquerda[i]
        i+=1
        k+=1

    while(j < n2):
        arr[k] = direita[j]
        j+=1
        k+=1

#Função que faz a divisão do arrey
def mergeSort(arr, inicio, fim):
    #vai repetir ate que fim seja maior
    if (inicio<fim):
        #divide o array no meio e math.floor ou // arredonda(pra baixo) a lista
        metade=(inicio+fim)//2
        #Metade determina o fim do arr, divindo o array
        mergeSort(arr, inicio, metade)
        #Metade determina o começo arr, pegando a outra metade do arr
        mergeSort(arr, metade+1, fim)
        #chama a função de juntar
        merge(arr, inicio, metade, fim)

a=[1,5,8,9,-1, 5, 1.2, 2]
t = len(a)-1
mergeSort(a, 0 , t)
print(a)