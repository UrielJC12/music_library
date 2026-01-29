// PascalCase only
interface CardProps {
    imgName: string;
    playlistName: string;
    createdBy: string;
}

export function Card({imgName, playlistName, createdBy}: CardProps ) {
    return (
        <article className='card'>
            <header className="card_img">
                <img alt="foto del album" className="card_img-album" src= {imgName}></img>
            </header>
            <div className="playlist_info">
                <strong className="playlist_info-name">{playlistName}</strong>
                <span className="playlist_info-createdby">{createdBy}</span>
            </div>

            

        </article>
    );
}


