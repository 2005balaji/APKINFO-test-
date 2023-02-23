import React from "react";

function uploadbox() {
  return (
    <div id="uploaddiv">
      <div id="outerdiv">
        <div>
          <p id="largepara">
            Click the 'Upload' button to select a file from your computer.
          </p>
          <p id="smallpara">
            Save time and streamline your workflow with our intuitive drag and
            drop feature.
          </p>
        </div>

        <br />
        <div class="fileUpload btn btn-primary">
        <form action="http://localhost:3001/upload" method="POST" enctype="multipart/form-data">

            <label class="upload">
              <input type="file" accept=".apk" name="file" />
           <span id="upbutton"> Upload</span>
            </label>
            
        <button type="submit" id="upbutton" >Submit</button>
            </form>
          </div>
      </div>
    </div>
  );
}

export default uploadbox;
