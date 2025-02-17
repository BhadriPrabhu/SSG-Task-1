import { useState } from "react";

export function Home() {

    const [count, setCount] = useState(0);

    const handleAddition = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if (count == 0) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }

    return (
        <div style={{ padding: "30px" }}>
            <h1>Home</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam inventore pariatur hic sunt veniam accusamus ut nulla harum ullam totam magnam temporibus, saepe cupiditate! Maxime rerum tempore sed animi sunt quibusdam eveniet? Dolorem natus et, assumenda provident cupiditate veniam culpa fuga nulla quae sunt possimus ducimus voluptate! Laboriosam, voluptates rerum?</h3>
            <div style={{border: "solid 2px black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "20px" }}>
                <h4 style={{fontSize: "20px"}}>Counter</h4>
                <div style={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center"}}>
                    <button onClick={handleAddition} style={{borderRadius: "20px", height: "40px", width: "40px", fontSize: "28px"}}>+</button>
                    <h3 style={{fontSize: "40px"}}>{count}</h3>
                    <button onClick={handleSubtract} style={{borderRadius: "20px", height: "40px", width: "40px", fontSize: "28px"}}>-</button>
                </div>
            </div>
        </div>
    );
}