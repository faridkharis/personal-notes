import React from "react";
import { BiError } from "react-icons/bi"

function NotFound() {
    return (
        <section className="notfound">
            <h2 className="logo__404"><BiError /></h2>
            <h2 className="text__404">404 NOT FOUND</h2>
        </section>
    )
}

export default NotFound;