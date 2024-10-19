import { db, auth } from './firebaseConfig.js';
import { collection, addDoc, getDocs } from "firebase/firestore";

const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

async function getMessages() {
    const messagesCollection = collection(db, 'messages');
    const snapshot = await getDocs(messagesCollection);
    snapshot.forEach(doc => {
        const message = doc.data();
        const messageElement = document.createElement('div');
        messageElement.textContent = message.text;
        messagesDiv.appendChild(messageElement);
    });
}

sendButton.addEventListener('click', async () => {
    const messageText = messageInput.value;
    if (messageText) {
        await addDoc(collection(db, 'messages'), { text: messageText });
        messageInput.value = '';
        messagesDiv.innerHTML = ''; // Clear messages to refresh
        getMessages();
    }
});

// Load messages on start
getMessages();
