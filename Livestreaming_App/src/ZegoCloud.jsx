import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const ZegoCloud = () => {
    const {id} = useParams();

    const meeting = (element)=>{
        const appID = 1436535731;
        const serverSecret = "8ceb9044af04eab8ce6452f2f8baa1df";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, 
        serverSecret, 
        id,  
        Math.random().toString(),
        id
    );


    const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          
        },
        sharedLinks: [{name: 'meeting link', 
            url: `http://localhost:5173/room/${id}`
        }]
      });
    }
  return (
    <div ref={meeting}>
    
    </div>
  )
}

export default ZegoCloud
