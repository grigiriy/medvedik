import React from 'react';

function ImagedBlock(props) {
  const { imageSrc, headLine } = props.side;
  const { mobile } = props;
  let classList = mobile ? 'halfScreenBlock mobileView ' : 'halfScreenBlock ';
  return (
    <div
      className={classList}
      style={{
        backgroundImage: `url(${require('../../images/' + imageSrc)})`
      }}
    >
      <p className="h3">{headLine}</p>
    </div>
  );
}

export default ImagedBlock;
