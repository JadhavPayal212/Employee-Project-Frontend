import React from 'react'

const  ListEmployeeComponent = () => {
    const dummyData = [
        {
            "id": 1,
            "firstName": "Payal",
            "lastName": "Jadhav",
            "email":"payaljadhav212@gmail.com"
        },
        {
            "id": 2,
            "firstName": "manava",
            "lastName": "mahale",
            "email":"mahalemanava@gmail.com"
        },
        {
            "id": 3,
            "firstName": "pornima",
            "lastName": "vayal",
            "email":"pornimavayal34@gmail.com"
        },
        {
            "id": 4,
            "firstName": "uttam",
            "lastName": "jadhav",
            "email":"jadhavuttam1212@gmail.com"
        }
    ]

 
    return (
    <div>
        <h2>List Of Employees</h2>
        <table>
            <thread>
                <tr>
                    <tr>Emplpoyee Id</tr>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Address</th>
                </tr>
            </thread>
            <tbody>
                {
                    dummyData.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.email}</td>
                        </tr>)
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent