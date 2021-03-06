import React from 'react';
export default function Tags({ tags, onClick }){
return (
    <div className="tag_btn_group">
        {
            tags.map((tag, index) => {
                return (
                    <div key={index}>
                        <button className="tag_btn" onClick={() => onClick(tag.type)}>{tag.label}</button>
                    </div>
                )
            })
        }
    </div>
)
}

