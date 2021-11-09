function check(language) {
    switch (language) {
        case 'mandarin':
            console.log('most number of native speakers');
            break;
        case 'spanish':
            console.log('2nd place in number of native speakers');
            break;
        case 'english':
            console.log('3rd place');
            break;
        case 'hindi':
            console.log('Number 4');
            break;
        case 'arabic':
            console.log('5th most spoken language');
        default:
            'not in the top 5';
    }
}
check('english')
check('hindi')
check('arabic')