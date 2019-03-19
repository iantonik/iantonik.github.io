var qualifications = [

    {
        title: "Full-Stack Software Developer",
        expImg: "images/web-development.jpg",
        // desc: "...",
        projects: [
            {
                number: "1",
                title: "Word Guess Game",
                hostedURL: "https://iantonik.github.io/Word-Guess-Game/index.html",
                projImg: "images/devProjects/hangman.png",
                gitHub: "https://github.com/iantonik/Word-Guess-Game",
            },
            {
                title: "Star Wars RPG",
                hostedURL: "https://iantonik.github.io/unit-4-game/index.html",
                projImg: "images/devProjects/starWars.jpeg",
                gitHub: "https://github.com/iantonik/unit-4-game",
            },
            {
                title: "Total Trivial Trivia",
                hostedURL: "https://iantonik.github.io/TriviaGame/index.html",
                projImg: "images/devProjects/trivia.jpeg",
                gitHub: "https://github.com/iantonik/TriviaGame",
            },
            {
                title: "GifTastic Search",
                hostedURL: "https://iantonik.github.io/GifTastic/index.html",
                projImg: "images/devProjects/GifTastic.jpeg",
                gitHub: "https://github.com/iantonik/GifTastic",
            },
            {
                title: "Weather Appropriate",
                hostedURL: "https://iantonik.github.io/The-Weather-Appropriate-Clothing/index.html",
                projImg: "images/devProjects/weather-clothing.jpg",
                gitHub: "https://github.com/iantonik/The-Weather-Appropriate-Clothing",
            }


        ]
    },
    {
        title: "Design Thinking Facilitator",
        expImg: "images/Design-thinking-process.jpeg",
        // desc: "Context analysis, problem finding and framing, ideation and solution generating, creative thinking, sketching and drawing, modelling and prototyping, testing and evaluating",
    },
    {
        title: "SAFe Trainer and Coach",
        expImg: "images/safe.jpg",
        // desc: '"Better software and systems make the world a better place" - Dean Leffingwell.'
    },
    {
        title: "Agile Scrum Trainer and Coach",
        expImg: "images/scrum-agile.png",
        // desc: "..."
    },
    {
        title: "Digital Transformation Evangelist",
        expImg: "images/Digital_transformation.jpeg",
        // desc: "...."
    },
]


var populateQualifications = function () {
    qualifications.forEach(experiance => {
        var projInfo = qualifications.projects;

        $(".qualifications").append(

            `<div class="col-md-6 col-lg-4" >
                    <div class="card card-product">
                        <div class="card-image">
                            
                            <img class=img src="${experiance.expImg}">
                        
                        </div>
                        <div class="card-content">
                            <h4 class="card-title">
                                <a>${experiance.title}</a>
                            </h4>
                        </div>
                    </div>
                </div>
        </div>`)
        

    });


}

var populateDevProjects = function () {
    var projects = qualifications[0].projects
    projects.forEach(element => {
        $("#projectDiv").append(
            `<div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card card-project">
                <div class="card-image" >
                    
                        <img class=img src=${element.projImg}>
                
                </div>
                <div class="card-content" >
                    <h4 class="proj-card-title">
                        <a href=${element.hostedURL}>${element.title}</a>
                    </h4>
                    <h6 class="proj-card-title">
                    <a href=${element.gitHub}>GitHub Repository</a>
                    </h6>
                </div>

            </div>
        </div>`
        )
    })
}



$("#resume").click(function () {

});

var showResume = function () {
    $("#intro").hide();
    $("#competency").hide();
    $("#devProjects").hide();
    $("#resumeDiv").show();
}

var homePage = function () {
    $("#intro").show();
    $("#competency").show();
    $("#devProjects").show();
    $("#resumeDiv").hide();
}


$(document).ready(function () {
    populateQualifications();
    populateDevProjects();
});

