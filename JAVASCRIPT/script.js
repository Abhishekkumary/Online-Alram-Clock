let time= document.getElementById("time");
let time1 = setInterval(() => {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second=date.getSeconds();

  // Check whether AM or PM
  let newformat = hours >= 12 ? 'PM' : 'AM';

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  hours=hours<10 ? '0'+ hours :hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  second=second<10? '0'+ second:second;

 time.innerHTML= hours + ':' + minutes + ':' + second +' ' + newformat;
}, 1000);

const form = document.querySelector('.addAlram form');
const allalram =document.getElementById('alram');
const alramTime = [];
console.log(alramTime);



form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const hour = parseInt(document.getElementById('hour').value);
  const minute = parseInt(document.getElementById('minute').value, 10);
  const second = parseInt(document.getElementById('second').value, 10);
  let ampm = document.getElementById('ampm').value;

  console.log(hour);

  addAlram(hour, minute,second,ampm);
  checkTime(hour,minute,second,ampm);


});




function addAlram(hour, minute,second,ampmCheck) {
  // Create new alarm object
  const newAlarm = {
    hour: hour,
    minute: minute,
    second:second,
    ampm : ampmCheck
  };
  

  alramTime.push(newAlarm); // Add the new alarm to the alramTime array
  console.log(alramTime);

  // Update the content of the element with ID 'allalram'
  allalram.innerHTML = "";
  allalram.innerHTML = alramTime.map(alarm => ` <div class="blocks">
            <h1>${alarm.hour}:${alarm.minute}:${alarm.second}:${alarm.ampm}</h1>
            <button onClick="removeAlram(${alarm.hour},${alarm.minute},${alarm.second},'${alarm.ampm}')"> <i class="fa-solid fa-trash" style="color: red ;"></i></button> 
          </div>`).join('');

}



// to remove alram
function removeAlram(hour,minute,second,ampm)
{
  
  //all alram  itraation using for loop
  for(let i=0 ;  alramTime.length >= i; i++){
    console.log(i);
    if( alramTime[i].hour == hour && alramTime[i].minute == minute &&  alramTime[i].second == second &&  alramTime[i].ampm == ampm)
      {
        console.log(hour, minute)
       alramTime.splice(i,1);
        break;
     }
  }
   // changing in dom using inner.html
   allalram.innerHTML = alramTime.map(alarm => ` <div class="blocks">
    <h1>${alarm.hour}:${alarm.minute}:${alarm.second}:${alarm.ampm}</h1>
    <button onClick="removeAlram(${alarm.hour},${alarm.minute},${alarm.second},'${alarm.ampm}')"> <i class="fa-solid fa-trash" style="color: #e60a0a;"></i></button> 
  </div>`).join('');

  };






function checkTime(hour, minute,ampm) {
  

  

  //To check time every second
  setInterval(function() {
    let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
 

  // Check whether AM or PM
  let newformat = hours >= 12 ? 'PM' : 'AM';

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  hours=hours<10 ? '0'+ hours :hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
 
    const second=0
    //To check time from all alram
    for (let index = 0; index < alramTime.length; index++) {
      const element = alramTime[index];
      console.log(hours,element.hour,minutes,element.minute );
      
      if (element.hour == hours && element.minute == minutes && element.second == date.getSeconds()) {
        alert("Time Up");
      }
    }
  }, 1000);
}








