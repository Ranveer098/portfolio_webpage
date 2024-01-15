import React from 'react'
import PropTypes from 'prop-types';
const Layout = ({children,className=''}) => {
  return (
    <div className={` w-full h-full  inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}>
      {children}
      
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout
