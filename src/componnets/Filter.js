import React, { useContext } from 'react'
import FilterTypes from './FilterTypes'
import { TodoMethods } from './App'

const selectedStyle = {
    textDecoration: "underline",
    fontSize: "21px",
    backgroundColor: "sandybrown"
}

function Filter({ currentType }) {
    const { setFilterType } = useContext(TodoMethods);

    function handleClick(filterType) {
        return () => {
            setFilterType(filterType)
        }
    }

    return (
        <div className="Filter">
            <button 
                style={currentType === FilterTypes.ALL ? selectedStyle : null}
                onClick={ handleClick(FilterTypes.ALL) }
            >
                所有事项
            </button>

            <button 
                style={currentType === FilterTypes.INCOMPLETED ? selectedStyle : null}
                onClick={ handleClick(FilterTypes.INCOMPLETED) }
            >
                未完成
            </button>

            <button 
                style={currentType === FilterTypes.COMPLETED ? selectedStyle : null}
                onClick={ handleClick(FilterTypes.COMPLETED) }
            >
                已完成
            </button>
        </div>
    )
}
export default Filter;