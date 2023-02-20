import React, { useState, useEffect } from 'react';
import '../styles/darkMode.css';
function Dark() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>change mode</button>
          
        </div>
    );
}
export default Dark;