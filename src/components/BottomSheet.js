import React from 'react';

export class CreateBottomSheet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valid: true,
        }
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        if(this.refs.name.value.trim() !== ''){
            this.props.db.put({
                '_id': (new Date()).toJSON(),
                'name': this.refs.name.value,
                'color': this.refs.color.value,
            });
            this.refs.name.value = "";
            document.querySelector('.bottom-sheet').style.marginBottom = '-100%';
            document.querySelector('#overlay').style.display = 'none';
        } else {
            this.setState({valid: false});
        }
    }
    onInputChange = () => {
        if(this.refs.name.value.trim() === '') this.setState({valid: false});
        else this.setState({valid: true});
    }
    onBSBlur= () => {
        this.setState({valid: true})
    }
    render() {
        let {valid} = this.state;
        return (
            <div className="bottom-sheet p-3" onBlur={this.onBSBlur}>
                <form className="text-center pb-2" onSubmit={this.onFormSubmit}>
                    <h3 className="my-3">New Project</h3>
                    <div className="form-group text-left">
                        <label htmlFor="project-name">project name</label>
                        <input type="text" className="form-control"  onChange={this.onInputChange} ref="name" id="project-name" placeholder="Enter project name" />
                        <span className={`d-${valid ? "none" : "block"} text-danger`} id='valid'>Must specify name</span>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="project-color">project color</label>
                        <input type="color" className="form-control" ref="color" defaultValue="#0e6860" id="project-color" placeholder="Enter project color" />
                    </div>
                    <button type="submit" className="btn btn-primary w-50 p-create my-2">Create</button>
                </form>
            </div>
        );
    }
}

export class AboutBottomSheet extends React.Component {
    render() {
        return (
            <div className="bottom-sheet p-3" onBlur={this.onBSBlur}>
                
            </div>
        );
    }
}