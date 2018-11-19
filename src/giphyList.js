import React from 'react';
import GifElement from './giphElement';


export default function GiphyList(props) {

    let  display = props.giphydata.map( renderListElmnt );

    return(
        <div className="row">
             {display}
        </div>

    );
}

function renderListElmnt(giphyElmnt){
     return <GifElement dataElmnt= {giphyElmnt} />
}
