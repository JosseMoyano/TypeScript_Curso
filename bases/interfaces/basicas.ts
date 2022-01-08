(() => {

    interface Hero {
        name:string,
        age?:number,
        powers:string[],
        getName?: () => string
    };

    let scarletWitch: Hero = {
        name: 'Wanda Maximoff',
        age: 29,
        powers: ['magia del caos']
    };

    let Fenix: Hero = {
        name: 'Jean Gray',
        age: 24,
        powers: ['telepatia', 'fenix'],
        getName(){
            return this.name;
        }
    };


})()