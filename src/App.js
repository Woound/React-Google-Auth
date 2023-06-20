import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import usersService from './services/users';
import { googleClientId } from './config';

function App() {
  return (
    <div className='main-container'>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwt_decode(credentialResponse.credential);
            console.log(details);
            console.log(credentialResponse);
            const userObject = {
              name: details.given_name,
              email: details.email,
            };
            usersService.create(userObject);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          theme='filled_black'
        />
        ;
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
