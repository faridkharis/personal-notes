import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteItemAction({ id, onDelete, onArchive, archived }) {
    return (
        <div className="note__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
        </div>
    )
}

export default NoteItemAction;