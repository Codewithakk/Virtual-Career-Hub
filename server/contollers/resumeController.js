// Import any necessary modules or models
const Resume = require('../models/Resume'); // Example model, you should define your own model

// Controller function to handle resume building
const buildResume = async (req, res) => {
    try {
        // Extract data from request body
        const { personalInfo, education, workExperience, skills, languages, certifications } = req.body;

        // Here you can perform any necessary data validation or processing

        // Create a new resume object using the provided data
        const newResume = new Resume({
            personalInfo,
            education,
            workExperience,
            skills,
            languages,
            certifications
        });

        // Save the new resume to the database
        await newResume.save();

        // Send a success response
        res.status(201).json({ message: 'Resume created successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error building resume:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    buildResume
};

// const pdf = require('html-pdf');
// const dynamicResume = require('../docs/dynamic-resume');
// const staticResume = require('../docs/static-resume');

// const options = {
//     "height": "10.5in",
//     "width": "8in",
// };

// const resumeController = {
//     getHome: (req, res, next) => {
//         res.render('home');
//     },

//     getResumeMaker: (req, res, next) => {
//         const theme = req.params.theme === '1' ? 'blue' : 'green';
//         res.render('resume-maker', { theme });
//     },

//     postResumeMaker: (req, res, next) => {
//         const userName = req.body.name;
//         const lowercaseName = userName.toLowerCase();
//         const noSpaceName = lowercaseName.replace(' ', '');
//         const shortName = noSpaceName.slice(0, 10);

//         let themeOptions = {};

//         if (req.body.theme === 'blue') {
//             themeOptions = {
//                 leftTextColor: "rgb(91, 88, 255)",
//                 leftBackgroundColor: 'rgb(12, 36, 58)',
//                 wholeBodyColor: ' rgb(183, 182, 255)',
//                 rightTextColor: 'rgb(12, 36, 58)'
//             };
//         } else if (req.body.theme === 'green') {
//             themeOptions = {
//                 leftTextColor: "rgb(183, 217, 255)",
//                 leftBackgroundColor: 'rgb(0, 119, 89)',
//                 wholeBodyColor: ' rgb(rgb(139, 247, 205))',
//                 rightTextColor: 'rgb(0, 119, 89)'
//             };
//         }

//         pdf.create(dynamicResume(req.body, themeOptions), options).toFile(__dirname + "/docs/" + shortName + "-resume.pdf", (error, response) => {
//             if (error) throw Error("File is not created");
//             console.log(response.filename);
//             res.sendFile(response.filename);
//         });
//     },

//     getPdfStaticResume: (req, res, next) => {
//         pdf.create(staticResume(), options).toFile(__dirname + "/docs/static-resume.pdf", (error, response) => {
//             if (error) throw Error("File is not created");
//             console.log(response.filename);
//             res.sendFile(response.filename);
//         });
//     },

//     downloadPdf: (req, res, next) => {
//         const filePath = __dirname + '/docs/static-resume.pdf';
//         res.download(filePath);;
//     }
// };

// module.exports = resumeController;
