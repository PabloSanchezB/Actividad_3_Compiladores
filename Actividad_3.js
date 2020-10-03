//Autor: Pablo Sanchez (Codigo: 2018214003)

function buscar(arr,d){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==d){return true;}
    }
    return false;
}

function union(a,b){
    let aux=[];
    for(let i=0;i<a.length;i++){aux.push(a[i]);}
    for(let j=0;j<b.length;j++){
        if(!buscar(a,b[j])){aux.push(b[j]);}
    }
    return aux;
}

function diferencia(a,b){
    let aux=[];
    for(let i=0;i<a.length;i++){
        if(!buscar(b,a[i])){aux.push(a[i]);}
    }
    return aux;
}

function intersec(a,b){
    let aux=[];
    for(let i=0;i<a.length;i++){
        if(buscar(b,a[i])){aux.push(a[i]);}
    }
    return aux;
}

function inversoPal(a){
    let aux=[]; let inver="";
    for(let i=0;i<a.length;i++){aux.push(a[i]);}
    for(let j=0;j<a.length;j++){
        inver+=aux.pop();
    }
    return inver;
}

function inversoLeng(a){
    let aux=[]; let aux2=[];
    for(let i=0;i<a.length;i++){aux.push(a[i]);}
    for(let j=0;j<aux.length;j++){
        aux2.push(inversoPal(aux[j]));
    }
    return aux2;
}

function cardinal(a){
    return a.length;
}

function concatena(a,b){
    let aux=[];
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]=="*"){
                if(!buscar(aux,b[j])){aux.push(b[j]);}
            }
            else if(b[j]=="*"){
                if(!buscar(aux,a[i])){aux.push(a[i]);}
            }
            else{aux.push(a[i]+b[j]);}
        }
    }
    return aux;
}

function potencia(a,pot){
    if(pot<=0){return [];}
    if(pot==1){return a;}
    let temp=concatena(a,a);
    for(let i=2;i<pot;i++){
        temp=concatena(temp,a);
    }
    return temp;
}

function conversion(a){
    let aux=[]; let str="";
    for(let i=0;i<a.length;i++){
        if(a[i]!=" "){
            if(a[i]==","){
                if(str.length>0){
                    if(!buscar(aux,str)){aux.push(str);}
                    str="";
                }
            }else{
                str+=a[i];
            }
        }
    }
    if(str.length>0){
        if(!buscar(aux,str)){aux.push(str);}
    }
    return aux;
}

function converPal(a){
    let aux="";
    for(let i=0;i<a.length;i++){
        if(a[i]!=" "){aux+=a[i];}
    }
    return aux;
}

function modPal(){
    let pal=converPal(document.getElementById("palabra").value);
    let opr=document.getElementById("moduPal").value;
    if(opr==="card"){document.getElementById("resulPal").value=cardinal(pal);}
    else{document.getElementById("resulPal").value=inversoPal(pal);}
}

function modAlfa(){
    let a1=conversion(document.getElementById("alfa1").value);
    let a2=conversion(document.getElementById("alfa2").value);
    let opr=document.getElementById("moduAlfa").value;
    if(opr==="union"){document.getElementById("resulAlfa").value=union(a1,a2);}
    else if(opr==="difer12"){document.getElementById("resulAlfa").value=diferencia(a1,a2);}
    else if(opr==="difer21"){document.getElementById("resulAlfa").value=diferencia(a2,a1);}
    else{document.getElementById("resulAlfa").value=intersec(a1,a2);}
}

function modLeng(){
    let l1=conversion(document.getElementById("leng1").value);
    let l2=conversion(document.getElementById("leng2").value);
    let opr=document.getElementById("moduLeng").value; let val; let pow;
    switch(opr){
        case "union": val=union(l1,l2); break; case "difer12": val=diferencia(l1,l2); break;
        case "difer21": val=diferencia(l2,l1); break; case "intersec": val=intersec(l1,l2); break;
        case "concaten12": val=concatena(l1,l2); break; case "concaten21": val=concatena(l2,l1); break;
        case "pot1": pow=document.getElementById("pote").value; val=potencia(l1,pow); break;
        case "pot2": pow=document.getElementById("pote").value; val=potencia(l2,pow); break;
        case "inv1": val=inversoLeng(l1); break; case "inv2": val=inversoLeng(l2); break;
        case "card1": val=cardinal(l1); break; case "card2": val=cardinal(l2);
    }
    document.getElementById("resulLeng").value=val;
}








