import SearchBar from "../components/navbar/SearchBar";
import UserInfo from "../components/navbar/UserInfo";

function Navbar() {
    return (
        <nav>
            <a href="/">BFOOD</a>
            <SearchBar />
            <UserInfo />
        </nav>
    );
}

export default Navbar;