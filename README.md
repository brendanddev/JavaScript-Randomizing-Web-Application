# JavaScript Randomizing Web Application

## Overview
This project is a simple, responsive web application built using HTML, CSS, and JavaScript. The app demonstrates key concepts such as event handling, input validation, and DOM manipulation, along with dynamic image randomization and animations.

## Features
- **Dynamic Image Display**: Randomly selects and displays images from predefined categories each time the page is loaded or refreshed.
- **Event-Driven Animations**: When an image is clicked, a CSS transition animation is triggered, and the image is replaced by a random one.
- **Automatic Refresh Timer**: The page includes an input field to set the time (in milliseconds) for automatic image refreshes, with validation to ensure the time is within the specified range.
- **Manual Refresh Button**: Users can manually refresh the images using a button, with an image update counter displayed.
- **Responsive Layout**: The application is responsive, with images evenly spaced and adapting to different screen sizes.

## Project Structure
- `index.html`: The main HTML file containing the structure of the web page.
- `style.css`: External CSS file for styling the web page and managing the layout and animations.
- `script.js`: External JavaScript file containing the logic for handling events, updating the DOM, and controlling the image display.

## How It Works
1. **Image Randomization**: The app selects 3 random images from 3 categories upon loading and places them in the main section. Users can refresh images either manually or by waiting for the automatic timer.
2. **Clickable Images**: Clicking an image plays a transition animation, changes the image randomly, and resets the automatic refresh timer.
3. **Input Validation**: Users can input a custom time interval (between 500 and 10,000 milliseconds) for automatic refresh. The JavaScript validates this input and adjusts the timer accordingly.

## Usage
1. Clone this repository.
2. Open `index.html` in your browser to view the web application.
3. Interact with the page by clicking images, adjusting the timer, and using the manual refresh button.

## Future Enhancements
- Improve uniqueness of images during randomization.
- Add more animation effects and customization options for user interaction.
