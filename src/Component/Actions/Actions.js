import React from 'react'

// Actions :: Props -> React.Component
export default ({
                    addCard,
                }) =>
    <div>
        <button className="add_card" onClick={addCard}>Add another card</button>
    </div>
