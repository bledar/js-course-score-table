import React, { Component } from 'react'

export default class EmptyPlaceholder extends Component {
    render() {
        return (
            <div className="EmptyPlaceholderWrapper">
                <h3>No players in list!</h3>
                <h4>Click add player button to add players</h4>
            </div>
        )
    }
}
