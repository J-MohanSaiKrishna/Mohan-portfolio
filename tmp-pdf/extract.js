const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('C:/Users/jmskr/Downloads/Mohan_Sai_Krishna_Senior_Resume_V2.pdf');

pdf(dataBuffer).then(function (data) {
    console.log("----EXTRACTED_TEXT_START----");
    console.log(data.text);
    console.log("----EXTRACTED_TEXT_END----");
}).catch(console.error);
