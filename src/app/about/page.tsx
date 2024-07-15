import React from 'react';
import styles from './about.module.scss';

const About: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className={styles.container}>
            <h1>About Page</h1>
            <p>This is the about page of our Next.js application.</p>
        </div>
    </main>
  );
};

export default About;
