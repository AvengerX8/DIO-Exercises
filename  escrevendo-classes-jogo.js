class heroiAventureiro{
    constructor(tipo, ataque){
      this.tipo = tipo
      this.ataque = ataque
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
      }
  }

let mago = new heroiAventureiro('Mago', 'Magia');
let guerreiro = new heroiAventureiro('Guerreiro', 'Espada');
let monge = new heroiAventureiro('Monge', 'Artes Marciais');
let ninja = new heroiAventureiro('Ninja', 'Shuriken');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();