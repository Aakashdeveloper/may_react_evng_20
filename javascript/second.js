function loop(userinput){
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}

function * loop(userinput){
    for(i=0;i<userinput;i++){
        yield(i)
    }
}

var data = loop(10)
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: 5, done: false}
data.next()
{value: 6, done: false}
data.next()
{value: 7, done: false}
data.next()
{value: 8, done: false}
data.next()
{value: 9, done: false}
data.next()
{value: undefined, done: true}