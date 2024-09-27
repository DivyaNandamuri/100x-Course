
interface Todos{
    task: string,
    details: string
}

// interface TodoInput{
//     to:Todos
// }
export function Todo({task,details}: Todos){
    return <div>
        <h2>{task}</h2>
        <h2>{details}</h2>

    </div>
}
