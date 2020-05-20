Es5
Es6
Es7
> Ecam Script

DataTypes
String = "jhjy" 'john' '39' "40" 'true'
Number = 8457 38758437689 946.6436
Boolean true false
-----------
null
undefined
---------------

//////////////
//Es5
var  > We can reDeclare and reassign 

//Es6 
let  > we cannot redecalre but can reassign
const > we cannot redecalre nor reassign

>>>>>>>>>>>><<<<<<<<<
var a = 10;

var a >>>>> Declare a variable
a = 10 >>>> asssignment


> var a = 10
undefined
> a
10
> 
> var a = 20
undefined
> a
20
> a = 30
30
> a
30
> 

/////////////////////
//es5
function add(a,b){
    return a+b
}
add(1,2)
3

//es6
const add = (a,b) => {return a+b}
add(1,2)
3


////////////
//es5
var age = 10
var output = "my age is "+age
"my age is 10"

//es6(string literals)
let age = 10
let outptu = `my age is ${age}`
"my age is 10"

function sub(a,b){
    return a-b
}

/////////
JSX> Javascript XML
function hi(){
    return "<h1>Hi To Js</h1>"
}



/////classes///

/////////
////Component Base
//////////

Functional        ClassBase
Light In weight   Hevay as compare to function
dumb              logical
cannot state      can maintain state
Display           logical


//Es5
function language(name,country){
    this.name = name
    this.country = country
}

ProtoType
var Hindi = new language('Hindi',"India")

//Es6
class geo{
    constructor(lat,long){
        this.lat = lat
        this.long = long  
    }
}


class language1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name
        this.country = country 
    }
}

var English = new language1('English',"USA")