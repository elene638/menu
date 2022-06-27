import React from "react";

function Menu({items}) {

    return (
        <div className="menu">
            {items.map(item => {
                const {id, title, img, desc, price} = item
                return (
                    <div className="menu-item" key={id}>
                        <img alt="pic" src={img}/>
                        <div className="info">
                            <header>
                            <h4>{title}</h4>
                            <h4>{price}</h4>
                            </header>
                            <hr className="second-hr"/>
                            <p>{desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu;