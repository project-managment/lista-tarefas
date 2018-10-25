import React from 'react';

export { isLoggedIn, getToken, logout };

function isLoggedIn(){
    if(sessionStorage.getItem('token') != null){
      return true;
    }
    return false;
  }

  function getToken(token){
    return sessionStorage.getItem('token');
  }

  function logout(){
      sessionStorage.removeItem('token');
    }
