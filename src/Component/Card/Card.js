import React from 'react'

// Actions :: Props -> React.Component
export default ({
                    title = '',
                }) =>
    <div>
        <span className="card">{title}</span>
    </div>
