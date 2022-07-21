import React from 'react'
import { NavLink } from 'react-router-dom'

const Quantity = [...new Array(100)];

export default function Select({ quantity, dropdownListItems, onChange }) {

    return (

        quantity ?
            <select className="form-select-sm" aria-label="quantity-select" onChange={(e) => onChange(e.target.value)
            }>
                {Quantity.map((each, index) => {
                    return (
                        <option key={index} value={index} className="form-select-option">{index} </option>
                    )
                })
                }
            </select > :
            <select className="form-select" aria-label="quantity-select" onChange={(e) => onChange(e.target.value)}>
                <option value="">Types</option>
                {
                    dropdownListItems.map((listItem, index) => {
                        return (
                            <option key={index} value={listItem.type} className="form-select-option">{listItem.label} </option>
                        )
                    })
                }
            </select>
    )
}
