import React from "react";
import NoteItem from "./NoteItem";

class NoteList extends React.Component {
    render() {
        return this.props.notes.length > 0 ? (
            <div className="note__list" >
                {
                    this.props.notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={this.props.onDelete}
                            onArchive={this.props.onArchive}
                            {...note}
                        />
                    ))
                }
            </div>
        ) : (
            <p>Tidak ada catatan</p>
        )
    }
}

export default NoteList;