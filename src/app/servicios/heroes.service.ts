import {Injectable} from '@angular/core';

@Injectable()
export class HeroesService{

    private heroes: Heroe[] = [
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
        {
          nombre: "Mister Fantastic",
          bio: "El personaje es miembro fundador de los Cuatro Fantásticos. ​Él es el inventor de la nave espacial que fue bombardeada por la radiación cósmica en su viaje inaugural, otorgando a los Cuatro Fantásticos sus poderes. Richards ganó la capacidad de estirar su cuerpo en cualquier forma que desee.",
          img: "assets/img/fantastic.png",
          aparicion: "1961-11-01",
          casa: "Marvel"
        },
        {
          nombre: "Flash",
          bio: "Flash (también conocido por su apodo 'El Velocista Escarlata') es un superhéroe de DC Comics que posee una rapidez sobrehumana, la cual incluye la habilidad de correr a gran velocidad, reflejos sobrehumanos y la capacidad de violar algunas leyes de la física.",
          img: "assets/img/flash.png",
          aparicion: "1940-01-01",
          casa: "DC"
        },

        {
          nombre: "Ciclope",
          bio: "Cíclope es un mutante con la capacidad de proyectar potentes explosiones de fuerza a través de sus ojos. ... Es un estratega brillante, y durante mucho tiempo fue el líder adjunto del grupo de mutantes conocidos como los X-Men.",
          img: "assets/img/ciclope.png",
          aparicion: "1963-09-01",
          casa: "Marvel"
        },
        {
          nombre: "Superman",
          bio: "Bajo la identidad de Clark Kent, Superman vive en medio de los humanos como un «tímido reportero» del diario Daily Planet de Metrópolis. Ahí trabaja junto a la reportera Lois Lane, con la cual ha sido vinculado románticamente.",
          img: "assets/img/superman.png",
          aparicion: "1963-09-01",
          casa: "DC"
        },
        {
          nombre: "Capitan America",
          bio: "Sentidos, agilidad, velocidad y fuerza sobrehumanas. Gran habilidad con armas de fuego, con el martillo mjolnir y con su escudo. Instinto de liderazgo, gran resistencia, inmune a gases y enfermedades, curación y regeneración acelerada.",
          img: "assets/img/capitanamerica.png",
          aparicion: "1963-09-01",
          casa: "Marvel"
        }
      ];

    constructor(){
        console.log("Servicio para usar!!");
    }

    getHeroes(): Heroe[]{
        return this.heroes;
    }

    getHeroe(i:number){
      
      return this.heroes[i];
    }

    buscarHeroes(termino:string) {

      let heroesArr:Heroe[] = [];
      termino = termino.toLowerCase();

      for(let i=0; i < this.heroes.length; i++){
        
        let heroe = this.heroes[i];

        let nombre = heroe.nombre.toLowerCase();

         if(nombre.indexOf(termino) >= 0){
          
          heroe.idx = i;
          heroesArr.push(heroe);
         }

      }
      
      return heroesArr;

    }

}




export interface Heroe{
    nombre: string;
    bio:string;
    img: string;
    aparicion: string;
    casa: string;
    idx?: number;
}