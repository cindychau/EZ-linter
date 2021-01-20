import React from 'react';

const Plugin = (props) => {
    return(
        <div>
        {`{
            plugins: [${props.plugins}]
        }`}
        </div>
    );
}

export default Plugin;