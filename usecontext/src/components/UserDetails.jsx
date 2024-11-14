import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const UserDetails = () => {
    const { firstName, lastName, person, setFirstName, setLastName } = useContext(UserContext)

    console.log(person)

    const obj = {
        objOne: {
            objTwo: {
                arrayObj: [ {
                    
                }]
            }
        }
    }


    return (
        <>
            <h2>Hello from UserDetails Component</h2>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{person.firstName}</div>
            <div>{person.lastName}</div>

            <button onClick={() => setFirstName('Kevin')}>Change First Name</button>
        </>
    )
}

export default UserDetails