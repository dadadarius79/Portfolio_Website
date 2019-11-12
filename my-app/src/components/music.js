import React from 'react';
import { Component } from 'react';
import Hope from '../resources/Hope.mp3';
import Probe from '../resources/PRobe.mp3';
import { Howl, Howler} from 'howler';
import '../App.css';

const audioClips = [
    {sound: Probe, label: 'Probe'},
    {sound: Hope, label: "Hope"},
    // {sound: Blume, label:"Blume"},
]

class Music extends Component {
    SoundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }
    RenderButtonAndSound = () => {
        return audioClips.map((soundObj, index) => {
            return(
                <>
                <p className="p_music_functuion"/>
                <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
                    <audio controls>
                    {soundObj.label}
                    </audio> Start
                </button>
                
                </>
            )
        })
    }

    render(){    
        Howler.volume(1.0)
        return(
            <>
            <p className="p_music">Probe</p>
            <p className="p2_music">Hope</p>
            <div>
                {this.RenderButtonAndSound()}
            </div>
            
            
            </>        
        )
    }
}

export default Music;