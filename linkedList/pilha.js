function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

function Pilha() {
    this.begin = null;
    this.end = null
    this.length = 0;

    this.size = function () {
        return this.length;
    }
    this.push = function (element) {
        const node = new Node(element);
        if (!this.begin) {
            this.begin = node;
            this.end = node;
        } else {
            let current = this.begin;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
            this.end = node;
        }
        this.length++;
        return node.element;
    }
    this.pop = function () {
        if (this.end) {
            if(this.end.next){
                this.end.next = null
            }else{this.begin= null}
            this.end = this.end.prev
            
        }else{
            throw 'Pilha vazia'
        }
        this.length-=1;
        return this.length
    }
    this.remove = function (element) {
        let current = this.begin;
        let previous = null;
        if (current.element == element) {
            this.begin = current.next;
        } else {
            while (current && element != current.element) {
                previous = current;
                current = current.next;
            }
            if (current) {
                previous.next = current.next;
            } else {
                throw "Element not found"
            }
        }
        this.length--;
    }
    this.isEmpty = function () {
        return this.size == 0;
    }
    this.elementAt = function (index) {
        //sÃ³ deve procurar se this.size() > index
        // (this.size() <= index) == !(this.size() > index)
        if (!(this.size() > index)) {
            throw "Index out of bound";
        }
        let current = this.begin;
        let count = 0;
        while (count < index) {
            count++;
            current = current.next;
        }
        return current.element;
    }
    this.removeAt = function (index) {
        if (!(this.size() > index)) {
            throw "Index out of bound";
        }
        let current = this.begin;
        let previous = null;
        let count = 0;
        if (index == 0) {
            this.begin = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            return current.element;
        }
        this.length--;
    }
    this.indexOf = function (element) {
        let current = this.begin;
        let index = 0;
        while (current != null) {
            if (current.element == element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    this.addAt = function (index, element) {
        let current = this.begin;
        let previous;
        let count = 0;
        while (count < index) {
            count++;
            previous = current;
            current = current.next;
            if (!current) {
                console.log("criando nÃ³")
                current = new Node();
                previous.next = current;
                this.length++;
            }
        }
        if (count < this.length) {
            let node = new Node(element)
            node.next = current;
            previous.next = node;
            this.length++;
        } else {
            current.element = element;
        }
    }
    this[Symbol.iterator] = function () {
        current = this.begin
        return {
            next: () => {
                if (current) {
                    result = {
                        value: current.element,
                        done: false
                    }
                    current = current.next
                    return result
                }
                else {
                    return { done: true }
                }
            }
        }
    }
}


// console.log("Teste removeAt")
// const list = new LinkedList();
// list.add(90)
// list.add(100)
// list.add(101)
// list.removeAt(1);
// console.log(list.elementAt(1) == 101);
/*
console.log("Teste removeAt")
const list = new Pilha();
list.push(90)
list.push(100)
list.push(101)
for (let e of list) {
    console.log(e)
}
//list.pop()
list.pop()
list.pop()
list.pop()

for (let e of list) {
    console.log(e)
}*/


console.log('teste de parenteses')
let a = '((()))'
let pilha = new Pilha()
for (e of a) {
    if (e == '(') {
        pilha.push(e)
    } else if (e == ')') {
        pilha.pop()
    }
}
if (pilha.size() > 0) {
    console.log('OS PARENTESES NÃO ESTÂO CORRETOS')
    console.log('HÁ: '+pilha.length+' PARENTESE(S) ABERTO(S)')
} else {
    console.log('OS PARENTESES ESTÃO CORRETOS')
}
// console.log(list.elementAt(4));
// console.log(list.elementAt(5));
