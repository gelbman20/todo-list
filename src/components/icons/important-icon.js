import React from "react";

function ImportantIcon({className = ''}) {
  return(
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="14.5"/>
      <path d="M15.44 9.536V14.112C15.44 14.352 15.4347 14.5867 15.424 14.816C15.4187 15.0453 15.408 15.2773 15.392 15.512C15.376 15.7413 15.3547 15.9787 15.328 16.224C15.3067 16.464 15.28 16.7227 15.248 17H14.28C14.248 16.7227 14.2187 16.464 14.192 16.224C14.1707 15.9787 14.152 15.7413 14.136 15.512C14.12 15.2773 14.1067 15.0453 14.096 14.816C14.0907 14.5867 14.088 14.352 14.088 14.112V9.536H15.44ZM13.744 20.12C13.744 19.9813 13.768 19.8507 13.816 19.728C13.8693 19.6053 13.9387 19.4987 14.024 19.408C14.1147 19.3173 14.2213 19.2453 14.344 19.192C14.4667 19.1387 14.5973 19.112 14.736 19.112C14.8747 19.112 15.0053 19.1387 15.128 19.192C15.2507 19.2453 15.3573 19.3173 15.448 19.408C15.5387 19.4987 15.608 19.6053 15.656 19.728C15.7093 19.8507 15.736 19.9813 15.736 20.12C15.736 20.264 15.7093 20.3973 15.656 20.52C15.608 20.6373 15.5387 20.7413 15.448 20.832C15.3573 20.9227 15.2507 20.992 15.128 21.04C15.0053 21.0933 14.8747 21.12 14.736 21.12C14.5973 21.12 14.4667 21.0933 14.344 21.04C14.2213 20.992 14.1147 20.9227 14.024 20.832C13.9387 20.7413 13.8693 20.6373 13.816 20.52C13.768 20.3973 13.744 20.264 13.744 20.12Z"/>
    </svg>
  );
}

export default ImportantIcon;