import React from 'react';

const mystyle = {position: 'fixed', zIndex: '100', backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%', left: '0', top: '0'};

const backdrop = (props) => (
    props.show ? <div style={mystyle} onClick={props.clicked}></div> : null
);

export default backdrop;