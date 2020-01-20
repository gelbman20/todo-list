import React from "react";

function CheckIcon({className = ''}) {
  return(
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="14.5"/>
      <path d="M8 15L13.5 21L22.5 8"/>
    </svg>
  );
}

export default CheckIcon;