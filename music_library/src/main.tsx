import React from 'react';
import ReactDom from 'react-dom/client';
import { Card } from './Card';
import './index.css'
import rhcp from "./assets/rhcpbtw.jpg"
import lucki from "./assets/lucki.jpg"

const root = ReactDom.createRoot(document.getElementById('root')!)
root.render(
<div className='App'>
  <header className='header'>
    <h1 className='app_name'>SYNC</h1>
    <h2>Crea tu mood<br/><span>Crea tu playlist!</span></h2>
  </header>
<div className='cards'>
  <Card imgName={rhcp} playlistName="My RHCP playlist" createdBy="Uriel Javier C" />
  <Card imgName={lucki} playlistName="Days B4 III" createdBy="Uriel Javier C" />
</div>
</div>

)
