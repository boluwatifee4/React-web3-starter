import React from "react";
const Web3 = require('web3');
type Props = {}

declare global {
    interface Window{
      ethereum?:any;
      web3?: any
    }
  }
const Welcome: React.FC<Props> = (props) => {
    const ethEnabled = async () => {
        if (window?.ethereum) {
          await window?.ethereum.request({method: 'eth_requestAccounts'});
          window.web3 = new Web3(window.ethereum);
        //   window.alert("Installed")
          return true;
        }
        // window.alert("Not Installed")
        return false;
      }
    React.useEffect(()=>{
          
    },[])
    return (
        // LOGIN SECTION 
       <h1>Welcome</h1>
    
    );
    }

    export default Welcome;