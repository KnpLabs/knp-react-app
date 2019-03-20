import React from 'react'
import Form from '../Form'
import Card from '../Card'
import Actions from '../Actions'

// Todo :: Props -> React.Component
export default ({
                    isCreating = false,
                    cards = [],
                }) =>
    <div id="todo">
        {cards.length > 0 && cards.map((card, index) => (
            <Card key={index} title={card.title}/>
        ))}
        {isCreating &&
        <Form/>
        }
        <Actions/>
    </div>