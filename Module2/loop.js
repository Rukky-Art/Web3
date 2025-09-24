function loops(value, test, update, body){
    let result;
    for(let items of value){
        if(test(items)){
           result = update(items)
           body(result);
        } else{
            return;
        }
        
        
    }
}

loops([3, 2, 1], n => n > 0, n => n - 1, console.log);


function loop2(value, test, update, body){
    for(let i = value; test(i); i = update(i)){
        body(i)
}    
return;
}

loop2(3, n => n > 0, n => n - 1, console.log);

function loop(value, test, update, body){
    if(!test(value)) return;
    body(value)
    loop(update(value), test, update, body )
}

loop(3, n => n > 0, n => n - 1, console.log);