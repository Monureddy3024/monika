import React from "react";

const AssignmentTwo = props => {
  const baseFont = 30;
  const [fontSize, setFontSize] = React.useState(baseFont);

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      let top = (window.pageYOffset || document.scrollTop);
      if( !top ) {
        top = 0;
      }

      setFontSize( fontSize + top/50 );
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
   <div>
     <h1 style={{ fontSize: fontSize }} className="fixed">My size will increase!</h1>
   </div>
  );
};

export default AssignmentTwo;
