export function VideoCard(props: any) {
    return <div className="p-3">
        {/* main thumbnail */}
        <img src={props.image} className="rounded-3xl bg-red-500"></img>
        <div className="grid grid-cols-12 pt-2 bg-yellow-500">
            <div className="col-span-1">
                {/* channel logo */}
                <img className={"rounded-full w-20 h-20" 
                    }
                    src={props.thumbimage}>
                </img>
            </div>
            <div className="col-span-11 pl-5">
            <div>
                {/* channel details and views */}
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