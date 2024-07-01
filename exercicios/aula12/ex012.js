var agora= new Date() //para pegar a hora exata usa essas variaveis
var hora= agora.getHours()

console.log(`Agora sao ${hora} horas`)
if(hora<12 && hora>6){
    console.log('bom dia')
}else if(hora<=18){
    console.log('boa tarde')
}else if(hora<=24){
    console.log('boa noite')
}else{
    console.log('boa madrugada')
}