import React from 'react'

// Actions :: Props -> React.Component
export default ({
                    title = '',
                    index,
                    openRemoveConfirmation
                }) =>
    <div className="card">
        <div className="title">{title} - {index}</div>
        <button id={index} className="remove_button"
                onClick={openRemoveConfirmation}>
            Remove
        </button>
    </div>
