import React from 'react'
import Form from '../Form'
import Actions from '../Actions'

// Todo :: Props -> React.Component
export default ({
                    isCreating = false,
                }) =>
    <div id="todo">
        {isCreating &&
        <Form/>
        }
        <Actions/>
    </div>