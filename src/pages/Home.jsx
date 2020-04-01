import React from 'react';
import PadCarousel from '../components/home/PadCarousel';
import Coffee from '../components/home/Coffee';
import NoteBook from '../components/home/NoteBook';
function Home(){
    return (
        <div id="home-main-div">
            <PadCarousel />
            <Coffee />
            <NoteBook />
        </div>
    )
}
export default Home;