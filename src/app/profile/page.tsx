import React from 'react';
import styles from './profile.module.scss';

const Profile: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <img src="/profile-pic.jpg" alt="Profile Picture" className={styles.profilePic} /> */}
        <h1 className={styles.name}>Shashank&apos;s Profile</h1>
        <p className={styles.bio}>A passionate developer with a love for creating amazing user experiences.</p>
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, lorem a placerat egestas, justo quam malesuada libero, sit amet posuere sapien metus nec ante.</p>
        <h2 className={styles.heading}>Skills</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>JavaScript</li>
          <li className={styles.listItem}>React</li>
          <li className={styles.listItem}>Next.js</li>
          <li className={styles.listItem}>TypeScript</li>
          <li className={styles.listItem}>SCSS</li>
        </ul>
        <h2 className={styles.heading}>Contact</h2>
        <p>Email: shashank@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
