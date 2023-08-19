import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArchivePage from "../pages/ArchivePage";
import AddPage from "../pages/AddPage";
import NotePage from "../pages/NotePage";
import NoteHeader from "./NoteHeader";
import NotFound from "./NotFound";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import { LocaleProvider } from "../contexts/LocaleContext";
import { ThemeProvider } from "../contexts/ThemeContext";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authedUser: null,
            initializing: true,
            localeContext: {
                locale: localStorage.getItem('locale') || 'id',
                toggleLocale: () => {
                    this.setState((prevState) => {
                        const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
                        localStorage.setItem('locale', newLocale);
                        return {
                            localeContext: {
                                ...prevState.localeContext,
                                locale: newLocale
                            }
                        }
                    })
                }
            },
            theme: localStorage.getItem('theme') || 'dark',
            toggleTheme: () => {
                this.setState((prevState) => {
                    const newTheme = prevState.theme === 'dark' ? 'light' : 'dark';
                    localStorage.setItem('theme', newTheme);
                    return {
                        theme: newTheme
                    };
                });
            }

        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUserLogged();
        this.setState(() => {
            return {
                authedUser: data,
                initializing: false,
            };
        });
        document.documentElement.setAttribute('data-theme', this.state.theme);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.theme !== this.state.theme) {
            document.documentElement.setAttribute('data-theme', this.state.theme);
        }
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
            };
        });
    }

    onLogout() {
        this.setState(() => {
            return {
                authedUser: null
            }
        });
        putAccessToken('');
    }

    render() {
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
                <ThemeProvider value={this.state}>
                    <LocaleProvider value={this.state.localeContext}>
                        <div>
                            {/* <NoteHeader /> */}
                            <Routes>
                                <Route path="/*" element={<LoginPage LoginSuccess={this.onLoginSuccess} />} />
                                <Route path="/register" element={<RegisterPage />} />
                            </Routes>
                        </div >
                    </LocaleProvider>
                </ThemeProvider>
            )
        }

        return (
            <ThemeProvider value={this.state}>
                <LocaleProvider value={this.state.localeContext}>
                    <div>
                        <NoteHeader logout={this.onLogout} name={this.state.authedUser.name} theme={this.state.theme} toggleTheme={this.state.toggleTheme} />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/archive" element={<ArchivePage />} />
                            <Route path="/add" element={<AddPage />} />
                            <Route path="/note/:id" element={<NotePage />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div >
                </LocaleProvider>
            </ThemeProvider>
        )
    }
}

export default NoteApp;