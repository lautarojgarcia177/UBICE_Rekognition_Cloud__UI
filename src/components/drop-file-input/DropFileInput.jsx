import { useRef } from 'react';
import { FileDrop } from 'react-file-drop';
import { Upload } from 'react-feather';
import './drop-file-input.css';
import PropTypes from 'prop-types';

const DropFileInput = (props) => {
  const fileInputRef = useRef(null);
  const { onFileInputChange, onDrop } = props;

  // Event handlers
  const onTargetClick = () => {
    fileInputRef.current.click();
  };
  const onMouseOver = (event) => {
    // console.log('on mouse over!');
  };
  const onFrameDragEnter = (event) => {
    // console.log('onFrameDragEnter!');
  };
  const onFrameDragLeave = (event) => {
    // console.log('onFrameDragLeave!');
  };
  const onFrameDrop = (event) => {
    // console.log('onFrameDrop!', event);
  };
  const onDragOver = (event) => {
    // console.log('onDragOver!');
  };
  const onDragLeave = (event) => {
    // console.log('onDragLeave!');
  };

  return (
    <>
      <input
        multiple
        onChange={onFileInputChange}
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
      />
      <FileDrop
        onFrameDragEnter={onFrameDragEnter}
        onFrameDragLeave={onFrameDragLeave}
        onFrameDrop={onFrameDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onTargetClick={onTargetClick}
      >
        <Upload size={48} />
      </FileDrop>
    </>
  );
};

DropFileInput.propTypes = {
    onFileInputChange: PropTypes.func,
    onDrop: PropTypes.func
}

export default DropFileInput;