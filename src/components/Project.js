import React from 'react';

export default class Project extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {playback: 'play', time: ''}
    }
    onPlaybackEvent = () => {
        this.setState({
            playback: this.state.playback === 'play' ? 'pause' : 'play',
            time: this.state.playback === 'play' ? '3:10' : '',
        })
    }
    render() {
        return (
            <div className="p-3 d-flex align-items-center project justify-content-between" style={{borderLeft: `5px solid ${this.props.doc.color}`}}>{this.props.doc.name}
                <span className="d-flex flex-row align-items-center justify-content-around">
                    <span className="mx-2 time d-flex align-items-center"><span className={`fi-${this.state.playback} play ${this.state.playback === 'play' ? 'pl-1': ''}`} onClick={this.onPlaybackEvent}></span><span className={`${this.state.playback === 'play'? '': 'mr-2 ml-1'}`}>{this.state.time}</span></span>
                    <span className="material-icons delete" onClick={() => { this.props.onDelete(this.props.doc) }}>delete</span>
                </span>
            </div>
        );
    }
}