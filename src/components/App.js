import React from 'react';
import BottomBar from './BottomBar';
import {CreateBottomSheet} from './BottomSheet';
import PouchDB from 'pouchdb-browser';
import Project from './Project';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.db = new PouchDB('productive');
        this.state = {
            projects: null,
        }
        this.db.changes({
            since: 'now',
            live: true,
            include_docs: true,
            descending: true,
        }).on('change', (change) => {
            // received a change
            this.componentDidMount();
        }).on('error', (err) => {
            // handle errors
            console.log(err);
        });
    }

    // function renderChanges(){

    // }

    componentDidMount() {
        this.db.allDocs({ include_docs: true, descending: true })
            .then(i => i)
            .then(i => { this.setState({ projects: i.rows }) })
            .catch(e => { console.log(e) })
    }

    deleteProject = (doc) => {
        if(window.confirm("Are you sure you want to delete?")) this.db.remove(doc)
    }

    render() {
        let { projects } = this.state;
        return (
            <>
                <div className="toolbar d-flex align-items-center p-3"><h3 className="cursive">Productive</h3></div>
                <div id="overlay"></div>
                <div id="main-panel">
                    {projects
                        ? projects.map(p => <Project key={p.doc._id} doc={p.doc} onDelete={this.deleteProject} />)
                        : ""}
                </div>
                <BottomBar />
                <CreateBottomSheet db={this.db} />
            </>
        );
    }
}

export default App;