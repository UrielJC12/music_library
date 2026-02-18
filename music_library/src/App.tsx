import ReactDom from 'react-dom/client';
import React, { useState } from 'react';
import { Header } from './Header/index';
import { Card } from './Songs/index';
import './index.css'
import rhcp from "./assets/rhcpbtw.jpg"
import lucki from "./assets/lucki.jpg"
import connor from "./assets/connor.jpg"
import frusciante from "./assets/frusciante.jpg"
import oldvibes from  "./assets/2016.jpg"
import flea from "./assets/flea.jpg"
import { Library } from './Library';
import {SearchResults} from "./Search"

interface Song {
    id: number;
    imgName: string;
    songName: string;
    createdBy: string;
}

const INITIAL_SONGS = [
    { id: 1, imgName: rhcp, songName: "By the way", createdBy: "Red Hot Chili Peppers" },
    { id: 2, imgName: lucki, songName: "Sunset", createdBy: "Lucki" },
    { id: 3, imgName: connor, songName: "i might brake but im not", createdBy: "Capella" },
    { id: 4, imgName: frusciante, songName: "Song to Sing when im lonly", createdBy: "John Frusciante" },
    { id: 5, imgName: oldvibes, songName: "it feels so closed", createdBy: "Calvin Harris" },
    { id: 6, imgName: flea, songName: "acid", createdBy: "Calvin Harris" },

];

export function App() {
    const [results] = useState<Song[]>(INITIAL_SONGS);
    const [library, setLibrary] = useState<Song[]>([]);
    
    // Nuevo estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState("");

    // Lógica de filtrado: solo mostramos canciones que coincidan con el nombre o el artista
    const filteredResults = results.filter(song => 
        song.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.createdBy.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const addToLibrary = (id: number) => {
        const songToAdd = results.find(song => song.id === id);
        if (songToAdd && !library.find(s => s.id === id)) {
            setLibrary([...library, songToAdd]);
        }
    };

    return (
        <div className='App'>
            <Header />
            <main className="content">
                {/* 2. Añadimos el input de búsqueda aquí o dentro del Header */}
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Busca tu canción o artista..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* 3. Pasamos filteredResults en lugar de results */}
                <SearchResults 
                    songs={filteredResults} 
                    onAddToLibrary={addToLibrary} 
                />
                
                <hr />
                <Library songs={library} />
            </main>
        </div>
    );
}