function carregar(){
    var data= new Date()
    var hora=data.getHours()
    //var hora=10
    var msg=document.querySelector('div#msg')
    var img=document.querySelector('img#imagem')
    msg.innerHTML=`Agora são ${hora} horas`
    if(hora>=6 && hora<12){
        img.src='imagens/manha.jpg'
        document.body.style.background='#FCB2BD'
    }else if(hora>=12 && hora<18){
        img.src='imagens/tarde.jpg'
        document.body.style.background='#F3B176'
        
    }else{
        img.src='imagens/noite.jpg'
        document.body.style.background='#071C1F'
    }
}