import { Card } from "../Songs";
export interface Song {
    id: number;
    imgName: string;
    songName: string;
    createdBy: string;
}

interface LibraryProps {
    songs: Song[];
}

export function Library({ songs }: LibraryProps) {
    return (
        <div className="library-container">
        <h3>Mi Biblioteca</h3>
        <div className="cards">
            {songs.length === 0 ? (
            <p>No hay canciones aún</p>
            ) : (
            songs.map((song) => (
                <Card key={song.id} {...song} />
            ))
            )}
        </div>
        </div>
    );
}