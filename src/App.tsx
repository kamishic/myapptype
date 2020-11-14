import * as React from 'react';
import './App.css';

//templates
import Header from './templates/Header'
import Contents from './templates/Contents'
import Footer from './templates/Footer'
//aws認証？
import Amplify, * as AmplifyModules from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure({
  ...awsconfig,                               
  aws_appsync_authenticationType: "API_KEY"
})

const App: React.FC = () => {
  console.log("App.tsx point")
  return (
    <React.Fragment>
      <Header />
      <Contents />
      <Footer />
    </React.Fragment>
  );
}

export default App;