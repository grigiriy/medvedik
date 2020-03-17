import React from 'react';
import Button from '../../../../components/Elements/Button';

function UploadForm(props) {
  return (
    <span className="uploader_block">
      <p>
        {props.text} {props.type}
      </p>
      <div className="file_upload">
        <Button classList={'file'}>
          <span role="img" aria-label="upload">
            📥
          </span>
          <span>Загрузить</span>
        </Button>
        <div className="text_wrapper">
          <p>jpg,png</p>
          <p>не больше 5 мб</p>
        </div>
      </div>
    </span>
  );
}

export default UploadForm;
