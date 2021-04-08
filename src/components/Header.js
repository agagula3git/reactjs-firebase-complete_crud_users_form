import React from 'react';
import logo from '../logo.svg';

export default function Header() {
    
    return (
        <div className="d-flex flex-row p-2 justify-content-between align-items-center">
            <div className="d-flex flex-row">
                <img className="mt-4" src={logo} alt="react-logo" height="90px"/>
                <div className="mt-4">
                    <h1 className="text-info">Data Input Form</h1>
                    <h3 className="font-weight-lighter font-italic text-info">React Engineer Assignment</h3>
                </div>
            </div>
        </div>

    )
}