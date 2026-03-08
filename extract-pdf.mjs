import fs from 'fs';
import pdf from 'pdf-parse';

async function extract() {
    const dataBuffer = fs.readFileSync('C:/Users/jmskr/Downloads/Mohan_Sai_Krishna_Senior_Resume_V2.pdf');
    const data = await pdf(dataBuffer);
    console.log(data.text);
}

extract().catch(console.error);
