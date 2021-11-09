function darkOrLight(color){
    switch(color){
        case 'yellow':
        case 'pink':
        case 'orange':
        return 'light color';
        case 'blue':
        case 'purple':
        case 'brown':
        return 'dark color'
        default:
            'unknown color'

    }
}
console.log(darkOrLight('pink'))
console.log(darkOrLight('orange'))
console.log(darkOrLight('blue'))
