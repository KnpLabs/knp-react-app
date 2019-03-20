import React from 'react'
import Actions from "./index";

// Actions :: Props -> React.Component
export default ({
                    addCard,
                }) =>
    <div>
        <button className="add_card" onClick={addCard}>Add another card</button>
    </div>
