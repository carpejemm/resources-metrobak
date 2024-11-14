import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
    const { firstName, lastName } = useContext(UserContext)
    console.log(firstName)
    return (
        <>
            This is the header component
            <div>{firstName}</div>
            <div>{lastName}</div>
        </>
    )
}

export default Header;