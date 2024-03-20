// Importing required modules as given in the assignment instructions
const connect = require('connect'); 
const url = require('url');

// Function to handle incoming requests from the url
function calculate(req, res) {
    // Parsing the URL to extract query parameters
    const parsedUrl = url.parse(req.url, true);
    // Extracting query parameters
    const query = parsedUrl.query;
    console.log('Query parameters:', query); 
    
    // Extracting method, x, and y parameters from the query
    const method = query.method;
    // x number for calculation
    const x = parseFloat(query.x); 
    // y number for calculation

    const y = parseFloat(query.y); 
    // Checking if required parameters are missing or invalid
    if (!method || isNaN(x) || isNaN(y)) {
        // If any required parameter is missing or not a number, send an error response
        res.end('Invalid parameters provided');
        return;
    }

    let result; // Variable to store the result of the calculation

    switch(method) {
        case 'add':
            result = x + y; // Adding x and y
            break;
        case 'subtract':
            result = x - y; // Subtracting y from x
            break;
        case 'multiply':
            result = x * y; // Multiplying x and y
            break;
        case 'divide':
            result = x / y; // Dividing x by y
            break;
        default:
            res.end(`Invalid method: ${method}`);
            return;
    }

    // Sending the result as a response
    res.end(`${x} ${method} ${y} = ${result}`);
}

// Creating a  new server 
const app = connect();

// Attaching the calculate function to handle incoming requests from the url
app.use(calculate);

// Starting the server and listening on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
