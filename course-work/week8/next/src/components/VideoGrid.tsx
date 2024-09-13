import { VideoCard } from "./VideoCard"


const Videos = [{
    key:1,
    title: "Introduction to ML",
    name:"Divya",
    image:"photo.png",
    thumbimage: "logo.png",
    views:"10M",    
    days:"10 Days"
},{ key:2,
    title: "Introduction to ML",
    name:"Divya",
    image:"photo.png",
    thumbimage: "logo.png",
    views:"10M",    
    days:"10 Days"
},{ key:3,
    title: "Introduction to ML",
    name:"Divya",
    image:"photo.png",
    thumbimage: "logo.png",
    views:"10M",    
    days:"10 Days"
},{ key:4,
    title: "Introduction to ML",
name:"Divya",
image:"photo.png",
thumbimage: "logo.png",
views:"10M",    
days:"10 Days"
},{ key:5,
    title: "Introduction to ML",
    name:"Divya",
    image:"photo.png",
    thumbimage: "logo.png",
    views:"10M",    
    days:"10 Days"
},{ key:6,
    title: "Introduction to ML",
    name:"Divya",
    image:"photo.png",
    thumbimage: "logo.png",
    views:"10M",    
    days:"10 Days"
},{ key:7,
    title: "Introduction to ML",
    name:"Divya",
    image:"photo.png",
    thumbimage: "logo.png",
    views:"10M",    
    days:"10 Days"
},{ key:8,
    title: "Introduction to ML",
    name:"Divya",
    image:"photo.png",
    thumbimage: "logo.png",
    views:"10M",    
    days:"10 Days"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Videos.map(video => <div>
            <VideoCard
            key={video.key}
            title={video.title}
            image={video.image}
            thumbimage={video.thumbimage}
            views={video.views}
            days={video.days}
            ></VideoCard>
        </div>)}
    </div>

}