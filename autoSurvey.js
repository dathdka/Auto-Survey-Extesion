//check all
// var checkList = document.getElementsByClassName('ng-untouched ng-pristine ng-valid');
// const check = (list) =>{
//     for (let index = 0; index < list.length; index++) {
//         list[index].checked = true;
//     }
// }

//custom check
const autoComplete = () =>{
    var choice =  prompt('L: low\n    M: Medium\n     H: High');
    var min, max;
    switch (choice) {
        case 'L', 'l':
            min = 1;
            max = 3;
            break;
        case 'M', 'm':
            min = 3;
            max = 5;
            break;
        case 'H', 'h':
            min = 4;
            max = 6;
            break;
        default:
            min = 1;
            max = 6;
            break;
    }
    var query = stringBuilder(1192, min , max - 1);
    var target = document.getElementById(query);
    if(target)
        target.checked = true;
    for(let i = 1194 ; i<= 1219; i++){
        query = stringBuilder(i,min,max);
        target = document.getElementById(query);
        if(target){
            target.checked = true;
        }
    }
}
 
const stringBuilder = (number,min,max) =>{
    const answer =  Math.floor(Math.random()* (max - min) + min);
    return `cauhoi${number}dapan${answer}`
}
autoComplete()

