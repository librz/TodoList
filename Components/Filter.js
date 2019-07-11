import React, { Component } from 'react'
import { FilterTypes } from './FilterTypes'
import './Filter.css'

export class Filter extends Component {
    handleClick = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        const selectedStyle = {
            textDecoration: "underline"
        }
        const {filterText} = this.props;
        return (
            <div className="Filter">
                <button 
                value={FilterTypes.ALL}
                style={filterText === FilterTypes.ALL ? selectedStyle : null}
                onClick={this.handleClick}
                >所有事项</button>
                <button 
                value={FilterTypes.INCOMPLETED}
                style={filterText === FilterTypes.INCOMPLETED ? selectedStyle : null}
                onClick={this.handleClick}
                >未完成</button>
                <button 
                value={FilterTypes.COMPLETED}
                style={filterText === FilterTypes.COMPLETED ? selectedStyle : null}
                onClick={this.handleClick}
                >已完成</button>
            </div>
        )
    }
}

export default Filter
