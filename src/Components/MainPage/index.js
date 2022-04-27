import React from 'react';
import {motion} from "framer-motion";

import '../../Styles/MainPage/MainPage.css';

function MainPage() {
  return (
    <motion.div
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.1 }}}
    >
        <div className="mainPage">
            <h1> Welcome to this Page </h1>
            <button>Click here</button>
        </div>
        <button>Mama</button>
    </motion.div>
  )
}

export default MainPage;