import React, { Component } from 'react';
import Button from '../../../../components/Elements/Button';

class UploadForm extends Component {
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.props.updateOrderDetails('image_url', reader.result);
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { text, type } = this.props;

    return (
      <span className="uploader_block">
        <p>
          {text} {type}
        </p>
        <div className="file_upload">
          <Button classList={'file'}>
            <span role="img" aria-label="upload">
              📥
            </span>
            <label htmlFor="file_input">
              <span>Загрузить</span>
            </label>
            <input
              style={{ display: 'none' }}
              type="file"
              id="file_input"
              onChange={e => this._handleImageChange(e)}
            />
          </Button>
          <div className="text_wrapper">
            <p>jpg,png</p>
            <p>не больше 5 мб</p>
          </div>
        </div>
      </span>
    );
  }
}

export default UploadForm;
