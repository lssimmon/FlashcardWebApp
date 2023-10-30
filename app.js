const c = document.getElementById("canvas_front");
const d = document.getElementById("canvas_back");
const saveBtn = document.getElementById("save");
const frontBtn = document.getElementById("front");
const backBtn = document.getElementById("back");
const printBtn = document.getElementById("print");
const saveAllBtn = document.getElementById("save-all");
const flipBtn = document.getElementById("flip");
const ctxd = d.getContext("2d");
const ctx = c.getContext("2d");


const canvasOffsetX = c.offsetLeft;
const canvasOffsetY = c.offsetTop;

const canvasdOffsetX = d.offsetLeft;
const canvasdOffsetY = d.offsetTop;

c.width = window.innerWidth - canvasOffsetX;
c.height = window.innerHeight - canvasOffsetY;

d.width = window.innerWidth - canvasdOffsetX;
d.height = window.innerHeight - canvasdOffsetY;

let isPainting = false;
let isPaintingd = false;

let flashcard = [];
let imgUrl = c.toDataURL('image/png');
let frontUrl = c.toDataURL('image/png');
let frontBlob;
let theBlob;
let backUrl = c.toDataURL('image/png');
let data = [];

let flcdIndex = 0;
let flcdFront = true;
let flcdCount = 0;


let img1 = document.createElement('img');
let img2 = document.createElement('img');
let isFlipped = false;
var cardf = document.querySelector('.card_f');
var cardb = document.querySelector('.card_b');
cardb.classList.toggle('is-flipped');

ctx.lineWidth = 6;
ctxd.lineWidth = 8;

flipBtn.addEventListener( 'click', function() {
    
        cardb.classList.toggle('is-flipped');
        cardf.classList.toggle('is-flipped');
     
     
    
});


c.addEventListener("mousedown", function (event) {
    
    isPainting = true;
    console.log("in mouse down");

    
    

});

c.addEventListener("mousemove", function (event) {
    console.log(event);
    if(!isPainting){
        return;
    }
    ctx.stroke();
    
    ctx.lineTo((event.clientX - c.getBoundingClientRect().left)* 1.5, (event.clientY - c.getBoundingClientRect().top) * 1.69);
});

c.addEventListener("mouseup", function (event) {
    isPainting = false;
    ctx.beginPath();
});



d.addEventListener("mousedown", function (event) {
    
    isPainting = true;
    console.log("in mouse down");

    
    

});

d.addEventListener("mousemove", function (event) {
    console.log(event);
    if(!isPainting){
        return;
    }
    ctxd.stroke();
    
    ctxd.lineTo((event.clientX - d.getBoundingClientRect().left) * 1.5, (event.clientY - d.getBoundingClientRect().top) * 1.69);
});

d.addEventListener("mouseup", function (event) {
    isPainting = false;
    ctxd.beginPath();
});




saveBtn.addEventListener("click", function () {
    let frontUrl = c.toDataURL('image/png');
    let backUrl = d.toDataURL('image/png');

    
    flashcard = [[frontUrl, backUrl]];
    console.log(flashcard);
    data = data.concat(flashcard);
    console.log(data);
    ctxd.clearRect(0, 0, d.width, d.height);
    ctx.clearRect(0, 0, c.width, c.height);
    flcdCount = flcdCount + 1;
    /********* SAVING TO LOCAL ******/
    // let link = document.createElement('a');
    // // Add the name of the file to the link
    // link.download = 'canvas_image.png';
    // // Attach the data to the link
    // link.href = imgUrl;
    // // Get the code to click the download link
    // link.click();

    // $.ajax({ 
    //     type: "POST", 
    //     url: "script.php", 
    //     data: {  
    //         imgBase64: dataURL 
    //     } 
    // }).done(function(o) { 
    //     console.log('saved');  
    // }); 
    

});


// frontBtn.addEventListener("click", function () {
//     console.log("front btn clicked");
//     frontUrl = c.toDataURL('image/png');
//     frontBlob = c.toBlob(function(blob){
//         console.log(blob);
//         theBlob = blob;
//       },'image/png')
//     ctx.clearRect(0, 0, c.width, c.height);
// });

// backBtn.addEventListener("click", function () {
//     console.log("back btn clicked");
//     backUrl = c.toDataURL('image/png');
// });

printBtn.addEventListener("click", function () {

    console.log(flcdIndex, flcdCount);
    img1.style.display = 'none';
    img2.style.display = 'none';
    if (flcdIndex < flcdCount){
        let imgUrl1 =  data[flcdIndex][0];
        let imgUrl2 = data[flcdIndex][1];
        
        img1 = document.createElement('img');
        img2 = document.createElement('img');
        img1.src = imgUrl1;
        img2.src = imgUrl2;
        if (flcdFront == true) {
            document.getElementById('images').appendChild(img1);
            flcdFront = false;
        } else {
            document.getElementById('images').appendChild(img2);
            flcdFront = true;
            flcdIndex = flcdIndex + 1;
        }
        
    }else {
       
        var text = document.createTextNode("No more flashcards");
        document.getElementById('images').appendChild(text);
    }


    
    console.log(data);
   

});

saveAllBtn.addEventListener("click", function () {

    while (flcdCount > 0){
        let current = data[flcdCount - 1];
        $.ajax({
            method: "POST",
            type:"POST",
            beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            url: "save",
            data: {"front": current[0], "back": current[1]},
          })
          .done(function( msg ) {
            console.log(`Successful ${flcdCount}`);
          });
        flcdCount = flcdCount - 1;
    }
    
    // $.ajax({
    //     method: "POST",
    //     type:"POST",
    //     beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    //     url: "save",
    //     data: {"data_type": data},
    //   })
    //   .done(function( msg ) {
    //     alert( "Done" );
    //   });
});


// function newLine(event) {
//     ctx.beginPath();
    
    
// }

// function endLine(event){
//     ctx.lineTo(event.clientX, event.clientY);
//     ctx.stroke();
// }

// function draw(event) {
    
//     ctx.moveTo(event.clientX, event.clientY);

// }



// c.addEventListener("mousedown", function (event){newLine(event)});
// c.addEventListener("mouseup", function (event){endLine(event)});
// c.addEventListener("mousemove", function (event){draw(event)});
