import React from "react";
import HomePageButton from "./HomePageButton";
import { PropTypes } from 'prop-types';
import { MdLogout, MdGTranslate, MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { LocaleConsumer } from "../contexts/LocaleContext";
import { ThemeConsumer } from '../contexts/ThemeContext';
import ArchivePageButton from "./ArchivePageButton";
import ActivePageButton from "./ActivePageButton";

function NoteHeader({ logout, name, }) {

    return (
        <LocaleConsumer>
            {
                ({ toggleLocale }) => {
                    return (
                        <header className="note__header" >
                            <nav className="nav container">
                                <HomePageButton />
                                <div className="nav__menu">
                                    <ul className="nav__list">
                                        <li className="nav__item">
                                            <ActivePageButton />
                                        </li>
                                        <li className="nav__item">
                                            <ArchivePageButton />
                                        </li>
                                        <li className="nav__item">
                                            <button className="nav__button" onClick={toggleLocale}><MdGTranslate /></button>
                                        </li>
                                        <li className="nav__item">
                                            <ThemeConsumer>
                                                {({ theme, toggleTheme }) => {
                                                    return <button className="nav__button" onClick={toggleTheme}>{theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}</button>;
                                                }}
                                            </ThemeConsumer>
                                        </li>

                                        <li className="nav__item">
                                            <button className="nav__button nav__button-logout" onClick={logout}>{name} <MdLogout /></button>
                                        </li>

                                    </ul>
                                </div>
                            </nav>
                        </header>
                    )
                }
            }
        </LocaleConsumer>
    )
}

NoteHeader.propTypes = {
    logout: PropTypes.func,
    name: PropTypes.string,
}

export default NoteHeader;