import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function NoteItemContent({ id, title, createdAt, body }) {
    return (
        <div className="note__content">
            <Link to={`/note/${id}`}>
                <p className="note__title">{title}</p>
            </Link>
            <p className="note__date">{createdAt}</p>
            <p className="note__body">{body}</p>
        </div>
    );
}

NoteItemContent.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItemContent;