import React from 'react';

import './index.css';

function App() {

  return (
    <div>
      
    <div>
    <div className="mainn"><a href="#" className="cen"><img src="vision.png" alt="main" width="40px"/></a>
    </div>  
  <nav>
    <ul>
      
      <li><a href="#"><img src="user.png" alt="student" width="40px"/></a></li>
      <li><a href="#"><img src="book.png" alt="plans" width="40px"/></a></li>
      <li><a href="#"><img src="settings.png" alt="settings" width="40px"/></a></li>
    </ul>
  </nav>
</div>
<Bodycontent/>

 </div>
  );
}


function Bodycontent() {
  return(



    <div className="bodysection">

    <span><img src="videos.png" alt="videos" width="100px"/></span>
    <br />
   
    <input type="url" id="link" name="link" placeholder="Insert URL here" /><br />
    <br/>
    <b className="bold">or</b>
    <br/>

    <input type="file" className="upload_btn" />
    <div className="overlay-layer" ><b>Upload</b> </div>
  </div>

  );
}

export default App;
