export function MarkComplete({status}){
    return <div>
        {status==true ? 'Done': 'Mark as complete'}
    </div>
}

