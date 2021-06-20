import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import { GoogleLogin } from 'react-google-login';



function App() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData({name:response.name, email:response.email});
    setPicture(response.picture.data.url);

    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  const responseGoogle = (response) => {
    console.log(response);
    setData({name:response.profileObj.name, email:response.profileObj.email});
    setPicture(response.profileObj.imageUrl);

    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }




  const SignOut = (response) =>{
    console.log("Logged Out");
    setLogin(false);
  }





  return (
    <>
      <Header />
        <div className="container"> 
        {!login && 
                <h3 className="welcomeScreen">Welcome to <b>THE SPARKS FOUNDATION</b></h3>
              }
          <Card className="card">
            <Card.Header className="header">
              {!login && 
                <h3 className="signUpText">Sign Up</h3>
              }
              {!login &&
                <FacebookLogin
                  appId="299743908454060"
                  autoLoad={false}
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook" />
              }


              {!login &&
                <GoogleLogin
                  clientId="1094161518828-6631fsvbuhe09cij4ije6k6fdnu9qkkp.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  autoLoad={false}
                  cookiePolicy={'single_host_origin'}
                />
              }

              {login &&
                <Image src={picture} roundedCircle className="userImg"/>
              }
              
            </Card.Header>
            

            {login &&
              <Card.Body>
                <Card.Title>
                  <h1 className="card__title"> Welcome, { data.name }</h1>
                </Card.Title>
                <Card.Text>
                  <h6 className="card__email"> { data.email } </h6> 
                </Card.Text>
                <button onClick={SignOut} className="signOutButton">Sign Out</button>
              </Card.Body>
            }

          </Card>
        </div>
    </>
  );
}

export default App;