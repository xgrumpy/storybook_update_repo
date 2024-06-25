import React from 'react';

type AuthenticatedComponentProps = {
    children: React.ReactElement | React.ReactElement[]; // Only allow certain types of React elements
};

const AuthenticatedComponent: React.FC<AuthenticatedComponentProps> = ({ children }) => {
    return (
        <div>{children}</div>
    );
};

export default AuthenticatedComponent;
