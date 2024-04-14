<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python & JavaScript Interaction</title>
    <script>
        async function sendMessage() {
            const messageInput = document.getElementById('message');
            const responseDiv = document.getElementById('response');
            
            try {
                const response = await fetch('/api/message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: messageInput.value })
                });
                const data = await response.json();
                responseDiv.textContent = data.reply;
            } catch (error) {
                console.error('Error:', error);
                responseDiv.textContent = 'An error occurred';
            }
        }
    </script>
</head>
<body>
    <input type="text" id="message" placeholder="Type your message here">
    <button onclick="sendMessage()">Send Message</button>
    <div id="response"></div>
</body>
</html>
