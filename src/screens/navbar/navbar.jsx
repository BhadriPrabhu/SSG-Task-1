import { Link } from 'react-router-dom'


export function Navbar() {

    return (
            <div style={{ display: 'flex', justifyContent: "flex-start", padding: "10px", gap: "20px" }}>
                <Link to="/" style={{ fontWeight: "bold", fontSize: "30px", textDecoration: "none", color: "black" }}>Home</Link>
                <Link to="../about" style={{ fontWeight: "bold", fontSize: "30px", textDecoration: "none", color: "black" }}>About</Link>
                <Link to="../contact" style={{ fontWeight: "bold", fontSize: "30px", textDecoration: "none", color: "black" }}>Contact</Link>
            </div>
    );
}