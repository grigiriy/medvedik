import React from 'react';

function TextBlock(props) {
  const { text, headLine } = props.side;
  const { classNames } = props;
  const { mobile } = props;
  let classList = mobile ? 'textOnly mobileView' : 'textOnly';

  return (
    <div className={classList + ' ' + classNames}>
      <p className="h4">{headLine}</p>
      <p>{text}</p>
    </div>
  );
}

export default TextBlock;
