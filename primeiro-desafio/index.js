import chalk from "chalk";
/*crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )
*/
class heroi{
    constructor(nome, idade,tipo){
        this.nome=nome;
        this.idade=idade;
        this.tipo= tipo 
    }
    /*além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: ("o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)*/
    atacar(){
        let ataque;
        if(this.tipo==="mago"){
            ataque="usou magia"
    } else if(this.tipo==="guerreiro"){
        ataque="usou espada"
    } else if(this.tipo==="monge"){
        ataque="usou artes marciais"
    } else if(this.tipo==="ninja"){
        ataque="usou shuriken"
    }
   console.log(chalk.green.bgBlue.italic((`o ${this.nome} que e um  ${this.tipo} atacou usando ${ataque}\n`)))
    }
}
let guerreiro = new heroi ("Hinata",25,"ninja");
guerreiro.atacar();


let guerreiro1 = new heroi ("Dumbledore",125,"mago");
guerreiro1.atacar();