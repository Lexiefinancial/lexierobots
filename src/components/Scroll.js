import React from 'react';

const Scroll = (PaymentResponse) => {
    
    return (
        <div style={{overflowY: 'scroll', border: '5px dotted pink', height: '500px'}}>
            {PaymentResponse.children}
        </div>
    );
};

export default Scroll;
