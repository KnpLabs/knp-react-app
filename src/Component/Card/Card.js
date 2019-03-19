import React from 'react'

// Card :: Props -> React.Component
export default ({
                    cards = [],
                    isCreating = false,
                    currentTitle = '',
                    setTitle,
                    addCard,
                }) =>
    <div id="todo">

        <div>
            {isCreating &&
            <form className="creatingCardForm">
                <label>
                    Title:
                    <input id="title_form"
                           type="text"
                           value={currentTitle}
                           onChange={setTitle}/>
                </label>
            </form>
            }
        </div>

        <button className="add_card" onClick={addCard}>Add another card</button>
    </div>