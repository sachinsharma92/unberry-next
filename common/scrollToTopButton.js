import { useEffect, useState } from "react";
import { Button } from "antd";


const ScrollToTopButton = ({ className, fixed }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <>
      {showButton && (
        <Button type="primary" href="#bookDemo" className='btn-demo fix-demo-button'>Book Demo</Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
