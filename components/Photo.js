import React from "react"
import Photos from "./Photos"

const Photo = ({PhotosList}) => {
    return (
        <div id="main">
            {
                PhotosList.map((user, i) => {
                    return (
                        <Photos key={i} 
                        src={PhotosList[i].src} 
                        thumbnail={PhotosList[i].src}
                        />
                    );
                })
            }
            
        </div>
    );
}

export default Photo;