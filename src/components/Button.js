import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Style } from '@material-ui/icons';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #40916C 30%, #40916C 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(105, 105, 105, .3)',
    fontFamily: 'Roboto Condensed, sans-serif',
    fontSize: '18px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default function ClassesShorthand({title, path, link, onClick}) {

  return <>
    {path && 
    <Link to={path}>
      <StyledButton>
        {title}
      </StyledButton>
    </Link>}
    {link && 
      <a href={link} target='_blank'>
        <StyledButton>
          {title}
        </StyledButton>
      </a>}
    {onClick && <StyledButton onClick={onClick}>{title}</StyledButton>}
  </>;
}