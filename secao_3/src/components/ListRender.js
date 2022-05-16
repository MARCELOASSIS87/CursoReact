import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users] = useState([
        {id: 1, name:"MArcelo", age: 34},
        {id: 2, name:"Mazinho", age: 12},
        {id: 3, name:"Heelna", age: 14},
    ]);

    return (
        <div>
            <ul>
                {list.map((item,i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} = {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender