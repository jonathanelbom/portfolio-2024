import * as React from 'react';

const AccordianContext = React.createContext();

const accordianReducer = (state, action) => {
    const { type, value } = action;
    switch (type) {
        case 'open': {
            return { ...state, open: value };
        }
        case 'close': {
            return { ...state, open: '' };
        }
        default: {
            return { ...state };
        }
    }
};

const AccordianProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(accordianReducer, { open: '' });
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch };
    return <AccordianContext.Provider value={value}>{children}</AccordianContext.Provider>;
};

const useAccordian = () => {
    const context = React.useContext(AccordianContext);
    if (context === undefined) {
        throw new Error('useAccordian must be used within a AccordianProvider');
    }
    return context;
};

export { AccordianContext, AccordianProvider, useAccordian };
