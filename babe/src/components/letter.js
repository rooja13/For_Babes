import React, { useRef, useEffect, useState, setState } from 'react';
import valentine from '../assets/audio/valentine.mp3';
import congratulations from '../assets/audio/congratulations.mp3';
import getyou from '../assets/audio/getyou.mp3';
import drank from '../assets/audio/drank.mp3';
import heaven from '../assets/audio/heaven.mp3';
import './letter.css'

function LoveLetter() {
    const letters = ['Welcome to your web page! I wanted to make this for you to show how much I love you. I hope you like it and be sure to press the buttons :)',
        'It wasn\'t in my plans to love you so much, I guess that\'s how the best stories start, because without looking I found everything with you.',
        'In my dreams you are my life and in my life you are my dreams, if the universe found out how much I love you it would feel guilty for being so small.',
        'They told me that to make you fall in love you had to laugh, but everytime you laughed the one who fell in love was me.',
        'I have so many things to tell you but so little things come out of my mouth, you should learn to read my eyes when I look at you.',
        'I\'ve always wanted to talk to someone about everything as I speak to myself, and I\'ve found that with you.',
        'Every flaw I love in you except your absence.',
        'I don\'t know where the road or time will take us. I don\'t even know if in four weeks we\'d be together. The only the only thing that\s important to me is staying by your side for as long as possible.',
        'And I know that I\'ll ruin it so many times. And I\'ll try not to lose your love for it. I know I\'ll always miss you, that I know. And you\'ll never have to ask me for love.'
    ]

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    const songs = [
        valentine,
        congratulations,
        getyou,
        drank,
        heaven
    ];

    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (audio) {
            audio.pause();
            audio.src = songs[currentTrackIndex];
            if (isPlaying) {
                audio.play().catch((error) => {
                    console.error('Error playing audio:', error);
                });
            }
        } else {
            const newAudio = new Audio(songs[currentTrackIndex]);
            setAudio(newAudio);
            if (isPlaying) {
                newAudio.play().catch((error) => {
                    console.error('Error playing audio:', error);
                });
            }
        }
    }, [currentTrackIndex, songs, isPlaying]);

    const handleChangeMusic = () => {
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().catch((error) => {
                console.error('Error playing audio:', error);
            });
            setIsPlaying(true);
        }
    };

    const handleNextTrack = () => {
        if (isPlaying) {
            audio.pause();
        }
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % songs.length);
        setIsPlaying(false);
    };

    const [currentLetterIndex, setLetterIndex] = useState(0);
    const handleButtonClick = () => {
        setLetterIndex((prevIndex) => {
            // Start from index 1 after the initial message at index 0
            if (prevIndex === 0) {
                return 1;
            } else {
                return (prevIndex + 1) % letters.length || 1; // Skip index 0 in subsequent cycles
            }
        });
    };

    return (
        <>
            <div id='app'>
                <div id='heart-container'>
                    <div id='heart-pattern'>
                        <div id='heart-overlay'>
                        </div>
                    </div>
                </div>
                <div id='window-wrapper'>
                    <div id='window'>
                        <div id='window-background'>
                            <div id='window-contents'>
                                <div id='window-message'>
                                    <h1 className="sixty-four-font">Hi Baby &hearts;</h1>
                                    <p id='message' className="sixty-four-font">{letters[currentLetterIndex]}</p>
                                </div>
                                <div id='window-actions'>
                                    <button type='button' className='window-action' onClick={handleNextTrack}>Change the Music</button>
                                    <button type='button' className='window-action' onClick={handleChangeMusic}>
                                        {isPlaying ? 'Pause Music' : 'Play Music'}
                                    </button>
                                    <button type='button' className='window-action' onClick={handleButtonClick}>Open a Letter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <audio>
                    <source id='val' src={valentine} type='audio/mp3'></source>
                </audio>
            </div>
        </>
    );
}

export default LoveLetter;