const VideoTitle = ({title, description}) => {

    return(
        <div className=" pt-[20%] px-6 absolute w-screen aspect-video bg-gradient-to-r from-black ">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="w-1/2 text-lg my-2 text-white">{description}</p>
            <div className="flex gap-3 my-5">
                <button className="p-6 py-2  rounded bg-white text-black text-xl hover:bg-opacity-80"> ▶️ Play</button>
                <button className="p-6 py-2 rounded bg-gray-500 text-white text-l"> ℹ️ More Info</button>
            </div>
        </div>
    )

}

export default VideoTitle;