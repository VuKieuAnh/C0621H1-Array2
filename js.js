let arrayTA = ["one", "two", "three", "four"];
let arrayTV = ["mot", "hai", "ba", "bon"];
//tim kiem
function findByName(key){
    let index = -1;
    for (let i = 0; i < arrayTA.length; i++) {
        if (key==arrayTA[i]) {
            index = i;
            break
        }
    }
    return index;
}

function translate(key){
    let index = findByName(key);
    if (index>=0) return arrayTV[index];
    else return "Khong tim thay";
}

function getValue(){
    //lay du lieu
    let inputText = document.getElementById("keyword").value;
    //lay ket qua
    let result = translate(inputText);
    //in ket qua ra
    document.getElementById("result").innerText = result;
}
