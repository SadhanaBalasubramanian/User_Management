
const UserList = ({usersDetails}) => {       
    return (
       
             <tr>
                <td>{usersDetails.first_name}</td>
                <td>{usersDetails.last_name} </td>
                <td>{usersDetails.email}</td>
                <td>{usersDetails.id}</td>                              
            </tr>                                          

    )
}

export default UserList