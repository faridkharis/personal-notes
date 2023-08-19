import React from "react";
import NoteItem from "../components/NoteItem";
import SearchBar from "../components/SearchBar";
import AddPageButton from "../components/AddPageButton";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";
import PropTypes from "prop-types";

export default function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const { locale } = React.useContext(LocaleContext);

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        );
    });

    return (
        <section className="note__main container">
            <div className="home__header">
                <h2 className="main__title">{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
                <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            </div>
            <div className="note__list">
                {
                    filteredNotes?.length ? (
                        filteredNotes.map((note) => (
                            <NoteItem
                                key={note.id}
                                {...note}
                            />
                        ))
                    ) : (
                        <p>{locale === 'id' ? 'Tidak ada catatan' : 'No note'}</p>
                    )
                }
            </div>
            <AddPageButton />
        </section>
    )
}

HomePage.propTypes = {
    keywordChange: PropTypes.func,
    defaultKeyword: PropTypes.string,
}