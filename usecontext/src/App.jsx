import './App.css'
import { UserProvider } from './contexts/UserContext';
import Header from './components/Header';
import UserDetails from './components/UserDetails'
import UserProfile from './components/UserProfile';

const App = () => {

  return (
    <>
      <UserProvider>
        <Header />
        <UserDetails />
        <UserProfile />
      </UserProvider>
    </>
  )
}

export default App;