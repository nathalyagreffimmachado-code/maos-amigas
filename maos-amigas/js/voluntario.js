// Tela 2: Quero ajudar
CATEGORIAS.forEach(function(c){
  var o=document.createElement("option");o.textContent=c[0];$("c").appendChild(o);
});

$("save").onclick=function(){
  var nome=$("n").value.trim(), bairro=$("b").value.trim(), aviso=$("ok");
  aviso.classList.remove("hidden");
  if(!nome||!bairro){aviso.textContent="Preencha seu nome e bairro para continuar.";return}
  var lista=carregarVoluntarios();
  lista.unshift({n:nome,b:bairro,c:$("c").value,h:$("h").value.trim()||"A combinar",p:paraNumero($("p").value)});
  salvarVoluntarios(lista);
  aviso.textContent="Obrigado, "+nome.split(" ")[0]+"! Você já aparece na lista de quem pode ajudar.";
};
