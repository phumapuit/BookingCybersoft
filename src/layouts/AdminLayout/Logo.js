import React from 'react';

const Logo = (props) => {
  return (
    <img
      style={{ width: '80px'}}
      alt="Logo"
      src="/img/logo-neko.png"
      {...props}
    />
  );
};

export default Logo;
