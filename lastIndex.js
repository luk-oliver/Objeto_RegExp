var str =  'O pato chato atalou no atoleiro no primeiro ato'
var padrao = /ato/g
while(padrao.test(str) === true){
console.log(padrao.lastIndex)
}