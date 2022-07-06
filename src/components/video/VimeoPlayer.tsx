import React from "react";
import Vimeo from '@u-wave/react-vimeo';

interface VimeoPlayerProps {
    src: string
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = () => {
  return (
    <>   
       
<Vimeo
  video="https://vimeo.com/28164488?embedded=true&source=vimeo_logo&owner=7359920"
  autoplay
  // height={500}
  showPortrait={false}
  showTitle={false}
/>
    </>
  );
};

export default VimeoPlayer;
