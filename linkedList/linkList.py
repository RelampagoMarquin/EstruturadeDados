class Node:
    # Cria o node
    def __init__(self, data):
        self.data = data  # salva o dado
        self.proximo = None  # inicializa o proximo como null
  
# Linked List class
class LinkedList:
    
    # Cria a Linked List
    def __init__(self): 
        self.head = None

    # Adiciona um node no começo
    def start(self, novoDado):
  
        # 1 & 2: adiciona o node e adiciona o dado
        new_node = Node(novoDado)
          
        # 3. coloca o proximo como o valor delarado no head
        new_node.proximo = self.head
          
        # 4. coloca o head como o objeto
        self.head = new_node

    # Essa função adiciona após o node anterior fornecido
    def insertAfter(self, prev_node, novoDado):
  
        # 1. Se não exisit o nodeo anterior ele retorna
        if prev_node is None:
            print("O node fornecido não existe")
            return
  
        #  2. Cria um novo node e adiciona o dado
        new_node = Node(novoDado)
  
        # 4. coloca o proximo do novo com o anterior
        new_node.proximo = prev_node.proximo
  
        # 5. coloca o proximo do anterio como o novo
        prev_node.proximo = new_node

    # adiciona o um novo node no final
    # defined inside LinkedList class shown above */
    def insert(self, new_data):
  
        # 1. Cria um novo node
        # 2. Adiciona o dado
        # 3. coloca o procimo como node
        new_node = Node(new_data)
  
        # 4. Se não tiver nada no começo na LL cria um node e aponta o começo
        if self.head is None:
            self.head = new_node
            return
  
        # 5. se não tiver ele percorre todo o node ate o ultimo elemento
        last = self.head
        while (last.proximo):
            last = last.proximo
  
        # 6. Muda o proximo do ultimo node
        last.proximo =  new_node
    

    # Passando o head da LL e uma chave
    # Deleta a primeira ocorrencia do valor na lista
    def deleteNode(self, key):
         
        # Armazena o head
        temp = self.head
 
        # Se o head é o valor da cahve ser deletado
        if (temp is not None):
            if (temp.data == key):
                self.head = temp.proximo
                temp = None
                return
 
        # Procura a a chave para deletar, e continua até
        # o node anterios para mudar o prev.proximo
        while(temp is not None):
            if temp.data == key:
                break
            prev = temp
            temp = temp.proximo
 
        # Se a chave não estiver presenter ele retona
        if(temp == None):
            return
 
        # node sem link
        prev.proximo = temp.proximo
        temp = None

    # Enquanto houver elementos ele faz o print
    def printList(self):
        temp = self.head
        print('A lista criada é: ')
        while (temp):
            print (temp.data)
            temp = temp.proximo


llist = LinkedList()
# Insert 6.  ll = 6->None
llist.insert(6)
  
# Insert 7 no começo. ll = 7->6->None
llist.start(7)
  
# Insert 1 no começo. ll = 1->7->6->None
llist.start(1)
  
# Insert 4 no final. ll = 1->7->6->4->None
llist.insert(4)
  
# Insert 8, depois do 7. ll = 1 -> 7-> 8-> 6-> 4-> None
llist.insertAfter(llist.head.proximo, 8)
llist.printList()

# Deletando o 6
llist.deleteNode(6)
llist.printList()