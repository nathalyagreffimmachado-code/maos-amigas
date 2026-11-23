// Tela 1: Preciso de ajuda
var voluntarios=carregarVoluntarios();
var categoria=null, pedidos={};

function desenharCategorias(){
  var g=$("cats");g.innerHTML="";
  CATEGORIAS.forEach(function(c){
    var b=document.createElement("button");
    b.className="cat";b.setAttribute("aria-pressed",categoria===c[0]);
    b.innerHTML=c[0]+"<span>"+c[1]+"</span>";
    b.onclick=function(){categoria=categoria===c[0]?null:c[0];desenharCategorias();desenharLista()};
    g.appendChild(b);
  });
}

function desenharLista(){
  var L=$("list");L.innerHTML="";
  var r=voluntarios.filter(function(x){return !categoria||x.c===categoria});
  $("lt").textContent=categoria?"Disponíveis para: "+categoria:"Pessoas disponíveis";
  if(!r.length){L.innerHTML="<p class='mute'>Ninguém cadastrado para isso ainda. Volte em breve.</p>";return}
  r.forEach(function(x){
    var d=document.createElement("div");d.className="helper";
    d.innerHTML="<h3></h3><span class='tag'></span><div class='mute'></div>";
    d.children[0].textContent=x.n;
    d.children[1].textContent=x.c;
    d.children[2].textContent="Bairro "+x.b+" · "+x.h+" · "+(x.p>0?"a partir de R$ "+x.p:"voluntário, sem custo");
    var b=document.createElement("button");
    b.className="btn";b.style.marginTop="12px";
    b.disabled=!!pedidos[x.n];
    b.textContent=pedidos[x.n]?"Pedido enviado":"Ajudar";
    b.onclick=function(){
      pedidos[x.n]=1;desenharLista();
      var oferta=paraNumero($("o").value);
      var t=document.createElement("div");t.className="toast";t.setAttribute("role","status");
      t.textContent=x.n.split(" ")[0]+" recebeu seu pedido"+(oferta>0?" com oferta de R$ "+oferta:"")+"."+
        (oferta>0&&oferta<x.p?" O valor é menor que o habitual, então a pessoa pode propor outro.":"")+
        " Ela vai entrar em contato para combinar.";
      $("list").prepend(t);
    };
    d.appendChild(b);L.appendChild(d);
  });
}

desenharCategorias();desenharLista();
