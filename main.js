//Objetos

const user = {
    name: 'Diego',
    idade: 27,
    nickname: 'chel',
    address: {
        street: 'Rua teste',
        number: 176,

    },

};
/* DESESTRUTURAÇÃO
    consegui remove parte do objeto(user) para uma variavel */
    //comun const address = user.address;  

   // const {address, idade: age, nickname = 'fernandes'}= user; // pegando, renomeando, criando variaveis com valor
   // document.body.innerText = JSON.stringify({address,age, nickname});

/*   function mostraidade (user) {
                return user.idade;
 }
*/
    
    function mostraidadeobjet ({idade}) { //pegando o valor da variavel do objeto
        return idade;
}


// Rest Operator ..rest para pega o resto

    // const {name, ...rest} = user; //..rest para pega o resto 
    
    // document.body.innerText = JSON.stringify(rest);
    
    //Ex:

    const array = [ 1, 2, 3 ,4 ,5]; // pegando primeira e segunda posição
    // desestruturaçao
    const [first, segund] = array;
    // Rest Operatos
    const [firsst, sesgund, ...rest] = array;

    document.body.innerText = JSON.stringify({firsst,sesgund, rest});


// Shot syntax / curta


const name = 'ricardo';
const idade = 15;

//normal
const usesr = {
    name: name,
    idade: idade,
};
//curta
const usesrf = {
    name,
    idade,
};

document.body.innerText = JSON.stringify({usesrf});

