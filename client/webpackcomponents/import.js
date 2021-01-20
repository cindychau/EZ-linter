import React from 'react';

const Import = (props) => {
    return (
        <div>
            <span style={{color:'#9d4edd'}} >const</span> {props.name} = <span style={{color:'#f4a261'}} >require</span>(<span style={{color:'#2a9d8f'}}>{props.path}</span>);
        </div>
    );
}

export default Import;