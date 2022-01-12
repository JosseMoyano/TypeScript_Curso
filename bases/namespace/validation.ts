namespace Validations {
    export const validate = (text: string): boolean => {
        if(text.length > 3) {
            return true 
        } else {
            return false
        }
    } 

    const validateDate = (fecha: Date ): boolean => {
        return (isNaN(fecha.valueOf())) ? false : true ;
    }
}

console.log( Validations.validate('Wanda'))