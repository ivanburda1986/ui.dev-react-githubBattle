import React from 'react';
import PropTypes from 'prop-types';
import Hover from './Hover';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    cursor: 'pointer'
  },
  tooltip:{
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    margineLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'black',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px'
  }
}

export default function Tooltip ({text, children}){
    return(
      <Hover>
        {(hovering)=>(
          <div style={styles.container}>
              {hovering === true ? <div style={styles.tooltip}>{text}</div> : null}
              {children}
          </div>
        )}
      </Hover>
    );
}




Tooltip.propTypes = {
  text: PropTypes.string.isRequired
}