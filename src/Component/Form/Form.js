import React from 'react'

// Form :: Props -> React.Component
export default ({
                    currentTitle = '',
                    setTitle,
                }) =>
    <form className="creatingCardForm">
        <label>
            Title:
            <input id="title_form"
                   type="text"
                   value={currentTitle}
                   onChange={setTitle}/>
        </label>
    </form>