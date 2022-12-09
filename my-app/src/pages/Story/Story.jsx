import "../../pages/Story/StoryStyle.css";
import "../../pages/Story/storystyle.css.map";
import React from 'react'
import StoryAdd from './Story_add'
import StoryDisplay from './Story_Display'

export default function Story() {
  return (
   
    <div className="storyPage"> 
        <StoryAdd/> 
        <StoryDisplay />
    
    </div>


  )
}
