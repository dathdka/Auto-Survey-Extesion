var checkList = document.getElementsByClassName('ng-untouched ng-pristine ng-valid');
const check = (list) =>{
    for (let index = 0; index < list.length; index++) {
        list[index].checked = true;
    }
}
check(checkList);