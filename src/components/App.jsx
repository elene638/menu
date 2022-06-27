import React from "react";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

function App() {
    const [menuItems, setMenu] = React.useState(menu)
    const [categories, setCategories] = React.useState([])




    return (
        <div className="main">
            <div className="menu-section">
                <h2>Our Menu</h2>
                <hr className="main-hr"/>
            </div>
            <Categories />
            <Menu 
                items={menuItems}
            />
        </div>
    )
}

export default App;