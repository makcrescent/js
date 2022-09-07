const numbers = [1,2,3,4,5,6,7,8,9,10];

const squares = numbers.map(num=>num*num)
console.log(squares)
myname = 'muhammad aslam khan'
function titleCase(myname){
    return myname.split(' ').map(nm=>nm[0].toUpperCase()+nm.slice(1)).join(' ')
}
console.log(titleCase(myname))
