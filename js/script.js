var askHeight = prompt('Podaj wysokość choinki');

function drawTree(height) {
    var i, j, k;
    for (i=0; i<height; i++) {
        var star = "";
        for (k=0; k<(height - i -1); k++) {
            star += ' ';
        }
        star += '*';
        for (j=0; j<i; j++) {
            star += '**';
        }
        console.log(star);
    }
}

drawTree(askHeight);