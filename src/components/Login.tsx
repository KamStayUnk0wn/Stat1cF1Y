import React from 'react';
import { loginUrl } from '../utils/spotify';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <a href={loginUrl} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Login with Spotify
      </a>
    </div>
  );
};

export default Login;