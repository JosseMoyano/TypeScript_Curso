(() => {

   abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){ }
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo salvado';
        }
    }
    class Villano extends Mutante {
        conquistarMundo(){
            return 'Mundo conquistado';
        }
    }
    
    const scarletWitch: Xmen = new Xmen('Scarlet Witch', 'Wanda');
    const magneto: Villano = new Villano('Magneto', 'Erick');
    // console.log(scarletWitch.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = (character:Mutante) => {
        console.log(character.name);
    }

    // printName(scarletWitch);
 
})()