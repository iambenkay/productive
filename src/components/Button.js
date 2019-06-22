import React from 'react';

export default class Button extends React.Component {
    updateTheme = () => {
        document.querySelector('#overlay').style.display = 'block';
        document.querySelector('.bottom-sheet').style.marginBottom = '0%';
    }
    render() {
        return (
            <button className="main-btn btn text-center px-4 m-1" onClick={this.updateTheme}>
                <span className="fi-paperclip"></span> Add Project
            </button>
        );
    }
}