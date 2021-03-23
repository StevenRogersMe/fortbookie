import React from 'react';
import ReactAvatarEditor from 'react-avatar-editor';
// UI
import UploadButton from 'components/upload-button';
import Button from 'components/button';
import Slider from 'components/slider';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as PencilIcon } from 'assets/images/icons/pencil.svg';

const AvatarEditor = ({ image }) => {
  const editorRef = React.useRef(null);
  const [showCropper, setShowCropper] = React.useState(true);
  const [avatar, setAvatar] = React.useState(image);
  const [zoom, setZoom] = React.useState(1);

  const handleFileChange = e => {
    window.URL = window.URL || window.webkitURL;
    let image = window.URL.createObjectURL(e.target.files[0]);
    setAvatar(image);
  };

  const handleZoomSlider = value => setZoom(value);

  const handleSave = e => {
    const editor = editorRef.current;
    if (editor) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();
      setAvatar(croppedImg);
      setShowCropper(false);
    }
  };

  return (
    <div className="avatar-editor">
      <div className="avatar-editor__box">
        <figure style={{ backgroundImage: `url(${avatar})` }} className="avatar-editor__box-image" />
        <div className="avatar-editor__box-btn" onClick={() => setShowCropper(true)}>
          <PencilIcon />
        </div>
      </div>
      {showCropper &&
        <div className="avatar-editor__cropper">
          <div className="avatar-editor__cropper-box">
            <div className="avatar-editor__cropper-editor">
              <ReactAvatarEditor
                ref={editorRef}
                width={250}
                height={250}
                borderRadius={250}
                image={image}
                scale={zoom}
              />
            </div>
            <div className="avatar-editor__cropper-slider">
              <Slider min={1} max={10} step={0.1} value={zoom} onChange={handleZoomSlider} />
            </div>
            <div className="avatar-editor__cropper-buttons">
              <div className="avatar-editor__cropper-button">
                <UploadButton onChange={handleFileChange} text="Upload" />
              </div>
              <div className="avatar-editor__cropper-button">
                <Button variant="primary" size="xs" onClick={handleSave}>Save</Button>
              </div>
              <div className="avatar-editor__cropper-button">
                <Button variant="primary" size="xs" onClick={() => setShowCropper(false)}>Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default AvatarEditor;
