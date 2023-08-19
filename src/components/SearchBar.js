import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <input
                            type="text"
                            className="search__input"
                            placeholder={locale === 'id' ? 'Carid berdasarkan judul' : 'Search by title'}
                            value={keyword}
                            onChange={(event) => keywordChange(event.target.value)}
                        />
                    )
                }
            }
        </LocaleConsumer>
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;