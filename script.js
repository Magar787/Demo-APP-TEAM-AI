function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userMsg = input.value.trim();

  if (!userMsg) return;

  chatBox.innerHTML += `<div><strong>You:</strong> ${userMsg}</div>`;

  let botResponse = "I'm not sure what you mean.";

  if (userMsg.toLowerCase().includes("hi") || userMsg.toLowerCase().includes("hello")) {
    botResponse = "Hello there!";
  } else if (userMsg.toLowerCase().includes("recommend")) {
    botResponse = "You should watch 'The Lion King'!";
  } else if (userMsg.toLowerCase().includes("bye")) {
    botResponse = "Goodbye! Have a great day!";
  }

  chatBox.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
