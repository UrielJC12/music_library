// PascalCase only
interface CardProps {
    id: number; // Necesitamos un ID para las llaves y lógica
    imgName: string;
    songName: string;
    createdBy: string;
    onAction?: (id: number) => void; // Función para el botón
    actionLabel?: string; // Texto del botón (Agregar/Eliminar)
}

export function Card({ id, imgName, songName, createdBy, onAction, actionLabel }: CardProps) {
    return (
        <article className='card'>
        <header className="card_img">
            <img alt="foto del album" className="card_img-album" src={imgName} />
        </header>
        <div className="song_info">
            <strong className="playlist_info-name">{songName}</strong>
            <span className="playlist_info-createdby">{createdBy}</span>
            {onAction && (
            <button onClick={() => onAction(id)} className="add-btn">
                {actionLabel}
            </button>
            )}
        </div>
        </article>
    );
}