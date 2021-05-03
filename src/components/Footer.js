import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <p>Copyright &copy; 2021</p>
                <Link href="/about" >About</Link>
            </div>
        </footer>
    )
}

export default Footer