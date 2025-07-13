import chalk from "chalk";
/*crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )
*/
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    /*além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: ("o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)*/
    atacar() {
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };

        const ataque = ataques[this.tipo] || "um ataque desconhecido";

        console.log(chalk.green.bgBlue.italic(`o ${this.tipo} ${this.nome} atacou usando ${ataque}\n`));
    }
}
const ninja = new Heroi("Hinata", 25, "ninja");
ninja.atacar();

const mago = new Heroi("Dumbledore", 125, "mago");
mago.atacar();