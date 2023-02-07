import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from "./Components/Messenger";
// components


function App() {
const clientId='790465726657-dnj4bq371d2b5tv4ijremmp96qk7cdeu.apps.googleusercontent.com'


  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
