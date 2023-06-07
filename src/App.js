import 'bootstrap/dist/css/bootstrap.min.css'
import Auth from './Navbar/Auth'
import Guest from './Navbar/Guest'
import AuthUser from './components/AuthUser'

function App() {
  const {getToken} = AuthUser();
  if (!getToken()) {
    return <Guest />
  }

  return (
      <Auth />
  );
}

export default App;
