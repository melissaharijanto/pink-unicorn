import colors from "../colors"

const lessons = [
    {   id: 1,
        mantra: "Welcome to Geography!",
        image: "world/mexico.jpg",
        audio: null,
        text: "Geography",
        headingColor: `${colors.five}`,
        textColor: `${colors.three}`,
        introduction: "Welcome to today's geography lesson focused on Mexico! Mexico, located in North America, is a vibrant and culturally rich country known for its diverse landscapes and fascinating history. From the iconic Mayan ruins of Chichen Itza to the stunning beaches of Cancun, Mexico offers a wide range of geographical features to explore. We will delve into the country's physical geography, including its mountain ranges, deserts, and coastal regions. Additionally, we will examine Mexico's political and cultural geography, exploring its states, major cities, and the customs and traditions that shape its unique identity. Get ready for an exciting journey through the geography of Mexico!"
    },
    {   id: 2,
        mantra: "Welcome to Science!",
        image: "classroom/laboratory.webp",
        audio: null,
        text: "Science",
        headingColor: `${colors.three}`,
        textColor: `${colors.one}`,
    },
    {   id: 3,
        mantra: "Welcome to Astronomy!",
        image: "singapore/night_view.jpg",
        audio: null,
        text: "Astronomy",
        headingColor: `${colors.five}`,
        textColor: `${colors.three}`,
    },
    {   id: 4,
        image: "classroom/classroomcartoon.jpg",
        text: "< Back to Home"
    }
]

export default lessons;