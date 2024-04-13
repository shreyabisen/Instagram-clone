import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [loggedInUser, setloggedInUser] = useState(null)
  useEffect(() => {
    const subScribe = onAuthStateChanged(auth, (user) => {//check krta h ki user loged in h ki nh 
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setloggedInUser(user.uid)
        // ...
      } else {
        setloggedInUser(null)
        // User is signed out
        // ...
      }
    });
    return () => {
      subScribe()
    }
  })


  return (
    <div className="flex justify-center">

      {
        loggedInUser ?
          <Homepage /> : <Login />
      }


    </div>
  );
}

export default App;
