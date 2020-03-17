import React from 'react';

function TextBlock(props) {
  const { text, headLine } = props.side;
  const { mobile } = props;
  let classList = mobile
    ? 'halfScreenBlock textOnly mobileView'
    : 'halfScreenBlock textOnly';

  return (
    <div className={classList}>
      <p className="h4">{headLine}</p>
      <p>{text}</p>
    </div>
  );
}

export default TextBlock;
