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




form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const hour = parseInt(document.getElementById('hour').value);
  const minute = parseInt(document.getElementById('minute').value, 10);
  const second = parseInt(document.getElementById('second').value, 10);
  let ampm = document.getElementById('ampm').value;


// to add alarm
  addAlram(hour, minute,second,ampm);
  // to check alarm
  checkTime(hour,minute,second,ampm);


});




function addAlram(hour, minute, second, ampmCheck) {


    hour=hour<10 ? '0'+ hour :hour;
    minute = minute < 10 ? '0' + minute : minute;
    second=second<10? '0'+ second:second;
    // Create new alarm object
    const newAlarm = {
      hour: hour,
      minute: minute,
      second: second,
      ampm: ampmCheck
    };


  
  
    // Check if the alarm already exists in the alramTime array
    const alarmExists = alramTime.some(alarm =>
      alarm.hour === newAlarm.hour &&
      alarm.minute === newAlarm.minute &&
      alarm.second === newAlarm.second &&
      alarm.ampm === newAlarm.ampm
    );
  
    // If the alarm does not exist, add it to the array and update the DOM
    if (!alarmExists) {
      alramTime.push(newAlarm);
  
      // Update the DOM using innerHTML and add a delete button
      allalram.innerHTML = alramTime.map(alarm => `
        <div class="blocks">
          <h1>${alarm.hour}:${alarm.minute}:${alarm.second}:${alarm.ampm}</h1>
          <button onClick="removeAlram(${alarm.hour}, ${alarm.minute}, ${alarm.second}, '${alarm.ampm}')">
            <i class="fa-solid fa-trash" style="color: red;"></i>
          </button>
        </div>
      `).join('');
    } else {
      alert('Alarm already exists!');
    }
  }
  



// to remove alram
function removeAlram(hour,minute,second,ampm)
{
  
  //all alram  itraation using for loop
  for(let i=0 ;  alramTime.length >= i; i++){
   
    if( alramTime[i].hour == hour && alramTime[i].minute == minute &&  alramTime[i].second == second &&  alramTime[i].ampm == ampm)
      {
       alramTime.splice(i,1);
        break;
     }
  }
   // changing in dom using inner.html and delete button 
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
      if (element.hour == hours && element.minute == minutes && element.second == date.getSeconds() && element.ampm == newformat ) {
        document.getElementById('alarmSound').play(); 
       
       
      }
    }
  }, 1000);
}

