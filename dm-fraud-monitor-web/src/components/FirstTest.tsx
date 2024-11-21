import React from 'react';

interface MyComponentProps {
    title: string;
}

const FirstTest: React.FC<MyComponentProps> = ({ title }) => {
    return <h1>{title}</h1>;
};

export default FirstTest;
