document.addEventListener("DOMContentLoaded", () => {
  const alarmForm = document.querySelector('.addAlram form');
  const alarmList = document.getElementById("alram");
  const alarmSound = document.getElementById("alarmSound");
  const timeDisplay = document.getElementById("time");

  let alarms = [];

  function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
      timeDisplay.textContent = formattedTime;
      checkAlarms(formattedTime);
  }

  function checkAlarms(currentTime) {
      alarms.forEach((alarm, index) => {
          if (alarm.time === currentTime) {
              playAlarm();
              setTimeout(() => {
                  alert("Alarm ringing!");
                  stopAlarm();
                  alarms.splice(index, 1); // Remove the alarm after it rings
                  displayAlarms();
              }, 0);
          }
      });
  }

  function playAlarm() {
      alarmSound.currentTime = 0; // Reset the audio to start
      alarmSound.loop = true; // Loop the alarm sound
      alarmSound.play();
  }

  function stopAlarm() {
      alarmSound.pause();
      alarmSound.currentTime = 0; // Reset the audio to start
  }

  function displayAlarms() {
      alarmList.innerHTML = alarms.map(alarm => `
          <div class="blocks">
              <h1>${alarm.time}</h1>
              <button onclick="removeAlarm('${alarm.time}')">
                  <i class="fa-solid fa-trash" style="color: red;"></i>
              </button>
          </div>
      `).join('');
  }

  alarmForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const hour = document.getElementById("hour").value.padStart(2, '0');
      const minute = document.getElementById("minute").value.padStart(2, '0');
      const second = document.getElementById("second").value.padStart(2, '0');
      const ampm = document.getElementById("ampm").value;
      const alarmTime = `${hour}:${minute}:${second} ${ampm}`;

      if (!alarms.some(alarm => alarm.time === alarmTime)) {
          alarms.push({ time: alarmTime });
          displayAlarms();
      } else {
          alert("Alarm already exists!");
      }
  });

  window.removeAlarm = function(time) {
      alarms = alarms.filter(alarm => alarm.time !== time);
      displayAlarms();
  };

  setInterval(updateTime, 1000);
  updateTime();
});
