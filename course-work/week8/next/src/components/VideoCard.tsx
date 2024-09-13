export function VideoCard(props: any) {
    return <div>
        <img src={props.image} className="rounded-3xl bg-red-500"></img>
        <div className="grid grid-cols-12 pt-2 bg-yellow-500">
            <div className="col-span-1">
                <img className={"rounded-full w-20 h-20" 
                    }
                    src={props.thumb}>
                </img>
            </div>
            <div className="col-span-11 pl-5">
            <div>
                {props.title}
            </div>
            <div className="col-span-11 text-gray-500 text-base">
                {props.name}
            </div>
            <div className="col-span-11 text-gray-500 text-base">
                {props.views} | {props.days}
            </div>
            </div>
        </div>
    </div>
}