import React from 'react';

function ImagedBlock(props) {
  const { imageSrc, headLine } = props.side;
  const { classNames } = props;
  const { mobile } = props;
  let classList = mobile ? 'halfScreenBlock mobileView' : 'halfScreenBlock';
  classList = classNames ? classList + classNames : classList;
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
