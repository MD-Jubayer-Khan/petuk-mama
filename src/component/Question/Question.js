import React from 'react';

const Question = () => {
    return (
        <div className='row row-cols-1 row-cols-md-3 w-75 align-items-center flex-wrap m-auto mt-2'>
            <div>
                <h4>Q1. How react work</h4>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. </p>
            </div>
            <div>
                <h4>Q2. How usestate works</h4>
                <p>useState is a Hook that allows to have state variables in functional components. pass the initial state to this function and another function to update this value</p>
            </div>
        </div>
    );
};

export default Question;