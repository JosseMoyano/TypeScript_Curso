(() => {

    const hero:string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatiSignal = () => {
        return 'Bati Señal'
    }

    console.log(typeof activateBatiSignal)

    const heroName = returnName()

})()