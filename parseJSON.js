const fs = require('fs');
const path = require('path');

function parseJSONFile(filePath) {
    try {
        const absolutePath = path.resolve(filePath);
        const fileContent = fs.readFileSync(absolutePath, 'utf8');
        const jsonData = JSON.parse(fileContent);
        return jsonData;
    } catch (error) {
        console.error('Error parsing JSON file:', error);
        return null;
    }
}

// Example usage
const jsonData = parseJSONFile('/path/to/your/file.json');
console.log(jsonData);