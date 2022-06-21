def fib(num):
    lista = []
    ##condição de parada, se tirar fica infinito
    if(num <= 1):
        return 1
    ##Vai puxando ate chegar na estapa de parada (o que ele sabe)
    return fib(num-2) + fib(num-1)

print(fib(31))