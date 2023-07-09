import React, { useRef } from 'react';
import "./Button.scss";

export default function Button() {
    const buttonContainerRef = useRef(null);

    const scrollBack = () => {
        buttonContainerRef.current.scrollBy({
            left: -120,
            behavior: 'smooth',
        });
    };

    const scrollNext = () => {
        buttonContainerRef.current.scrollBy({
            left: 120,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="buttonbtn">
                <div className="scroll-back" onClick={scrollBack}>
                    <span className='leftfoward'>&lt;</span>
                </div>
                <div className="button-container" ref={buttonContainerRef}>
                    <button>TAROT</button>
                    <button>VEDIC</button>
                    <button>PALMISTRY</button>
                    <button>NUMEROLOGY</button>
                    <button>FACE READING</button>
                    <button>KUNDLI</button>
                    <button>PSYCHIC</button>
                    <button>KP ASTROLOGY</button>
                    <button>NANDI ASTROLOGY</button>
                    <button>VASTU</button>
                </div>
                <div className="scroll-next" onClick={scrollNext}>
                    <span className='rightfoward'>&gt;</span>
                </div>
            </div>
                  </>
    );
}
