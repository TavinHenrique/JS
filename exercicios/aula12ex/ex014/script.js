function carregar(){
    var msg=document.querySelector('div#msg')
    var img=document.querySelector('img#imagem')
    var data=new Date()
    var hora=data.getHours()
    //var hora=10
    msg.innerHTML=`Agora são ${hora} horas`
    if(hora>=0 && hora<12){
        img.src='imagens/manha.jpg'
        document.body.style.background='#FFB0B8'
    }else if(hora>=12 && hora<18){
        img.src='imagens/tarde.jpg'
        document.body.style.background='#FEC5A6'
    }
    else{
        img.src='imagens/noite.jpg'
        document.style.body.background='#071D1B'
    }
        
}