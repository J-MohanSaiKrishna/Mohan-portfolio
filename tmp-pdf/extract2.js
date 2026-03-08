const fs = require('fs');
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();

pdfExtract.extract('C:/Users/jmskr/Downloads/Mohan_Sai_Krishna_Senior_Resume_V2.pdf', {}, (err, data) => {
    if (err) return console.error(err);
    let text = '';
    data.pages.forEach(page => {
        page.content.forEach(item => {
            text += item.str + ' ';
        });
    });
    fs.writeFileSync('extracted_utf8.txt', text, 'utf8');
    console.log("Extraction complete.");
});
