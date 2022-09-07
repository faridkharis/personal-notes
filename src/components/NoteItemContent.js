import React from "react";

function NoteItemContent({ title, createdAt, body }) {
    return (
        <div className="note__content">
            <p className="note__title">{title}</p>
            <p className="note__date">{createdAt}</p>
            <p className="note__body">{body}</p>
        </div>
    );
}

export default NoteItemContent;