C:\Users\Purushotham\Desktop\OracleJET>node
Welcome to Node.js v12.14.0.
Type ".help" for more information.
> var a  = 5;
undefined
> a
5
>
>
>
> var a = 5;
undefined
> var b = 10;
undefined
> c = a + b;
15
> (a + b) ** 2
225
> a > 45
false
> a > 1 && a < 10
true
> 1 < a < 10
true
> var c = new Number(5)
undefined
> a
5
> c
[Number: 5]
> a == c
true
> a === c
false
> s = "10.45"
'10.45'
> s * 56
585.1999999999999
> parseInt(s) * 56
560
> parseFloat(s) * 56
585.1999999999999
>
> s = "This is a number 14.564"
'This is a number 14.564'
> parseFloat(s)
NaN
> .exit

C:\Users\Purushotham\Desktop\OracleJET>node
Welcome to Node.js v12.14.0.
Type ".help" for more information.
> var s = "javascript"
undefined
> s
'javascript'
> typeof(s)
'string'
> var p = new String('javascript')
undefined
> p
[String: 'javascript']
> typeof(s)
'string'
>
> s == p
true
> s === p
false
> s
'javascript'
> s[2]
'v'
> s[4]
's'
> s[4] = 'r'
'r'
> s
'javascript'
> j[2:5]
Thrown:
j[2:5]
   ^

SyntaxError: Unexpected token ':'
> j(2,5)
Thrown:
ReferenceError: j is not defined
> j[2,5]
Thrown:
ReferenceError: j is not defined
>
> // -------------------------------------------------
undefined
>
> s
'javascript'
> s.length
10
>
> s = "mary had a little lamb"
'mary had a little lamb'
> s
'mary had a little lamb'
> s.length
22
>
> s.search("little")
11
> s = "mary had a little little little lamb"
'mary had a little little little lamb'
> s.search("little")
11
> s.indexOf("little")
11
> s.lastIndexOf("little")
25
> m.slice(11, 16)
Thrown:
ReferenceError: m is not defined
> s.slice(11, 16)
'littl'
> s.slice(11, 17)
'little'
> s.substr(11, 7)
'little '
> s.substring(11, 17)
'little'
>
> s
'mary had a little little little lamb'
> s.replace("lamb", "kitten")
'mary had a little little little kitten'
> s
'mary had a little little little lamb'
> s1 = s.replace("lamb", "kitten")
'mary had a little little little kitten'
> s
'mary had a little little little lamb'
> s1
'mary had a little little little kitten'
>
>
> s.toUpperCase()
'MARY HAD A LITTLE LITTLE LITTLE LAMB'
> s.toLowerCase()
'mary had a little little little lamb'
>
>
> x = '    123.345  ';
'    123.345  '
> x.trim()
'123.345'
>
>
> y = "768"
'768'
> x.concat(y)
'    123.345  768'
> x.trim().concat(y)
'123.345768'
>
> s
'mary had a little little little lamb'
> s.split(' ');
[
  'mary',   'had',
  'a',      'little',
  'little', 'little',
  'lamb'
]
>
> var k = ['sky', 'is', 'blue']
undefined
> k.join('--');
'sky--is--blue'
> .exit


C:\Users\Purushotham\Desktop\OracleJET>node
Welcome to Node.js v12.14.0.
Type ".help" for more information.
> var L = ["red", "blue", "green"]
undefined
> typeof(L)
'object'
> L[0]
'red'
> L[0] = "deepred"
'deepred'
> L
[ 'deepred', 'blue', 'green' ]
>
> L[0]
'deepred'
> L[0][4]
'r'
> L[0][4] = "t"
't'
> L
[ 'deepred', 'blue', 'green' ]
>
> // -------------------------------------------------------
undefined
>
> // ---------------------------------- Adding elements in to the array
undefined
>
> L
[ 'deepred', 'blue', 'green' ]
> L.push("yellow")
4
> L
[ 'deepred', 'blue', 'green', 'yellow' ]
> L.push("golden")
5
> L
[ 'deepred', 'blue', 'green', 'yellow', 'golden' ]
> L.shift("brown")
'deepred'
> L
[ 'blue', 'green', 'yellow', 'golden' ]
> L.unshift("red")
5
> L
[ 'red', 'blue', 'green', 'yellow', 'golden' ]
> L.unshift("brown")
6
> L
[ 'brown', 'red', 'blue', 'green', 'yellow', 'golden' ]
> L.splice(3, 0, 'bluegreen')
[]
> L
[ 'brown', 'red', 'blue', 'bluegreen', 'green', 'yellow', 'golden' ]
>
>
> // ------------------------------------------------ Removing elements
undefined
>
> L.pop()
'golden'
> L
[ 'brown', 'red', 'blue', 'bluegreen', 'green', 'yellow' ]
> L.shift()
'brown'
> L
[ 'red', 'blue', 'bluegreen', 'green', 'yellow' ]
> L.splice(2, 1)
[ 'bluegreen' ]
> L
[ 'red', 'blue', 'green', 'yellow' ]
> L.splice(2, 1, ['black', 'grey', 'white']);
[ 'green' ]
> L
[ 'red', 'blue', [ 'black', 'grey', 'white' ], 'yellow' ]
> L.splice(1, 1, 'lightblue', 'cyan', 'cerulean', 'deepsea')
[ 'blue' ]
> L
[
  'red',
  'lightblue',
  'cyan',
  'cerulean',
  'deepsea',
  [ 'black', 'grey', 'white' ],
  'yellow'
]
> // ---------------------------------------- searching in a array
undefined
>
> L
[
  'red',
  'lightblue',
  'cyan',
  'cerulean',
  'deepsea',
  [ 'black', 'grey', 'white' ],
  'yellow'
]
> L.includes('cyan')
true
> L.indexOf('cyan')
2
> L.find( function(e){ return e == 'deepsea'; } );
'deepsea'
> L.findIndex( function(e){ return e == 'deepsea'; } );
4
> L.push('cyan')
8
> L.findIndex( function(e){ return e == 'deepsea'; } );
4
> L.filter(function(e){ return e == 'deepsea'; });
[ 'deepsea' ]
> L.filter(function(e){ return e == 'cyan'; });
[ 'cyan', 'cyan' ]
> L.filter((e) => e == "cyan");
[ 'cyan', 'cyan' ]
>
> // ------------------------------------------------- reaarange elements
undefined
> L
[
  'red',
  'lightblue',
  'cyan',
  'cerulean',
  'deepsea',
  [ 'black', 'grey', 'white' ],
  'yellow',
  'cyan'
]
> L.splice(5, 1)
[ [ 'black', 'grey', 'white' ] ]
> L
[ 'red', 'lightblue', 'cyan', 'cerulean', 'deepsea', 'yellow', 'cyan' ]
> L.sort()
[ 'cerulean', 'cyan', 'cyan', 'deepsea', 'lightblue', 'red', 'yellow' ]
> L.reverse()
[ 'yellow', 'red', 'lightblue', 'deepsea', 'cyan', 'cyan', 'cerulean' ]
> L
[ 'yellow', 'red', 'lightblue', 'deepsea', 'cyan', 'cyan', 'cerulean' ]
>
>
>
> L = [10, 3, 4, 1, 67, 100]
[ 10, 3, 4, 1, 67, 100 ]
> L.sort()
[ 1, 10, 100, 3, 4, 67 ]
> L.sort((a,b) => (a - b))
[ 1, 3, 4, 10, 67, 100 ]
> L.sort((a,b) => (b - a))
[ 100, 67, 10, 4, 3, 1 ]
>
>
> // --------------------------------------------- iterations
undefined
>
> L.sort((a,b) => (a > b))
[ 100, 67, 10, 4, 3, 1 ]
> L.sort((a,b) => (a < b))
[ 100, 67, 10, 4, 3, 1 ]
> L.sort((a,b) => (b < a))
[ 100, 67, 10, 4, 3, 1 ]
>
>
> L
[ 100, 67, 10, 4, 3, 1 ]
> L.sort((a,b) => (a < b))
[ 100, 67, 10, 4, 3, 1 ]
> L
[ 100, 67, 10, 4, 3, 1 ]
> a < b
Thrown:
ReferenceError: a is not defined
> 10 < 3
false
> 3 < 10
true
>
> 10 - 3
7
> 3 - 10
-7
>
>
> for(item of L){ console.log(item); };
100
67
10
4
3
1
undefined
> L = [ 'red', 'lightblue', 'cyan', 'cerulean', 'deepsea', 'yellow', 'cyan' ]
[ 'red', 'lightblue', 'cyan', 'cerulean', 'deepsea', 'yellow', 'cyan' ]
> for(item of L){
... console.log(item.toUpperCase(), ' ------> ', item.length);
... }
RED  ------>  3
LIGHTBLUE  ------>  9
CYAN  ------>  4
CERULEAN  ------>  8
DEEPSEA  ------>  7
YELLOW  ------>  6
CYAN  ------>  4
undefined
> .exit
