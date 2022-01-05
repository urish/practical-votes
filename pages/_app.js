import { FirebaseAppProvider } from 'reactfire';
import '../styles/globals.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCKBgG-vsqqTkhiaeXA9XRoyTVN8DxfAMY',
  authDomain: 'practical-votes.firebaseapp.com',
  projectId: 'practical-votes',
  storageBucket: 'practical-votes.appspot.com',
  messagingSenderId: '915771046953',
  appId: '1:915771046953:web:a22a3843faa742773b7038',
};

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Component {...pageProps} />
    </FirebaseAppProvider>
  );
}

export default MyApp;
