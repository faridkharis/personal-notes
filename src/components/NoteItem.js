import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, archived }) {
    return (
        <div className="card">
            <table className="note__item">
                <tbody>
                    <tr valign="top">
                        <td>
                            <NoteItemContent title={title} createdAt={createdAt} body={body} />
                        </td>
                    </tr>
                    <tr valign="bottom">
                        <td>
                            <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NoteItem;