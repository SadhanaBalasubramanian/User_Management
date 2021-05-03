import UserList from "./UserList";

const UserData=({usersDetails}) =>{
  
    return (
         <div>
              <section>
  
                <div className="list_title">Users List <h6>Add User</h6></div>
                    <div className="tbl-header">
                        <table>
                            <thead>
                                <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Edit/Delete</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                            <table className="user_table">
                                 <tbody>
                                    {
                                        usersDetails.map((usersDetails,index)=>
                                        (<UserList key={index} usersDetails={usersDetails}   />))
                                    }
                                </tbody>
                             </table>
                     </div>             
            </section>
        </div>
        
     )
 }
 
 export default UserData