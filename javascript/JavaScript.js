/*
    @Author: CanCui
    @Date: April 7, 2023
    @PHP Version: PHP 8.0
    @Purpose: Separately store complex course arrangement （JS code） to make the layout look more concise
*/ 





        // Use the click() method to simulate the click event of the day1 element to trigger the corresponding event and display the day1 content.
    document.addEventListener('DOMContentLoaded', function() {
        day1.click(); 
        });





    //Use JavaScript to bind click events to the box for each day, and display different course information at the bottom of the page when you click on Monday or any other day
    // Get the course content elements
    const classContents = document.querySelector('.class_contents');

    // Get the date elements
    const day1 = document.querySelector('#day1');
    const day2 = document.querySelector('#day2');
    const day3 = document.querySelector('#day3');
    const day4 = document.querySelector('#day4');
    const day5 = document.querySelector('#day5');
    const day6 = document.querySelector('#day6');
    const day7 = document.querySelector('#day7');

        // Bind click event
        day1.addEventListener('click', () => {
        // Displays information about Monday's classes
        classContents.innerHTML = `
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Cardio Dance </span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">8:30am</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Tara W</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Alpha Strength</span>
                    <p class="class_location">Alpha Space</p>
                </div>
                <div class="class_right">
                    <span class="class_time">10:00am</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Hillary H</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">LifeBarre </span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">1:00pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Tara W</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item"> Music and Movement(baby) </span>
                    <p class="class_location">Toddler Room</p>
                </div>
                <div class="class_right">
                    <span class="class_time">3:30pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Jo Ann C</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Yoga </span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">4:00pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Theresa R</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">EDG Cycle</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">6:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Amy P</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Barbell Strength</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">8:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Emily B</span>
                </div>
            </div>


        `;
        });

        
        day2.addEventListener('click', () => {

        classContents.innerHTML = `
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">CEDG Cycle </span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">8:30am</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Emily B</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Barbell Strength</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">10:00am</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Emily B</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Pickleball Open Play </span>
                    <p class="class_location">Court 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">1:30pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Tara W</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item"> ARORA Aqua</span>
                    <p class="class_location">Leisure Pool</p>
                </div>
                <div class="class_right">
                    <span class="class_time">4:30pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Michelle C</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Step It Up </span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">6:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Tara W</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Cardio Dance</span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">7:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">AJo Ann C</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Zumba</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">8:30pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Nancy C</span>
                </div>
            </div>


        `;
        });

        day3.addEventListener('click', () => {

        classContents.innerHTML = `
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">EDG Cycle</span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">8:30am</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Amy P</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">XTREME</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">10:00am</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Nicki C</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Core </span>
                    <p class="class_location">tudio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">11:30am</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Nicki C</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item"> Evolve Pilates</span>
                    <p class="class_location">Pilates Studio</p>
                </div>
                <div class="class_right">
                    <span class="class_time">3:30pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Jeffry R</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Yoga </span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">5:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Theresa R</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Cardio Dance</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">8:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">AJo Ann C</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">ARORA Strength</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">9:30pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Hillary H</span>
                </div>
            </div>
        `;
        });

        day4.addEventListener('click', () => {

        classContents.innerHTML = `
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">EDG Cycle </span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">9:00am</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Amy P</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Core Pilates</span>
                    <p class="class_location">Pilates Studio</p>
                </div>
                <div class="class_right">
                    <span class="class_time">11:00am</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Gerald E</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Alpha Strength </span>
                    <p class="class_location">Alpha Space<</p>
                </div>
                <div class="class_right">
                    <span class="class_time">2:00pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Gerald E</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item"> ARORA Aqua</span>
                    <p class="class_location">Leisure Pool</p>
                </div>
                <div class="class_right">
                    <span class="class_time">4:30pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Michelle C</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Pickleball Open Play </span>
                    <p class="class_location">Court 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">6:00pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Theresa R</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Functional Integrated Training</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">8:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Gerald E</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Zumba</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">9:30pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Nancy C</span>
                </div>
            </div>


        `;
        });

        day5.addEventListener('click', () => {

        classContents.innerHTML = `
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Gluteus MAXout</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">9:00am</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Nicki C</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Evolve Pilates</span>
                    <p class="class_location">Pilates Studio</p>
                </div>
                <div class="class_right">
                    <span class="class_time">10:00am</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Jeffry R</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Pickleball Open Play </span>
                    <p class="class_location">Court 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">1:30pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Matthew M</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item"> EDG Cycle</span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">4:30pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Nicki C.</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Step It Up </span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">6:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Tara W</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Yoga</span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">7:30pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Kelly H</span>
                </div>
            </div>
            


        `;
        });

        day6.addEventListener('click', () => {

        classContents.innerHTML = `
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Gluteus MAXout</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">8:00am</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Nicki C</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Evolve Pilates </span>
                    <p class="class_location">Pilates Studio</p>
                </div>
                <div class="class_right">
                    <span class="class_time">10:00am</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Jeffry R</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item"> ARORA Aqua</span>
                    <p class="class_location">Leisure Pool</p>
                </div>
                <div class="class_right">
                    <span class="class_time">41:30pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Michelle C</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Pickleball Open Play </span>
                    <p class="class_location">Court 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">3:30pm</span>
                    <span class="class_duration">1 hour</span>
                    <span class="class_instructor">Tara W</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Zumba</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">6:30pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Nancy C</span>
                </div>
            </div>


            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Step It Up </span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">7:30pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Tara W</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">ARORA Aqua</span>
                    <p class="class_location">Leisure Pool</p>
                </div>
                <div class="class_right">
                    <span class="class_time">9:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Lisa C</span>
                </div>
            </div>
            

        `;
        });

        day7.addEventListener('click', () => {

        classContents.innerHTML = `

            
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Zumba</span>
                    <p class="class_location">Studio 1</p>
                </div>
                <div class="class_right">
                    <span class="class_time">7:30pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Amy P</span>
                </div>
            </div>


            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">Step It Up </span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">9:30pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Jeffry R</span>
                </div>
            </div>
            <div class="class_list">
                <div class="class_left">
                    <span class="class_item">ARORA Aqua</span>
                    <p class="class_location">Leisure Pool</p>
                </div>
                <div class="class_right">
                    <span class="class_time">11:00am</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Lisa C</span>
                </div>
            </div>
            

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item"> Evolve Pilates</span>
                    <p class="class_location">Pilates Studio</p>
                </div>
                <div class="class_right">
                    <span class="class_time">2:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Jeffry R</span>
                </div>
            </div>

            <div class="class_list">
                <div class="class_left">
                    <span class="class_item"> Zumba</span>
                    <p class="class_location">Studio 2</p>
                </div>
                <div class="class_right">
                    <span class="class_time">4:00pm</span>
                    <span class="class_duration">50 minutes</span>
                    <span class="class_instructor">Amy P</span>
                </div>
            </div>
        `;
        });
        //clicks the date and maintain it with red color

        // get all .nav_date elements
        const boxes = document.querySelectorAll('.nav_date');

        // Loop to add a click event for each .nav_date element
        boxes.forEach(nav_date => {
            nav_date.addEventListener('click', function () {
                // Remove the .selected class from the previously .selected element
                const selectedBox = document.querySelector('.nav_date.selected');
                if (selectedBox) {
                    selectedBox.classList.remove('selected');
                }

                // Add the .selected class to the currently clicked.nav_date element
                this.classList.add('selected');
            });
        });  