import React from "react";
import NoteItemContent from "./NoteItemContent";
import { showFormattedDate } from "../utils/local-data";
import PropTypes from 'prop-types';

function NoteItem({ id, title, createdAt, body }) {
    return (
        <div className="card note__item">
            <NoteItemContent
                id={id}
                title={title}
                createdAt={showFormattedDate(createdAt)}
                body={body}
            />
        </div>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItem;