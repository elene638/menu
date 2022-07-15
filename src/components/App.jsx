import React from "react";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item)=> item.category))];
console.log(allCategories)

function App() {
    const [menuItems, setMenu] = React.useState(menu)
    const [categories, setCategories] = React.useState(allCategories)

    const filterItems = (category) => {
        if (category === "all") {
            setMenu(menu)
            return;
        }
        const newItems = menu.filter((item) => item.category === category)
        setMenu(newItems)
    }


    return (
        <div className="main">
            <div className="menu-section">
                <h2>Our Menu</h2>
                <hr className="main-hr"/>
            </div>
            <Categories 
                categories={categories}
                filterItems={filterItems}
            />
            <Menu 
                items={menuItems}
            />
        </div>
    )
}

export default App;