import colors from "../colors"

const lessons = [
    {   id: 1,
        mantra: "Welcome to Geography!",
        image: "world/mexico.jpg",
        audio: null,
        text: "Geography",
        headingColor: `${colors.five}`,
        textColor: `${colors.three}`,
        introduction: "Welcome to today's geography lesson focused on Mexico! Mexico, located in North America, is a vibrant and culturally rich country known for its diverse landscapes and fascinating history. From the iconic Mayan ruins of Chichen Itza to the stunning beaches of Cancun, Mexico offers a wide range of geographical features to explore. Get ready for an exciting journey through the geography of Mexico!"
    },
    {   id: 2,
        mantra: "Welcome to Science!",
        image: "classroom/laboratory.webp",
        audio: null,
        text: "Science",
        headingColor: `${colors.three}`,
        textColor: `${colors.one}`,
        introduction: "Welcome to today's science lesson in the laboratory! The laboratory is a place where scientific exploration comes to life. Here, we will delve into the world of hands-on experimentation, observation, and discovery. From conducting chemical reactions to analyzing microscopic organisms, the laboratory provides us with a controlled environment to investigate and understand the intricacies of the natural world. Get ready to engage in exciting experiments, develop critical thinking skills, and unlock the wonders of science right here in the laboratory!"
    },
    {   id: 3,
        mantra: "Welcome to Astronomy!",
        image: "astronomy/nasa.jpg",
        audio: null,
        text: "Astronomy",
        headingColor: `${colors.five}`,
        textColor: `${colors.three}`,
        introduction: "Welcome to today's astronomy lesson focused on the captivating planet Mars! Known as the \"Red Planet,\" Mars has captivated human imagination for centuries. As we embark on this astronomical journey, we will explore the unique features and mysteries that make Mars a fascinating celestial body. From its rusty red appearance to its intriguing geological formations, Mars offers valuable insights into the potential for extraterrestrial life and the future of human exploration. Get ready to embark on a cosmic adventure to discover the wonders of Mars!"
    },
    {   id: 4,
        image: "classroom/classroomcartoon.jpg",
        text: "< Back to Home"
    },
    {
        id: 5,
        mantra: "Welcome to History!",
        image: "history/military_fortress.avif",
        audio: null,
        text: "History",
        headingColor: `${colors.three}`,
        textColor: `${colors.one}`,
        introduction: "Welcome to today's history lesson set within the walls of a military fortress, as we delve into the monumental event of World War II. This fortress serves as a tangible reminder of the tumultuous times that shaped our world. We will uncover the intricate details of the global conflict that engulfed nations and transformed societies. From the rise of fascism to the devastating battles and heroic acts, we will examine the key events, significant figures, and the impact of World War II on a global scale."
    }
]

export default lessons;