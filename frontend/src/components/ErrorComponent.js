import React from 'react';

export default function Error({ error }) {
    return (
        <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: "pre-wrap" }}>
                {error && error.toString()}
                <br />
            </details>
        </div>
    );
}