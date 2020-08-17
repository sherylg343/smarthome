<h3 style="text-align: center">
    <a href=" https://sherylg343.github.io/smarthome/" target="_blank">
        <img src="assets/images/amenity3-logo.png" alt="Amentiy">
    </a>
</h3>

# Amenity, Smart House Manager Demo Site
<div style="text-align: center">

[View website in GitHub Pages](https://sherylg343.github.io/smarthome/)
</div>

## Testing

### Ongoing Testing
* Throughout development of the website, Google Chrome Developer Tools were used to
track changes and troubleshoot problems. The console proved invaluable in trouble
shooting JavaScript code.
* A Favicon was added resulting in a "manifest" error due to one of the script 
files. I researched and discussed with my mentor and deleted the file since it
wasn't being read anyway and Favicon was still working.
* While developing code for the weather API a "cors" error was appearing. After 
research and consulting with a CI tutor, I added a proxy to the API URL and that 
resolved the issue.
* Two Javascript validators were used: [CodeBeautify](https://codebeautify.org/) 
was used throughout the process and [JSHint](https://jshint.com/) was used at 
the end when I found out it accommodated jQuery syntax.
* At the end of the development process, 
[W3C CSS Validation](https://jigsaw.w3.org/css-validator/)
and [Nu Html Checker](https://validator.w3.org/) were used. 
 - CSS: The validation did not recognize the CSS variables being used so there were numerous 
 errors listed. As the variables are integral to the website design and operation, and were
 found documented by [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), 
 they were not changed. It did catch an error in which animation-direction was stated 
 as "forward" rather than "normal."  That error was corrected. 
 - HTML: Test response: "The document is valid and conforms to best practices and standards. 
 Good job!"

### Browser and Device Evaluations
* The website has been tested on three browsers: Google Chrome, Safari and Firefox.
It was also tested on a variety of devices - iPhone 5, 8 and 10, 2014 and 2018 
iPads, and Mac laptop and desktop. The following issues were identified:
Safari: does not recognize reverse as an animation direction, so the fan icon 
will not rotate counterclockwise. Additionally, Safari is not recognizing changes 
in fan speed and Safari was showing Actual Temp. opaque on all devices, at all
times. The footer was not "sticky" in the desktop version of Safari as well.

* Firefox in a desktop browser performed without any problems as did Chrome.

* There were some issues with Apple devices as well. The 2014 iPad showed no 
functionality in the website. It did not respond to changes in inputs. The newer 
iPad did not have the same issues, it worked well except it was not filtering 
device selections in the Scheduler.

### Functionality Testing
Due to the nature of the website, the bulk of the testing was functional. The 
following describes the final round of functional tests conducted in Google 
Chrome using a MacBook Pro.
<br>

#### Part One: Navigation 

**Test #: 1**
<p>
Action Taken: Click on "Control Panel" in Nav bar
<br>
"Before" State: Control Panel link in indigo-colored text
<br>
"After" State: "Control Panel" text turns green, dropdown menu appears, "Kitchen" 
turns green when selected, dropdown menu disappears, and screen scrolls so 
"Kitchen" control box is right beneath the Nav bar.
    <br>
Test Result: Successful
</p>

**Test #: 2**
<p>
Action Taken: Click on "Control Panel" in Nav bar
<br>
"Before" State: "Control Panel" link in indigo-colored text
<br>
"After" State: "Control Panel" text turns green, dropdown menu appears, "Great 
    Room" turns green when selected, dropdown menu disappears, and screen scrolls so 
    "Great Room" control box is right beneath the Nav bar.
<br>
Test Result: Successful
</p>

**Test #: 3**
<p>
Action Taken: Click on "Control Panel" in Nav bar
<br>
"Before" State: "Control Panel" link in indigo-colored text
<br>
"After" State: "Control Panel" text turns green, dropdown menu appears, 
    "Master Bedroom" turns green when selected, dropdown menu disappears, and screen 
    scrolls so "Master Bedroom" control box is right beneath the Nav bar.
<br>
Test Result: Successful
</p>

**Test #: 4**
<p>
Action Taken: Click on "Control Panel" in Nav bar
<br>
"Before" State: "Control Panel" link in indigo-colored text
<br>
"After" State: Control Panel text turns green, dropdown menu appears, "Garage" 
turns green when selected, dropdown menu disappears, and screen scrolls so "Garage" 
control box is right beneath the Nav bar.
<br>
Test Result: Successful
</p>

**Test #: 5**
<p>
Action Taken: Click on "Scheduler" in Nav bar
<br>
"Before" State: "Scheduler" link in indigo-colored text
<br>
"After" State: "Scheduler" text turns green, and screen scrolls so "Scheduler" 
section is right beneath the Nav bar.
<br>
Test Result: Successful
</p>
<br>

#### Part Two: Whole House controls

**Test #: 6**
<p>
Action Taken: Click on on/off switch next to "Lighting" in "Whole House" control 
box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color, 
scrolling down will see that all Lighting on/off switches turned "on", light 
bulb icons turned yellow.
</p>

 <p> 
Subtest: 
<br>
Action Taken: Slide "Brightness" range bars in each room to see if 
yellow color in bulb varies in intensity as adjust bar.
<br>
Kitchen: pass
<br>
Great Room: pass
<br>
Master Bedroom: pass
<br>
Garage: pass
<br>
<br>
Test Result: Successful - "whole House" data flowed to all rooms

**Test #: 7**
<p>
Action Taken: Click on on/off switch next to "Heating Cooling System" in 
"Whole House" control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color, 
"Mode" and "Target Temp." are no longer faded out. 
</p>

<p>
Subtest:
<br> 
Action Taken: Select "Manual Cooling" as "Mode" and input "70" for 
"Target Temp." in "Whole House" control box.
<br>
"After State": While inputting temperature number see Error message 
stating that value entered must be greater than 50 and less than 85. 
Once enter "70" error message disappears.
<br>
Kitchen: "Mode" and "Target Temp." controls are not faded, Mode states 
"Manual Cooling," and "Target Temp." states "70"
<br>
Great Room: "Mode" and "Target Temp." controls are not faded, Mode 
states "Manual Cooling," and "Target Temp." states "70"
<br>
Master Bedroom: "Mode" and "Target Temp." controls are not faded, 
Mode states "Manual Cooling," and "Target Temp." states "70"
<br>
Garage: "Mode" and "Target Temp." controls are not faded, Mode states 
"Manual Cooling," and "Target Temp." states "70"
<br>
<br>
Test Results: Successful - "whole House" data flowed to all rooms
</p>

**Test #: 8**
<p>
Action Taken: Click on on/off switch next to "Ceiling Fans" in "Whole House" 
control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color 
</p>
    
<p>
Subtest: 
<br>
Kitchen: Not applicable
<br>
Great Room: 
<br>
"Before" state: fan icon is white, spinning.
<br>
Action: move range control for speed
<br>
"After" state: rotation of fan icon speeds up and slows down as 
range control is moved
<br>
"Before" state: fan icon is white, spinning.
<br>
Action: select "counterclockwise" for "Fan Direction"
<br>
"After" state: rotation of fan icon changes and moves in 
counterclockwise direction
<br>
Master Bedroom: 
<br>
"Before" state: fan icon is white, spinning.
<br>
Action: move range control for speed
<br>
"After" state: rotation of fan icon speeds up and slows down as range 
control is moved
<br>
"Before" state: fan icon is white, spinning.
<br>
Action: select "counterclockwise" for "Fan Direction"
<br>
"After" state: rotation of fan icon changes and moves in 
counterclockwise direction
<br>
Garage: Not applicable
<br>
<br>
Test Results: Successful - "whole House" data flowed to all rooms
<br>
<br>
#### Part Three: Individual Room Controls

**Test #: 9**

<p>
Action Taken: Click on on/off switch next to "Light-overhead" in "Kitchen" 
control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color 
</p>
<p>
Subtest: Slide "Brightness" range bars in each room to see if yellow color in 
bulb varies in intensity as adjust bar.
<br>
<br>
Test Results: Successful
</p>

**Test #: 10**
<p>
Action Taken: Click on on/off switch next to "Heating Cooling System" in "Kitchen" 
control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color, 
"Mode" and "Target Temp." are no longer faded out. 
</p>
<p>
Subtest: 
<br>
Action Taken: Select "Fully Auto" as "Mode" and input "55" for "Target 
Temp." in "Kitchen" control box.
<br>
"After State": While inputting temperature number see Error message 
stating that value entered must be  greater than 50 and less than 85. 
Once enter "55" error message disappears.
<br>
<br>
Test Results: Successful
</p>

**Test #: 11**
<p>
Action Taken: Click on on/off switch next to "Light-overhead" in "Great Room" 
control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color 
</p>
<p>
Subtest: Slide "Brightness" range bars in each room to see if yellow color in 
bulb varies in intensity as adjust bar.
<br>
<br>
Test Results: Successful
</p>

**Test #: 12**
<p>
Action Taken: Click on on/off switch next to "Heating Cooling System" in "Great 
Room" control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color, 
    "Mode" and "Target Temp." are no longer faded out. 
    Subtest: 
        Action Taken: Select "Manual Heating" as "Mode" and input "80" for 
            "Target Temp." in "Great Room" control box.
        "After State": While inputting temperature number see Error message 
            stating that value entered must be greater than 50 and less than 85. 
            Once enter "80" error message disappears.
<br>
Test Results: Successful
</p>

**Test #: 13**
<p>
Action Taken: Click on on/off switch next to "Ceiling Fans" in "Great Room" 
control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color 
</p>
<p>
Subtest: 
<br>
"Before" state: fan icon is white, spinning.
<br>
Action: move range control for speed
<br>
"After" state: rotation of fan icon speeds up and slows down as range 
control is moved
<br>
"Before" state: fan icon is white, spinning.
<br>
Action: select "counterclockwise" for "Fan Direction"
<br>
"After" state: rotation of fan icon changes and moves in counterclockwise 
direction  
<br>
<br>
Test Results: Successful 
</p>

**Test #: 14**
<p>
Action Taken: Click on on/off switch next to "Light-overhead" in "Master Bedroom" 
control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color 
</p>
<p>
Subtest: Slide "Brightness" range bars in each room to see if yellow color in 
bulb varies in intensity as adjust bar.
<br>
<br>
Test Results: Successful
</p>

**Test #: 15**
<p>
Action Taken: Click on on/off switch next to "Light-lamp" in "Master Bedroom" 
control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color 
</p>
<p>
Subtest: Slide "Brightness" range bars in each room to see if yellow color in 
bulb varies in intensity as adjust bar.
<br>
<br>
Test Results: Successful
</p>

**Test #: 16**
<p>
Action Taken: Click on on/off switch next to "Heating Cooling System" in "Master 
Bedroom" control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color, "Mode" 
and "Target Temp." are no longer faded out.
</p> 
<p>
Subtest:
<br>
Action Taken: Select "Fully Auto" as "Mode" and input "75" for "Target Temp." 
in "Master Bedroom" control box.
<br>
"After State": While inputting temperature number see Error message stating 
that value entered must be greater than 50 and less than 85. Once enter 
"80" error message disappears.
<br>
<br>
Test Results: Successful
</p>

**Test #: 17**
<p></p>
Action Taken: Click on on/off switch next to "Ceiling Fans" in "Master Bedroom" 
control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color 
</p>
<p>
Subtest: 
<br>
"Before" state: fan icon is white, spinning.
<br>
Action: move range control for speed
<br>
"After" state: rotation of fan icon speeds up and slows down as range 
control is moved
<br>
"Before" state: fan icon is white, spinning.
<br>
Action: select "counterclockwise" for "Fan Direction"
<br>
"After" state: rotation of fan icon changes and moves in 
counterclockwise direction  
<br>
<br>
Test Results: Successful 
</p>

**Test #: 18**
<p>
Action Taken: Click on on/off switch next to "Light-overhead" in "Garage 
control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color 
</p>
<p>
Subtest: Slide "Brightness" range bars in each room to see if yellow color in 
bulb varies in intensity as adjust bar.
<br>
<br>
Test Results: Successful
</p>

**Test #: 19**
<p>
Action Taken: Click on on/off switch next to "Light-outside" in "Garage" 
control box
<br>
"Before" State: off switch is white
<br>
"After" State: on/off switch clicked turns on and changes to indigo color 
</p>
<p>
Subtest: Slide "Brightness" range bars in each room to see if yellow color in 
bulb varies in intensity as adjust bar.
<br>
<br>
Test Results: Successful
</p>
<br>

#### Part Four: Scheduler Controls

**Test #: 20**
<p>
Action Taken: Click start and end date/times
<br>
"Before" State: blank inputs
<br>
"After" State: selected date and time appear in white input field
<br>
Test Result: Successful
</p>

**Test #: 21**
<p>
Action Taken: Click on "House/Room" dropdown menu and select "Whole House"
<br>
"Before" State: empty input field
<br>
"After" State: input field states "Whole House"
<br>
Test Result: Successful
</p>

**Test #: 22**
<p>
Action Taken: Click on "Device" dropdown menu and select "Lighting"
<br>
"Before" State: empty input field
<br>
"After" State: input field states "Lighting"
</p>
<p>
Subtest: check out options provided in Device dropdown menu - were they only 
the relevant devices for the "house/room" specified?
<br>
Result: "Lighting", "Heating Cooling System" and "Ceiling Fan" were available 
for selection
</p>
<p>
Subtest: after selecting Device, go back and select a different choice in 
"House/Room" menu. Does the "Device" dropdown menu adjust accordingly for 
the new selection?
<br>
<br>
Test Results: All Successful
</p>

**Test #: 23**
<p>
Action Taken: Click on off button
<br>
"Before" State: white off button
<br>
"After" State: on/off switch clicked turns on and changes to indigo color and 
"Lights" appears below switch as does light bulb icon in bright yellow and 
Brightness range selector
<br>
Test Results: All Successful
</P>

**Test #: 24**
<p>
Action Taken: Click on "Finish Scheduling Event" button
<br>
"Before" State: indigo-colored button and controls show states selected
<br>
"After" State: "Finish Scheduling Event" button turns green, "lights" controls 
disappear, on/off button turn to white off position, input fields become blank, 
and below Scheduled Event header the selections made are summarized. 
Start Date/Time, End Date/Time, Room, Device, Power, Brightness
<br>
Test Results: All Successful
</p>
<p>
Additional Scheduling Tests: Tests 13 - 16 are repeated for all House/Room and 
Device combinations to ensure that the appropriate controls appear and correct 
results print out under Scheduled Events. All of these test iterations
were conducted and passed. Note, schedules were made with the power button in 
"off" position, and these passed also.
</p>
<br>

#### Part Five: Temperature Scale Control

**Test #: 25**
<p>
Action Taken: Click Whole House Heating Cooling System power button "on" and
add a Target Temp. value of 68.
<br>
"Before" State: Off position, Actual Temp is 50 and Target Temp fields are opaque
and empty. Footer temperature is 82 degrees.
<br>
"After" State: Target temp field no longer opaque and now filled with value of 68.
Also scroll down website and see that Target Temp value of 68 flowed into other rooms.
</p>
<p>
Subtest: Click the Temperature Scale selector and change value to "Celsius"
<br>
Result: Actual Temp values are all recalculated to Celsius value of 10 and 
all rooms show this value; Target Temp values are all recalculated to 20
degrees Celsius and remain the same in all rooms; the weather temp 
in the footer now show 28 degrees.
</p>
<p>
Subtest: Change the Kitchen Target Temp to 24 degrees (Celsius is still
Temperature Scale). And then change Temperature Scale to Fahrenheit.
<br>
Result: Kitchen Target Temp is now 75 and all other Target Temp fields
continue to show original value of 68.
</p>


### Final Issues Resolved
Below is a list of the final punch list of issues that were resolved prior to
submitting the project.
1. Testing and revising the new temperature scale control with its impact on 
actual and target temperature fields as well as the current weather temperature.
2. Adding webkit CSS code so that the ceiling fan icon rotates in the Safari 
browser, though the speed and direction still do not change.
3. Tested Scheduler to determine if code could be eliminated from scheduleToggler
function - rendered unnecessary when House/Room selection was moved ahead of
the Device selection in the Scheduler.
4. I added an alert to the Target Temp fields and then needed one for Celsius as well.
To accommodate this and to fix the issue of them appearing in all fields each time
one was changed, I used the concept of classes and a data-attribute as suggested 
by my mentor and [Eventyret_mentor](https://code-institute-room.slack.com/team/U4MVA9YQP),
and it worked well with temperate literals. It is a good solution for #2 listed
below in "Remaining Issues," but there was not time to implement it in the initial phase.
5. Formatted comments in JavaScript file to meet JSDocs specs.
6. Revised all files so code is no wider than approximately 80 characters.
7. Revised JavaScript/jQuery code to add more variables as references rather than
use class and id's (per [Eventyret_mentor](https://code-institute-room.slack.com/team/U4MVA9YQP)).
8. HTML Validator showed error for select option without a value. I had 8 of these
error. On [stackOverflow](https://stackoverflow.com/questions/22237658/html5-validation-error-with-select-required-attribute) 
I found solution that meets validator requirements yet enables me to keep a 
blankoption: "&nbsp;".
9. Also, my mentor told me about the best practice for code width to be 
approximately 80 characters wide. I went back through and revised code to meet 
that guideline with exception of URL's - which won't work if broken by 
line break.
10. Copy in the README and TESTING was copied into a Word to check and correct spelling.

### Remaining Issues and Resolutions
1. Browser compatibility issues remain as described above.
2. During peer review, [Eventyret_mentor](https://code-institute-room.slack.com/team/U4MVA9YQP) 
suggested that I use classes and ID's to replace the lengthy selectors such as: 
let hcTarget = $(this).parent().parent().parent().next().next().next().find("input[type=text"); 
I discussed this with my mentor and determined that using a combination of classes 
for both rooms and devices, I could accomplish this if I also added data-attributes 
to the on/off switches as they activate the adjacent controls. While I recognize 
that this method would stream-line the JavaScript/jQuery code and make it easier 
to read, I elected not to make the changes at this time due to the impending 
deadline and estimated time required to rewrite the code.

