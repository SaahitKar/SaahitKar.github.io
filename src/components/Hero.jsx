import { useState, useEffect } from "react";

import { styles } from "../style";

const Hero = () => {
  const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');
    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prevText => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed]);
    return displayText;
  };

  const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);

    return <p>{displayText}</p>;
  };


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm Saahit
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter text="I  am a computer science student and am looking for a Software Developer position." />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;