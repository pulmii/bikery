import React from 'react';

//tuodaan buttonien tyylimäärittelyt
import './buttons.css';

//määritellään secondary ja primary-buttoneille arvot
const classNames = classnames => classnames.join(" ");

const Button = ({ className = "", primary, secondary, ...props}) => {
  return (
    <button 
      type="button" 
      className={classNames([
          "button",
          className,
          primary ? "button--primary" : "",
          secondary ? "button--secondary" : ""
      ])}
      {...props} />    
  );
}

const FloatingButton = ({className = "", ...props}) => {
    return (
      <Button 
        className={classNames(["button--floating", className])}
        {...props} />
    );
}

export { Button as default, Button, FloatingButton }