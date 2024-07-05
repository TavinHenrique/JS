function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano=document.getElementById('txtano')
    var msg =document.querySelector('div#msg')
    if(fano.value.length==0 || Number(fano.value)>ano)
        {alert('Verique os dados e tente novamente')}
    else{
        var fsex=document.getElementsByName('sex')
        var idade= ano- Number(fano.value)
        var genero=""
        var img=document.createElement('img')//cria elemento novo
        img.setAttribute('id', 'foto')//coloca id,class,...
        if(fsex[0].checked){
            genero='homem'
            if(idade>=0 && idade<=13)
                {
                    //criança
                    img.setAttribute('src', 'imagens/menino.jpg')
                }else if(idade<=24){
                    //jovem
                    img.setAttribute('src', 'imagens/menino21 (1).jpg')
                }else if(idade<=45){
                    //adulta
                    img.setAttribute('src', 'imagens/cara30 anos.jpg')
                }else{
                    //velho
                    img.setAttribute('src', 'imagens/veio55anos.jpg')
                }
        }else{
            genero='mulher'
            if(idade>=0 && idade<=13)
                {
                    //criança
                    img.setAttribute('src', 'imagens/menina.jpg')
                }else if(idade<=24){
                    //jovem
                    img.setAttribute('src', 'imagens/menina21.jpg')
                }else if(idade<=45){
                    //adulta
                    img.setAttribute('src','imagens/mulher30anos.jpg')
                }else{
                    //velha
                    img.setAttribute('src','imagens/veia55anos.jpg')
                }
        }
        msg.style.textAlign='center'
        msg.innerHTML=`Você é ${genero} com ${idade} anos`
        msg.appendChild(img)//adc imagem 
    }
}