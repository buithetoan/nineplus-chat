import firebase from 'firebase';

const config = {
    projectId: 'nineplus-chat',
    apiKey: 'AIzaSyBniluQ06HT8DtcRUfHs6SJBwDupgqssx8',
    databaseURL: 'https://nineplus-chat-default-rtdb.firebaseio.com'
  };
firebase.initializeApp(config);

export default firebase;