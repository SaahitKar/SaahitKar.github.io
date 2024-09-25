import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { styles } from '../style'; // Assuming this holds your base styles
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: { rotate: 45 },
    closed: { rotate: 0 },
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Saahit Karumuri
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Menu Toggle Animation */}
          <motion.img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
            variants={menuVariants}
            animate={toggle ? 'open' : 'closed'}
          />

          {/* Mobile Dropdown Menu (Conditional Rendering) */}
          {toggle && (
            <motion.div
              className='p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? 'text-white' : 'text-secondary'
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <Link to={`#${nav.id}`}>{nav.title}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
