a = [2, 10, 4, 11, 3, 7]

for item in range(1, len(a)):
    # Salva a posição no array
    key = a[item]
    # Volta uma posição no index
    j = item - 1
    # Faz a comparação dos valores
    while j >= 0 and a[j] > key:
        # Faz a substituição do valor da posição seguinte pelo atual
        a[j + 1] = a[j]
        # Volta uma posição no index
        j = j-1
    # Coloca o valor salvo na posição correta (onde para a o while)
    a[j+1] = key

print(a)
    