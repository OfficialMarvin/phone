const output = document.getElementById('output');
const commandInput = document.getElementById('command');

commandInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = commandInput.value;
    output.innerHTML += `<div>> ${command}</div>`;
    commandInput.value = '';

    // Handle the command here
    if (command === 'ask' || command === 'ask cloudy' || command === 'cloudy' || command === 'hey' || command === 'hello') {
      // Call the AI prompt function
      promptAI();
    }
  }
});

function promptAI() {
  // Call the AI API and get the response
  const response = 'AI response'; // Replace with the actual AI response

  output.innerHTML += `<div>${response}</div>`;
}
