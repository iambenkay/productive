import React from 'react';

export default class Project extends React.Component {
    render() {
        return (
            <div className="p-3 d-flex align-items-center project justify-content-between" style={{borderLeft: `5px solid ${this.props.doc.color}`}}>{this.props.doc.name}
                <span className="d-flex flex-row align-items-center justify-content-around">
                    <span className="mx-2 time d-flex align-items-center"><span className="fi-play play pl-1"></span>{/*<span class="ml-1 mr-2">3:10</span>*/}</span>
                    <span className="material-icons delete" onClick={() => { this.props.onDelete(this.props.doc) }}>delete</span>
                </span>
            </div>
        );
    }
}