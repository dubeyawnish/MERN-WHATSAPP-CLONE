import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from "./Components/Messenger";
// components
import AccountProvider from './Context/AccountProvider'


function App() {
const clientId='790465726657-dnj4bq371d2b5tv4ijremmp96qk7cdeu.apps.googleusercontent.com'


  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
