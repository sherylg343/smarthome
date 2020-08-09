<h3 style="text-align: center">
    <a href=" https://sherylg343.github.io/smarthome/" target="_blank">
        <img src="assets/images/amenity3_logo.png" alt="Amentiy">
    </a>
</h3>

# Amenity, Smart House Manager Demo Site
<div style="text-align: center">

[Click here to view website in GitHub Pages] (https://sherylg343.github.io/smarthome/)
</div>

# Table of Contents

1. [Project Purpose](#purpose)
2. [UX](#ux)



## Project Purpose <a name="purpose"></a> 
Amenity, Smart Home Manager, is a new technology company seeking to provide a
demonstration (Demo) website that will showcase their product's interactive controls and 
scheduling capabilities, without being connected to a set of home appliances and products. 

### Project Goals
Amenity's Demo control panel must provide a potential buyer with the opportunity to play 
with the function inputs and controls to gain an understanding of the scope of the product 
and how the controls interact with one another. The Scheduler section of the Demo will 
show how functions, for example lighting, can be turned on and off ahead of time, in the 
whole house or in a specific room. Amenity's goal for this Demo site is to have the user 
leave the Demo with a clear understanding of the basic functionality of the product and 
how this technology could work for them.

The business goal of the site is to move the potential customer further along through the
sales funnel. While some customers may visit the site during the product research stage, 
the intent is to use the site to assist the customer in making a purchasing 
decision. Amenity wants the Demo site to help convince a potential client that their
smart-home manager suits the customer's specific needs and resolves their relevant
problems. The user should leave the site believing that this smart home manager would
help them manage their home in an easy and convenient mannner.

### Target Audience
The target audience is defined as home owners looking for a fully-integrated smart-home
manager, easily controlled through mobile devices. This website is not intended to sell 
the product, it is only to be used as a Demo of the core product. It's important that the 
user views, and has the opportunity to physically test, the types of controls that can be 
accessed remotely and see how scheduling is integrated into the system. The website will 
likely be used while working with a salesperson, either on the phone or in-person, so 
instructional directions are not required on the website. However, it is expected that 
the control elements will be intuitive to use.


## UX <a name="ux"></a>

### Targeted Demo Customers
* Own home - this product is specifically designed as a comprehensive home manager.
For example, apartment residents with a few electronic appliances are not a target
audience for this product.
* Currently possess or plan to purchase products and appliances for the home that are 
capable of being wirelessly controlled by a smart-home manager.
* Have explored Amenity's smart-home manager product and have enough interest in the
product that they are willing to devote time to exploring the product's capabilities
through a Demo.

### This Demo is being commissioned:
* to showcase Amenity's customized and integrated product in a succinct manner.
Amenity does not want to overwhelm potential clients, so the Demo should be a 
cross-section of the product's capabilities;
* to provide potential customers with the opportunity to try out the controls and 
functionality without having to first connect with their home products, as many other 
software packages require;
* to demonstrate the simplicity and intuitive design of the controls and scheduler.

### User Stories
1. As a homeowner with an existing "smart home," I want to change my system to one that
integrates all my products and appliances capable of being controlled wirelessly. 
I am viewing the demo to determine if the following conditions of satisfaction are met:
* system supports a variety of controls and products;
* I am able to view all current settings for my home products and appliances electronically;
* I am able to make changes to settings in real time or schedule the changes in the future.
* I can easily access and make changes using my an app on my phone.

2. As a homeowner, I have recently decided to purchase a smart house manager product that
will electronically control available products and appliances within my home, for my 
convenience and ease of use. I am viewing the demo to determine if the following conditions 
of satisfaction are met:
* I need to try out the product and see how the controls work as I have not owned one of 
these products previously.
* controls and functions needs to be intuitive and integrated;
* I am able to view all current settings for my home products and appliances electronically;
* I am able to make changes to settings in real time or schedule the changes in the future.
* I can easily access and make changes using my an app on my phone.


### Features

#### Strategy Plane
An evaluation was conducted to determine which customer problems the Demo was being used to resolve. These 
customer needs are listed and reviewed in the [Strategy Trade-Off Analysis] (...smarthome/master/README-assets/#.pdf).
All of the "Must Adddress" issues were addressed in this first phase of the Demo website.

#### Scope Plane
Below is a summary of the analysis done for this Demo site during the Scope Plane.
1. Objective: The user wants to accomplish manipulating the smart home controls to determine: ease of use, 
general capabilities of product, and answer question: will this do what I need it to do?
2. Functional: The user needs to physically see and manipulate the controls, see how they are integrated, and 
understand that controls can be scheduled as well as manipulated in real time.
3. Non-functional: The demo cannot easily connect to user's own appliances, so need to simulate the product being
controlled. Security and scaleability are not concerns at this time.
4. Business Rules: Human resources are limited at this time so need to produce a basic demo now that can be modified in
the future.

#### Structure Plane
Below are the key considerations relative to the Structure Plane.
1. Consistency: 
* controls laid out in rows and move left to right
* one font used for headings and another used for body 
* one background, so focus is on the controls
2. Predictable:  
* similarly functioning controls look the same (e.g. on/off switches and range controllers)
* layout of each room box - controls are positioned in same order and location. e.g. Lighting is first, heating cooling is
second and ceiling fans are third. On-off switches are to right of device name.
3. Learnable:
* Inputs/controls are disabled and faded out in when in "off" mode - easily recognizeable as "off" to user.
* Fan and light bulb icons are animated to assist is selecting "speed" and "brightness" levels.
* Fan speed and light brightness use same range controller to assist in learning.
4. Visible:
* All controls are one long scrolling page - easily accessible.
* The scheduler has a nav link for quick access shown in a sticky nav bar.
5. User Feedback:
* Links change color and sometimes size when clicked.
* When power switch turned on, relevant controls appear in full color and are enabled.
* Additional interactive feedback for duplicate schedules is planned for next phase.

#### Skeleton Plane
Useability: 
* Boxes organized by home/room with device controls laid out in same manner.
* Representational icons are used that are easy to identify: fan and light bulb, as
well as icons representing each room. Icons are used consistently throughout site both
in content as well as layout.

#### Wireframe Mock-Ups:

After reviewing the User Stories and evaluating the Features, the following
mockups were designed for the 3 primary screen sizes using Balsamiq software 
(https://basamiq.com). The website was created using a mobile-first design philosophy.

<div style="text-align:center;">
[Mobile](..smarthome/master/README-assets/#.pdf)
</div>

<div style="text-align:center;">
[Tablet](..smarthome/master/README-assets/#.pdf)
</div>

<div style="text-align:center;">
[Desktop](..smarthome/master/README-assets/#.pdf)
</div>

#### Wireframe Mock-Up Revisions
After designing the wire-frame mock-ups, I read "Best Practices for Form Design: Structure, Inputs, Labels 
and Actions," by Nick Babich, published on March 12, 2020 on xd.adobe.com 
[Article Link](https://xd.adobe.com/ideas/principles/web-design/best-practices-form-design/).
I recognized that the home controls functioned very similar to a form, and thus adopted several best 
practices outlined in this article, specifically:
1. Group related information - flow left to right;
2. Default values were set at off.
3. Do not use a reset button ("pure evil").
5. Submit buttons - state action will perform when clicked.

Based on this article and other observations made during the site creation, the following changes were 
made to improve the design originally created with the WireFrames.
1. Heating cooling mode dropdown menu was added to the Whole House, so that the entire
havac system was functional at the Whole Home level.
2. The on-off switch was placed to right of title, and icon and range controller were placed side-by-
side.
3. Schedule controls are hidden except when their function is specifically chosen - to avoid user error.
4. Scheduled events are printed in a list rather than a table.
5. Termperature was added to the weather icon in the footer.
6. Large screen display does not involve a multi-column view - single column is maintained among all screen
sizes.
7. Date and time were combined in one picker.

#### Surface Plane
1. Background: 
* color chosen to maintain consistency;
* Per www.colorpsychology.org, blue and green colors were selected for the gradient texture
background. Blue/Teal says "they care about what you do" and expresses sincerity and peacefulness.
Green is the other color which portrays safety and stability. These are sub-conscious messages
consistent with the image Amentity wants to portray for the company and its product.
2. Fonts:
Two fonts were chosen, one for headlines and one for body. Both were chosen for simplicity and readability:
Headlines: Noto Sans JP
Body: Hind Siliguri
Back-up: Sans Serif
3. Images/Icons
The focus of this website is the controls and scheduler. Therefore, the decision was made to not use
photo images that might distract from the focus on the functionaility of the product. Instead, to provide
some design element and improve useability, icons were chosen to depict the whole house and each room, answer
well as to animate the lights and fans and help the user visualize the changes s/he was making with the controls.
4. Controls:
* Consistency and useability were driving forces in the design of the controls.
* All the range inputs (brightness and fan speed), look the same, as do the drop down menus.
* Size of the controls was established so they are easy to use and recognizeable.
* Organization and sequence of controls designed based on step-by-step analysis of their use. Whole Home is 
biggest "unit" to be controlled, so it is shown first. If you want to turn off all of the house lights you can
do that at the top of screen without scrolling down to find it. Rooms of the house are the next organizational unit -
on par with the whole house. Following, the rooms are organized by device. The devices are in the same order in each
room - but each room only lists the devices relevant to it (e.g. there is not a ceiling fan in the kitchen so it isn't
listed). The device controls are indented and use a smaller type to indicate they are sub-items within the room structure.
5. Defensive Design:
* This was a prominent philosophy throughout the operational design of the Demo site. Within the control section, the
default setting is off. When the on-off switches are off, the relevant controls are opaque and the controls are disabled.
* When the Whole House on-off switches are turned on or off, all of the relevant device switches are changed accordingly.
* In the scheduling area, only the initial controls who when you start to schedule an event: Start Date/Time, End Date/Time,
House/Room, Device and On-Off Switch. The first four are required inputs to submit the event. The device dropdown menu is
revised based upon the house/room selected to avoid scheduling a device that doesn't exist in a room. Additionally, 
once the device is selected and the off-on switch is clicked "on," then the relevant controls appear below (e.g. fan
speed and direction for Ceiling Fans). Again, this is done to help prevent human errors.





