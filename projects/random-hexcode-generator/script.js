let index = 0;
changeBackgroundColor = () =>{
    let colorList =  ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    let randomColor = "";
    for(let i = 0;i <=3; i++){
        let randomIndex = Math.floor(Math.random() * colorList.length);
        randomColor += colorList[randomIndex];
    }
    document.querySelector("body").style.background = "#" + randomColor;
    document.querySelector("#color-code").innerHTML = "#" + randomColor;
}

