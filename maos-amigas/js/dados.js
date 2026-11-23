// Dados e funções compartilhadas entre as telas
var CATEGORIAS=[
["Mercado","Compras e entregas"],["Farmácia","Buscar remédios"],["Companhia","Conversa e passeios"],
["Transporte","Ir a consultas"],["Tecnologia","Celular e internet"],["Casa","Pequenos reparos"]];

var VOLUNTARIOS_EXEMPLO=[
{n:"Marina Souza",b:"Centro",c:"Mercado",h:"Seg a sex, tarde",p:20},
{n:"Carlos Pereira",b:"Atiradores",c:"Transporte",h:"Terças e quintas",p:40},
{n:"Beatriz Lima",b:"América",c:"Companhia",h:"Fins de semana",p:0},
{n:"Rafael Costa",b:"Bom Retiro",c:"Tecnologia",h:"Toda noite",p:25},
{n:"Dona Lúcia Reis",b:"Centro",c:"Farmácia",h:"Manhãs",p:0},
{n:"Paulo Andrade",b:"Costa e Silva",c:"Casa",h:"Sábados",p:60},
{n:"Joana Martins",b:"Glória",c:"Mercado",h:"Fins de semana",p:20}];

var CHAVE="maos_amigas_voluntarios";
function carregarVoluntarios(){
  try{var s=localStorage.getItem(CHAVE);return s?JSON.parse(s):VOLUNTARIOS_EXEMPLO.slice()}
  catch(e){return VOLUNTARIOS_EXEMPLO.slice()}
}
function salvarVoluntarios(lista){
  try{localStorage.setItem(CHAVE,JSON.stringify(lista))}catch(e){}
}
function $(id){return document.getElementById(id)}
function paraNumero(txt){return parseFloat((txt||"").replace(",","."))||0}
