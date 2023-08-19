import React from "react";
import DeleteButton from "../components/DeleteButton";
import ArchiveButton from "../components/ArchiveButton";
import NotFound from "../components/NotFound"
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/network-data";
import { useNavigate, useParams } from "react-router-dom";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import PropTypes from 'prop-types';
import LocaleContext from "../contexts/LocaleContext";

export default function NotePage() {
    const { id } = useParams();
    const [note, setNotes] = React.useState([]);
    const navigate = useNavigate();
    const { locale } = React.useContext(LocaleContext);

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNotes(data);
        });
    }, [id]);

    async function onDeleteHandler(id) {
        const { data } = await deleteNote(id);
        setNotes(data);
        navigate('/');
    }

    async function onArchiveHandler(id) {
        const { data } = await archiveNote(id);
        setNotes(data);
        navigate('/archive')
    }

    async function onUnarchiveHandler(id) {
        const { data } = await unarchiveNote(id);
        setNotes(data);
        navigate('/')
    }

    return (
        <>
            {
                note ? (
                    <section className="container note__detail" >
                        <div className="note__item">
                            <p className="main__title note__title-detail">{note.title}</p>
                            <p className="note__date-detail">{note.createdAt}</p>
                            <p className="note__body-detail">{note.body}</p>

                        </div>
                        <div className="note__action">
                            {note.archived ? (
                                <ArchiveButton onClick={() => onUnarchiveHandler(id)}>
                                    <BiArchiveOut />
                                    {locale === 'id' ? 'Pindahkan' : 'Unarchive'}
                                </ArchiveButton>
                            ) : (
                                <ArchiveButton onClick={() => onArchiveHandler(id)}>
                                    <BiArchiveIn />
                                    {locale === 'id' ? 'Arsipkan' : 'Archive'}
                                </ArchiveButton>
                            )}

                            <DeleteButton onClick={() => onDeleteHandler(id)} />
                        </div>
                    </section >
                ) : <NotFound />
            }
        </>
    )

}

NotePage.propTypes = {
    note: PropTypes.object,
}
