function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

function LinkedList() {

    this.begin = null;
    this.end = null;
    this.length = 0;

    this.size = function () {
        return this.length;
    }
    this.add = function (element) {
        const node = new Node(element);
        if(!this.begin) {
            this.begin = node;
            this.end = node;
        } else {
            let current = this.begin;
            while(current.next) {
                current = current.next;
            }
            this.end = node;
            current.next = node;
            node.prev = current;
        }
        this.length++;
        return node.element;
    }
    this.remove = function (element) {
        let current = this.begin;
        let previous = null;
        if(current.element == element) {
            this.begin = current.next;
            current.prev = null;
            if(this.end == current){
                this.end = null
            }
        } 
        else if(this.end.element == element){
            this.end = this.end.prev
            this.end.next = null
        }
        else {
            while(current && element != current.element ) {
                previous = current;
                current = current.next;
            }
            if(current) {
                let next = current.next;
                previous.next = next;
                next.prev = current.prev;
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
        if(!(this.size() > index)) {
           throw "Index out of bound"; 
        }
        let current = this.begin;
        let count = 0;
        while(count < index) {
            count++;
            current = current.next;
        }
        return current.element;
    }
    this.removeAt = function (index) {
        if(!(this.size() > index)) {
            throw "Index out of bound"; 
        }
        let current = this.begin;
        let previous = null;
        let count = 0;
        if(index == 0) {
            this.begin = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            return current.element;
        }
        this.length--;
    }
    this.indexOf = function (element0) {
        let index = 0;
        for(let element of this){//com iterator
            if(element == element0) {
                return index;
            }
            current = element
            index ++;
        }
        return -1;
    }
    this.addAt = function (index, element) {
        let current = this.begin;
        let previous;
        let count = 0;
        while(count < index) {
            count++;
            previous = current;
            current = current.next;
            if(!current){
                console.log("criando node")
                current = new Node();
                previous.next = current;
                current.prev = previous
                this.end = current 
                this.length++;
            }
        }
        /*if(index == 0){
            this.begin 
        }*/
        if(count < this.length) {
            let node = new Node(element)
            node.next = current;
            current.prev = node
            if(index > 0){
                previous.next = node;
            }else{
                this.begin = current
            }
            
            node.prev = previous
            this.length++;
        } else {
            current.element = element;
        }
    }
    this[Symbol.iterator] = function(){
        var current = this.begin
        return {
            next: ()=>{
                if(current){
                result = {
                    value: current.element,
                    done:false
                }
                current = current.next
                return result
            } else{
                return {done:true}
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

// console.log("Teste removeAt")
const list = new LinkedList();
list.add(90)
list.add(100)
list.add(101)

list.addAt(0, 150)
list.addAt(2, 50)
list.addAt(10, 10)
list.remove(100)

for(let e of list){
    
    console.log(e)
}

//list.addAt(2, 900)
//console.log(list.elementAt(0));
//console.log(list.elementAt(1));
//console.log(list.elementAt(2));
//console.log(list.elementAt(3));

//console.log("Teste iterator")
//for(let element of list){
//    console.log(element)
//}

// console.log(list.elementAt(4));
// console.log(list.elementAt(5));

/*
console.log("Teste IndexOf")
console.log(list.indexOf(101))*/

