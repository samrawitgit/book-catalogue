import React from "react";
import Truncate from 'react-truncate';

function Details({book}) {

let volume = book.volumeInfo;

    return(
        <article className="details mt-3">
            <p><b>Catergory:</b> {volume.categories}</p>
            <Truncate 
            lines={2} 
            ellipsis={<span>...</span>}>
                {volume.description}
            </Truncate> 
            <span><a href={volume.infoLink}>Learn more</a></span>          
        </article>
    )
}

export default Details;