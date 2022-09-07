import React from "react";

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
            <div className="input__modal">
                <div className="input__modal-content">
                    <h2 className="main__title">Tambah Catatan</h2>

                    <form className="note__input" onSubmit={this.onSubmitEventHandler}>
                        <input type="text" className="title__input" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                        <span className="title__limit">Sisa karakter : {50 - this.state.title.length}</span>
                        <textarea rows="5" className="body__input" placeholder="Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} />

                        <button type="submit" className="primary__button">Tambahkan Catatan</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NoteInput;