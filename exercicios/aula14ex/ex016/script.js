function tabuada(){
    var res=document.querySelector('select#tab')
    var num=document.querySelector('input#txtn')
    if(num.value.length==0){
        alert('digite um numero')
    }else{
        var n=Number(num.value)
        res.innerHTML=''
        for(var x=0;x<=10;x++){
            var item=document.createElement('option')
            item.text=`${n} X ${x}=${n*x}`
            item.value=`tab${x}`
            res.appendChild(item)
        }
    }
}