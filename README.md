# Alarm Clock App

## Overview

This is a simple web-based alarm clock application. It displays the current time and date, allows users to set alarms, and plays a sound when an alarm goes off. The application also includes functionalities to view, add, and remove alarms.

## Features

- **Current Time Display**: Shows the current time in a 12-hour format with AM/PM.
- **Current Date Display**: Shows the current date, including the weekday, month, day, and year.
- **Add Alarms**: Users can set alarms by inputting time in the 12-hour format.
- **Remove Alarms**: Users can remove alarms from the list.
- **Alarm Sound**: Plays a sound when the alarm time is reached.

## How to Use

### Adding Alarms

1. Enter the hour, minute, second, and AM/PM values in the form.
2. Click the "Add Alarm" button to set the alarm.

### Removing Alarms

1. Click the trash icon next to the alarm you wish to remove from the list.

### Current Time and Date

- The current time and date are displayed at the top of the page and updated every second.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/abhishekkumaryadavz/Online-Alram-Clock.git

## Code Explanation
 ## JavaScript
Event Listener: DOMContentLoaded event ensures that the script runs after the DOM is fully loaded.
updateTime(): Updates the current time and date every second. Formats time and date using Date methods.
checkAlarms(currentTime): Compares the current time with the set alarms. If a match is found, plays the alarm sound and displays an alert.
playAlarm() / stopAlarm(): Controls the alarm sound playback.
displayAlarms(): Updates the alarm list displayed on the page.
Form Submission: Handles the form submission, adds alarms, and prevents duplicate alarms.
removeAlarm(time): Removes the specified alarm from the list.
HTML Structure
Alarm Form: A form to input and add alarms.
Alarm List: Displays the current alarms with options to remove them.
Time and Date Display: Shows the current time and date.


