<script type="text/javascript">
const devtools = "0;Success;TX151028132832A001;10000.00;IDR;Payment For Me;28/10/2015 13:28:32";

// Example usage: Log the response to the console
console.log(devtools);

</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Response</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <script>
        // Function to display data on the webpage
        function displayOnPage(devtools) {
            // Create a container div
            const container = document.createElement("div");

            // Add response code and message
            container.innerHTML = `
                <pre>${JSON.stringify(devtools, null, 2)}</pre>
            `;

            // Append everything to the body
            document.body.appendChild(container);
        }

        // Call the function to display the data
        displayOnPage(devtools);
    </script>
</body>
</html>
