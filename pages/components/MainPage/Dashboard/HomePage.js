import React, { useRef, useState, memo } from 'react';
import { Grid } from '@mui/material';
import FilterSection from './FilterSection';
import HomePageComponent from './HomePageComponent';
import styles from './Dashboard.module.css';

function HomePage() {
    const filterSectionRef = useRef(null);
    const [width, setWidth] = useState(300); // Set initial width

    const handleMouseMove = (e) => {
        // Calculate the new width
        const newWidth = e.clientX - filterSectionRef.current.getBoundingClientRect().left;
        if (newWidth > 100) { // Optional: Set a minimum width
            setWidth(newWidth);
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <Grid container spacing={3} className='p-[1.5rem] h-[100vh]'>
            <Grid item style={{ width: `${width}px` }} className={`border-r-2 border-gray-400 h-[100vh] !pt-0 ${styles.filterSectionContainer}`} ref={filterSectionRef}>
                <div className={styles.filterSectionContent}>
                    <FilterSection />
                </div>
                <div className={styles.resizableHandle} onMouseDown={handleMouseDown} />
            </Grid>
            <Grid item xs>
                <HomePageComponent />
            </Grid>
        </Grid>
    );
}

export default memo(HomePage);
