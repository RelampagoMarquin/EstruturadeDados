from random import randint, random

# Metodo de recursividade de "divide o array"
def quickSort(arr, p, r):
    if(p < r):
        # Retorna o pivo
        q = partition(arr, p, r)
        # Chama o metodo para o que for menor que o pivo
        quickSort(arr, p, q-1)
        # Chama o metodo para o que for maior que o pivo
        quickSort(arr, q+1, r)

def partition(arr, p, r):
    # Armazena a ultima posição como o pivo
    x = arr[r]
    # Difine que i esta fora do array
    i = p-1
    j = p
    # Comparação
    while j <= r-1:
        # Entra no array se a x for maior que a posição j
        if (arr[j] <= x):
            i = i+1
            # Alterando as posições com variaveis
            ai = arr[i]
            aj = arr[j]
            arr[i] = aj
            arr[j] = ai
        j = j+1
    # Forma alterar as posições sem criar variaveis 
    arr[i+1], arr[r]=arr[r], arr[i+1]
    return i+1
    
    #pivo = randint(p, r)

arr = [1,5,8,10,11,0,6]
quickSort(arr, 0, len(arr)-1)
print(arr)