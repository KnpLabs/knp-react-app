import React from 'react'

// Form :: Props -> React.Component
export default ({
                    currentTitle = '',
                    setTitle,
                    submitForm,
                    cancelForm
                }) =>
    <div>
        <span>CREATE CARD</span>
        <form id="card_form" onSubmit={submitForm}>
            <label>
                Title:
                <input id="title_form"
                       type="text"
                       onKeyDown={cancelForm}
                       value={currentTitle}
                       onChange={setTitle}/>
            </label>
        </form>
    </div>