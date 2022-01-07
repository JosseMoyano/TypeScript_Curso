(() => {

    type Hero = {
        name:string,
        age?:number,
        powers:string[],
        getName?: () => string
    };

    let myCustomvariable: string | number | Hero = 'Fernando';
    console.log(typeof myCustomvariable);

    myCustomvariable = 20;
    console.log(typeof myCustomvariable);

    myCustomvariable = {
        name: 'Wanda',
        age: 32,
        powers: ['caos']
    };
    console.log(typeof myCustomvariable);
    console.log(myCustomvariable);

})()