* {
   margin: 0;
   padding: 0;
}
body {
   background-color: rgb(177, 146, 112);
}

.buttons {
   margin-bottom: 5vh;
   padding: 3vw;
   
}
   
canvas,img {
   padding: 0;
   background-color: beige;
   border-radius: 12px;
   position: absolute;
   left: 25vw;
   /* display: block;
   margin: auto; */
   margin-top: 5vh;
   /* width: 50vw; */
   height: 25vw;
   width: 50vw;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   backface-visibility: hidden;
   /* object-fit: contain; */
}




img {
   /* height: 25vw;
   width: 50vw;
   position: absolute; 
   top: 85vh;
   left: 25vw; */
   /* display: block;
   margin: auto;
   margin-top: 4vh;
   margin-bottom: 3vh;
   background-color: pink; */
}

#images {
   margin-top: 5vh;

}
nav {
   background-color: rgb(148, 113, 76);
   max-height: 100px;
   height: 10vh;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   
}

.buttons > *:hover {
   -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
}

.buttons > *{
   background-color: rgb(117, 69, 7);
   padding: 1vw;
   width: 5vw;
   color: beige;
   text-align: center;
   border-radius: 12px;
   position: absolute;
   top: 80vh;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#print {
   left: 60vw;

}

#save-all {
   left: 50vw;
}

#flip {
   left: 30vw;

}

#save {
   left: 40vw;
}

#next {
   border-top-left-radius: 0px;
   border-bottom-left-radius: 0px;
   width:1vw;
   left: 50vw;
   top: 33vw;
}

#previous {
   border-top-right-radius: 0px;
   border-bottom-right-radius: 0px;
   width:1vw;
   left: 46.8vw;
   top: 33vw;
}

.card_f {
    
   transition: transform 1s;
   transform-style: preserve-3d;

}

.card_b {
   /* transform: rotateY(180deg); */
   /* visibility: hidden; */
   transition: transform 1s;
   transform-style: preserve-3d;
   /* position: absolute;
   left: 25vw;
   top: 5vw; */
}

.card_b.is-flipped {
   
   transform: rotateY(180deg);
}
.card_f.is-flipped {
   transform: rotateY(180deg);
}




