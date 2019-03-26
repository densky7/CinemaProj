function cinemaHall() {
    let colorArray2 = document.body.getElementsByClassName("cinema-hall");
    for (let i = 0; i < colorArray2.length; i++) {
        let innerHtml = "";
        console.log(colorArray2)
        for (let j = 1; j <= 9; j++) {
            let row = document.createElement('div');
            row.setAttribute('class', 'row');
            row.innerHTML = `<div class="range"> ${j} ряд </div>`
            colorArray2[i].appendChild(row);
            for (let p = 1; p <= 11; p++) {
                let place = document.createElement('div');
                place.setAttribute('class', 'element');
                place.innerHTML = `${p}`
                let selected = false;
                place.onclick = function() {
                    selected = !selected;
                    place.setAttribute('style', selected
                        ? 'background:#EEAB06'
                        : 'background:#B8EE1D');
                };

                row.appendChild(place);
            }
        }
        //colorArray2[i].innerHTML = innerHtml;
    }
}
function fun(){
    alert("Успешное бронирование");
}

cinemaHall();
