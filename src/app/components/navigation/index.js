import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styles from './style.scss';

const Navigation = ({
  links,
  isOpen,
  onBurgerClick,
  onNavigationLinkClick
}) => (
  <nav className={styles.nav}>
    <div className={styles.wrap}>
      <Link to={'/'} className={styles.logolink}>
        <img
          src="//cdn.ryanep.com/images/logo.svg"
          width="80"
          height="30"
          alt="Logo"
          className={styles.logo}
        />
      </Link>
      {false && (
        <div className={isOpen ? styles.linksOpen : styles.links}>
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={styles.link}
              activeClassName={styles.active}
              onClick={onNavigationLinkClick}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
      <div
        className={isOpen ? styles.burgerOpen : styles.burger}
        onClick={onBurgerClick}
      >
        <div className={styles.hide}>Menu</div>
      </div>
    </div>
  </nav>
);

Navigation.propTypes = {
  links: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onBurgerClick: PropTypes.func.isRequired,
  onNavigationLinkClick: PropTypes.func.isRequired
};

export default Navigation;
