var itens = [
    {"name": "obj1",
    "preco": 80
},
{"name": "obj2",
"preco": 120
},
{"name": "obj3",
"preco": 150
}
]

/* Challenge

var itemsComDesconto = []

for (var i = 0; i < items.length; i++){
    var item = items[i]
    if (item.preco > 100){
        item.preco = item.preco * 0.8
    }
    console.log(item.preco)
    itemsComDesconto.push(item)
}

*/

// My response

var itensComDesconto = itens.map(item => item.preco > 100 ? {...item, preco: item.preco *0.8}: item)

/* Concepts used
    .map
        Execute a talkback function for each array element 

    arrow function
        expression is a compact alternative to a traditional function expression

    operator ternary
        Expression that replaces the expression "IF" passing as an element the condition, assignment if true and assignment if false
    
    spread
        Syntax that allows you to include all elements of the "itens" object and replace the value of a specific key of this newly created object
*/
