import React from "react";
import PropTypes from "prop-types";
import { MdClose } from 'react-icons/md';
import { Link } from "react-router-dom";
import { LocaleConsumer } from '../contexts/LocaleContext';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const titleCharLimit = 50;
        this.setState(() => {
            return {
                title: event.target.value.slice(0, titleCharLimit),
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return (
            <LocaleConsumer>
                {
                    ({ locale }) => {
                        return (
                            <div className="card add__modal">
                                <div>
                                    <div className="add__header">
                                        <h2 className="add__title">{locale === 'id' ? 'Tambah Catatan' : 'Add Note'}</h2>
                                        <Link to="/" className="add__close"><MdClose /></Link>
                                    </div>
                                    <form className="add__form" onSubmit={this.onSubmitEventHandler}>
                                        <input type="text" className="input__form" placeholder={locale === 'id' ? 'Judul' : 'Title'} value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                                        <p className="input__limit">{locale === 'id' ? 'Sisa karakter' : 'Character left'} : {50 - this.state.title.length}</p>
                                        <textarea rows="5" className="input__form" placeholder={locale === 'id' ? 'Catatan' : 'Note'} value={this.state.body} onChange={this.onBodyChangeEventHandler} />

                                        <div className="input__button">
                                            <button type="submit" className="primary__button">{locale === 'id' ? 'Tambahkan' : 'Add Note'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                }
            </LocaleConsumer>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func,
}

export default NoteInput;