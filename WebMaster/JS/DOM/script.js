/*getElementeById, usando instaciar ou modificar alguma coisa em 
tempo de execução*/

document.getElementById('exemplo1').innerHTML =
 "Farinha<button>Botão</button>";

 /*retorna sempre um array com um ou varios valores atribudos a class, encontradas*/
document.getElementsByClassName('lista');

/*encontra o nome da tag informada*/
document.getElementsByTagName('button');

/*retorna qual o name, mais usado para input*/
document.getElementsByName('email');
document.getElementsByName('telefone');


/*querySelector, pode substituir todos os getElement anterioes*/
document.querySelectorAll('button');/*pelo nome da tag*/
document.querySelectorAll('div');
document.querySelectorAll('input');

/*localizar por id acrescentar o #"*/
document.querySelector('#exemplo1');
/*localizar por class acrescentar o ."*/
document.querySelectorAll('.lista');
