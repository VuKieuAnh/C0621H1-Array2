let a = [
    [2, 3,8, 6, 7, 7, 6],
    [5, 6, 7],
    [8, 9, 10]
]
function tongDuongCheoChinh(){
    let sum=0;
    for (let i = 0; i < a.length; i++) {
        sum+=a[i][i];
    }
    return sum;
}
function tongDuongCheoPhu(){
    let sum=0;
    for (let i = 0; i < a.length; i++) {
        sum+=a[i][a.length-1-i];
    }
    return sum;
}

function duyetMang(){
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            console.log(a[i][j]);
        }
    }
}
