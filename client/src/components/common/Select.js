import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Dropdown({ dropdownListItems }) {
    return (
        <select className="form-select" aria-label="Default select example">
            <option selected>Types</option>
            {
                dropdownListItems.map((listItem, index) => {
                    return (
                        <option key={index} value={listItem.label} className="form-select-option">{listItem.label}</option>
                    )
                })
            }
        </select>
    )
}
