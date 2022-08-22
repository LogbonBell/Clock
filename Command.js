const hourhand = document.querySelector('.hour-hand')
const minhand = document.querySelector('.min-hand')
const secondhand = document.querySelector('.second-hand')
/*We have the current seconds between 1 - 60 stored in the seconds variable. 
We then create a new variable (secondDeg) in which we use an equation to convert the current seconds into degrees.
In the next line, we add the transform style property to the secondHand which will rotate the hand according to the value of secondDeg.*/
function setDate() {
	const currentTime = new Date()
	const seconds = currentTime.getSeconds()
	const secondDeg = (seconds / 60) * 360 + 90
  	secondhand.style.transform = `rotate(${secondDeg}deg)`

  	const mins = currentTime.getMinutes()
  	const minsDeg = (mins / 60) * 360 + 90
  	minhand.style.transform = `rotate(${minsDeg}deg)`

  	const hours = currentTime.getHours()
  	const hoursDeg = (hours / 12) * 360 + 90
  	hourhand.style.transform = `rotate(${hoursDeg}deg)`

  	requestAnimationFrame(setDate)

}

setDate()


function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();