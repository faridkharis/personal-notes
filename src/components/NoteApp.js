import React from "react";
import { getInitialData } from '../utils/data';
import NoteFooter from "./NoteFooter";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searching: '',
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchingHandler = this.onSearchingHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false
                    }
                ]
            }
        })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const archiveNote = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
        this.setState({ notes: archiveNote });
    }

    onSearchingHandler(event) {
        this.setState(() => {
            return {
                searching: event.target.value,
            };
        });
    }

    render() {
        const search = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searching.toLowerCase()));
        const active = search.filter((note) => {
            return note.archived === false;
        });
        const archive = search.filter((note) => {
            return note.archived === true;
        });
        return (
            <div>
                <NoteHeader onSearch={this.onSearchingHandler} />
                <div className="note__main container" >

                    <NoteInput addNote={this.onAddNoteHandler} />

                    <h2 className="main__title">Catatan Aktif</h2>
                    <NoteList notes={active} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />

                    <h2 className="main__title">Arsip</h2>
                    <NoteList notes={archive} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />

                </div>
                <NoteFooter />
            </div>

        )
    }
}

export default NoteMain;