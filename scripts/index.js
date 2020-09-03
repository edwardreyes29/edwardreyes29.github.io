/* To render page information */
projects = [
    {
        name: "Secure Travel App",
        short_description: "A travel app that advises the user where they should travel based on Coronavirus risk recommendations",
        long_description:
            `<h5>Concept</h5>
            <p>A travel app that advises the user where they should travel based on Coronavirus risk recommendations and provides the user with travel accommodation options.</p>
            <h5>User Story</h5>
            <ul>  
                <li>View number of confirmed cases</li>
                </li>View number of Deaths</li>
                </li>View a map display of color-coded areas highlighting hot spots</li>
                </li>Display US map with color-coded areas that displays case information.</li>
                </li>Button that toggles between US map and World map.</li>
                </li>Clickable locations that displays three random hotel locations and risk levels.</li>
                </li>Book now feature that links the user to Trip Advisor</li>
            </ul>
            <h5>Site information Display</h5>
                <ul>
                    <li>Total confirmed deaths</li>
                    <li>Total confirmed cases (based on API information provided)</li>
                    <li>Highlight countries currently blocking travel</li>
                    <li>We created our own parameters of what constitutes being a safe location to travel to</li>
                    <li>Hotel information displayed at user’s selected destination</li>
                </ul>
            </h5>`,
        images: [
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/project-1/world-cases.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/project-1/us-cases.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/project-1/news.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/project-1/hotel-listings.png"
        ],
        links: { deployed: "https://edwardreyes29.github.io/project-1/", github: "https://github.com/edwardreyes29/project-1" }
    },
    {
        name: "Weather App",
        short_description: "This app allows you to search a location and view weather data such has temperature, cloud conditions, humidity, wind speeds, wind directions, and UV index.",
        long_description:
            `<h5>Concept</h5>
            <p>This app allows you to search a location and view weather data such has temperature, cloud conditions, humidity, wind speeds, wind directions, and UV index. The app will also store you previous searched locations, allowing you to search adn see weather data on that location when clicked again. The app also display weather information from a 5 day forecast, displaying similar results as the current weather data.</p>
            <h5>User Story</h5>
            <ul>  
                <li>As a traveler</li>
                </li>I want to see the weather outlook for multiple cities</li>
                </li>So that I can plan a trip accordingly</li>
            </ul>
            <h5>Site information Display</h5>
                <ul>
                    <li>Displays Temperature and weather conditions</li>
                    <li>Display wind speeds, wind directions, UV index, and humidity.</li>
                </ul>
            </h5>`,
        images: [
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/modal-images/WeatherApp-home.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/WeatherApp/tomorrow-weather.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/WeatherApp/5-day-forecast.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/WeatherApp/saved-searches.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/WeatherApp/mobile-responsive.png"
        ],
        links: { deployed: "https://edwardreyes29.github.io/WeatherApp/", github: "https://github.com/edwardreyes29/WeatherApp" }
    },
    {
        name: "CSUN: Self-Exploration Page",
        short_description: "Coming soon",
        long_description:
            `<p>Coming soon</p>`,
        images: [
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/csun-self-exploration/main-page.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/csun-self-exploration/interactive-svgs.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/csun-self-exploration/end-infographic.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/csun-self-exploration/hover-info.png"
        ],
        links: { deployed: "https://www.csun.edu/career/self-exploration", github: "https://github.com/edwardreyes29/self_exploration_page" }
    },
    {
        name: "Calendar App",
        short_description: "Allows the user to save events for each hour of the day. ",
        long_description:
            `<h5>Concept</h5>
            <p>Allows the user to save events for each hour of the day. Time-blocks are color coded to indicate whether it is in the past (grey), present (red), or future(green). Users can also enter events and save them in the browsers local storage so users can view their events later.</p>
            <h5>HTML & Moment.js</h5>
            <p>The app uses moment.js library to work with the date and time. I used it both to display the current day and time in the jumbotron, and also used to to color code time-blocks. All of these were done in a script tag in the index.html file.</p>
            <h5>CSS & Bootstrap</h5>
            <p>I only created a @media rule in css to change the text size for the hours. For Bootstrap I used several classes to style the page. I used .container-fluid on he div that surrounds all the time-blocks to make the bootstrap responsive. I also added .col classes that have breakpoints to change their size when the viewport reaches a certain size.</p>
            <h5>JavaScript</h5>
            <p>I have two functions and a click assigned to the save button event to save the events. The first function, called initEvents(),initializes the events array with the objects saved in the localStorage. The second function, called renderEvents(), assigns the appropriate textarea elements with the corresponding description. The save button is assigned a click event, and I've added extra code that notifies the user if they either saved and event or not. An event is not save if it contains an empty string and notifies the user.</p>
            `,
        images: [
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/CalendarApp/main-page.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/CalendarApp/color-coded-time.png",
            "https://raw.githubusercontent.com/edwardreyes29/portfolio/master/assets/images/CalendarApp/responsive.png"
        ],
        links: { deployed: "https://edwardreyes29.github.io/CalendarApp/", github: "https://github.com/edwardreyes29/CalendarApp" }
    },
    {
        name: "Team Generator App",
        short_description: "Allows the user to save events for each hour of the day. ",
        long_description:
            `<h5>Concept</h5>
            <p>Takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.</p>
            <h5>Site information Display</h5>
            <p>Displays Employee name, id, email, and/or office number, GitHub user, school</p>
            `,
        images: [
            "https://raw.githubusercontent.com/edwardreyes29/TeamGenerator/master/Assets/main.png",
            "https://raw.githubusercontent.com/edwardreyes29/TeamGenerator/master/Assets/console.png"
        ],
        links: { deployed: "https://www.youtube.com/watch?v=2M0senCK0aU&feature=youtu.be", github: "https://github.com/edwardreyes29/TeamGenerator" }
    },
    {
        name: "Note Taker App",
        short_description: "This app uses express.js to get and post notes to a json file, allowing users to add, save, and delete notes.",
        long_description:
            `<h5>Description</h5>
            <p>This app uses express.js to get and post notes to a json file, allowing users to add, save, and delete notes.</p>
            <h5>Back End Development</h5>
            <p>Learned to work with express to create routes get and post data and send appropriate responses depending on the situation.</p>
            <h5>Technologies used:</h5>
            <p>HTML, CSS, Bootstrap, JavaScript, Express.js, jQuery</p>
            `,
        images: [
            "https://raw.githubusercontent.com/edwardreyes29/note_taker/master/assets/main.png",
            "https://raw.githubusercontent.com/edwardreyes29/note_taker/master/assets/note1.png",
            "https://raw.githubusercontent.com/edwardreyes29/note_taker/master/assets/note2.png"
        ],
        links: { deployed: "https://afternoon-reef-26658.herokuapp.com/", github: "https://github.com/edwardreyes29/note_taker" }
    },
    {
        name: "Employee Tracker using Node.js MySQL and Inquirer",
        short_description: "This app is an Content Management Systems built with Node.js.",
        long_description:
            `<h5>Description</h5>
            <p>This app is an Content Management Systems built with Node.js.</p>
            <p>The app allows the user to:</p>
            <ul>
                <li>Add departments, roles, employees</li>
                <li>View departments, roles, employees</li>
                <li>Update employee roles</li>
                <li>Update employee managers</li>
                <li>View employees by manager</li>
                <li>Delete departments, roles, and employees</li>
                <li>View the total utilized budget of a department (i.e. the combined salaries of all employees in that department)</li>
            </ul>
            <h5>User Story</h5>
            <ul>  
                <li>View number of confirmed cases</li>
                </li>View number of Deaths</li>
                </li>View a map display of color-coded areas highlighting hot spots</li>
                </li>Display US map with color-coded areas that displays case information.</li>
                </li>Button that toggles between US map and World map.</li>
                </li>Clickable locations that displays three random hotel locations and risk levels.</li>
                </li>Book now feature that links the user to Trip Advisor</li>
            </ul>`,
        images: [
            "https://raw.githubusercontent.com/edwardreyes29/EmployeeTracker/master/assets/main.png",
            "https://raw.githubusercontent.com/edwardreyes29/EmployeeTracker/master/assets/budget.png"
        ],
        links: { deployed: "https://www.youtube.com/watch?v=C0KIq9OwxxA&feature=youtu.be", github: "https://github.com/edwardreyes29/EmployeeTracker" }
    },
];

function addProjects() {

    /* append project images to div */
    for (let i = 0; i < projects.length; i++) {
        $("#projects-div").append(`
            <div class="text-light col-12 col-sm-6">
                <div class="project-image-container">
                        <img id="project-image-${i + 1}" class="img-fluid"
                            src="${projects[i].images[0]}"
                            style="cursor:pointer;"> <!-- js target -->
                            <a class="project-link-${i + 1}" href="${projects[i].links.deployed}" target="_blank">
                                <div class="project-image-overlay"></div>
                            </a> <!-- js target -->
                    </div>
                    <div class="mt-2">
                        <div class="d-flex justify-content-between">
                            <h3 class="project-name-${i + 1}" mb-2" style="font-size: 1.3rem;">${projects[i].name}</h3> <!-- js target -->
                            <div class="pr-3" data-toggle="modal" data-target="#project-modal-${i + 1}"> <!-- js target -->
                                <img class="img-fluid" src="assets/icons/info-circle-light.svg"
                                    style="cursor:pointer; width: 18px;">
                            </div>
                        </div>
                        <p id="project-description-${i + 1}" class="mb-2 font-weight-light">${projects[i].short_description}</p> <!-- js target -->
                        <div class="d-flex mb-2">
                            <img src="assets/icons/arrow-up-circle-white.svg" class="mr-1">
                            <a class="project-link-${i + 1} text-reset" href="${projects[i].links.deployed}" title="project-deployed"
                                                target="_blank" style="text-decoration: underline;">Deployed Link</a> <!-- js target -->
                    </div>
                    <div class="d-flex mb-2">
                        <img src="assets/icons/github-white.svg" class="mr-1">
                        <a id="project-github-link-${i + 1}" class="text-reset" href="${projects[i].links.github}"
                            title="project-repository" target="_blank"
                            style="text-decoration: underline;">GitHub</a> <!-- js target -->
                    </div>
                </div>
            </div>
        `);

        /* Append modals */
        $("#modals-div").append(` 
        <div class="modal fade" id="project-modal-${i + 1}" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true"> <!-- js target -->
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content bg-dark text-light">
                    <div class="modal-header bg-dark">
                        <h3 class="project-name-${i + 1}" id="exampleModalLabel">${projects[i].name}</h3> <!-- js target -->
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" style="color: #ffffff;">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 col-sm-7">
                                <!-- Carousel -->
                                <div id="carousel-controls-${i + 1}" class="carousel slide mb-3" data-ride="carousel">
                                    <div id="carousel-div-${i + 1}" class="carousel-inner"></div><!-- target js --->
                                    <a class="carousel-control-prev" href="#carousel-controls-${i + 1}"
                                        role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon"
                                            aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carousel-controls-${i + 1}"
                                        role="button" data-slide="next">
                                        <span class="carousel-control-next-icon"
                                            aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-sm-5 overflow-container mg-3" style="height: 44vh;">
                                ${projects[i].long_description}
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class="project-link-${i + 1} btn btn-outline-light" href="${projects[i].links.deployed}" role="button"
                            title="Project link" target="_blank">Launch</a> <!-- js target -->   
                    </div>
                </div>
            </div>
        </div>
    `);
        /* Append Carousel images */
        for (let k = 0; k < projects[i].images.length; k++) {
            let carouselClass = `class="carousel-item"`;
            let image = projects[i].images[k];
            if (k === 0) {
                carouselClass = `class="carousel-item active"`;
            }
            $(`#carousel-div-${i + 1}`).append(`
            <div id="carousel-image-${i + 1}${k + 1}" ${carouselClass}>
                <img src=${image}
                    class="d-block w-100" alt="..."> <!-- js target -->
            </div>
        `)
        }
    }
}

addProjects();