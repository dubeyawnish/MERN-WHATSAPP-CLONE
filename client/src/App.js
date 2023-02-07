import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from "./Components/Messenger";
// components


function App() {
const clientId=''


  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
