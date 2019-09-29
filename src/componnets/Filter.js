import React, { Component } from 'react'
import FilterTypes from './FilterTypes'

const selectedStyle = {
    textDecoration: "underline",
    fontSize: "21px",
    backgroundColor: "sandybrown"
}

class Filter extends Component {
    render() {
        const { currentType, onChange } = this.props; 
        return (
            <div className="Filter">
                <button 
                    style={currentType === FilterTypes.ALL ? selectedStyle : null}
                    onClick={ () => { onChange(FilterTypes.ALL) } }
                >
                    所有事项
                </button>

                <button 
                    style={currentType === FilterTypes.INCOMPLETED ? selectedStyle : null}
                    onClick={ () => { onChange(FilterTypes.INCOMPLETED) } }
                >
                    未完成
                </button>

                <button 
                    style={currentType === FilterTypes.COMPLETED ? selectedStyle : null}
                    onClick={ () => { onChange(FilterTypes.COMPLETED) } }
                >
                    已完成
                </button>
            </div>
        )
    }
}
export default Filter;