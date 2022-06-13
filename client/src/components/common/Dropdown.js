import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Dropdown({ dropdownListItems }) {
    return (
        <div className="dropdown">
            <button className="btn float-end centered dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Types
            </button>
            <ul className="general dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                    dropdownListItems.map((listItem, index) => {
                        return (
                            <li key={index}><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to={listItem.link}>{listItem.label}</NavLink></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
