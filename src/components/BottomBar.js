import React from 'react';
import Button from './Button';

export default class BottomBar extends React.Component {
    render() {
        return (
            <div id="bottom-bar" className="d-flex bg-white justify-content-center">
                <Button />
            </div>
        );
    }
}