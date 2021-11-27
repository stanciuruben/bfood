import SearchBar from "../components/navbar/SearchBar";
import UserInfo from "../components/navbar/UserInfo";
import Cart from "../components/navbar/Cart";

const Navbar = () => (
    <nav>
        <a href="/">BFOOD</a>
        <SearchBar />
        <Cart />
        <UserInfo />
    </nav>
);

export default Navbar;