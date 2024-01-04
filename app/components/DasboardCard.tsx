import React, { useRef, useState } from 'react';
import { Card, Typography } from '@mui/material';
import ProjectCardMenu from './CardMenu';

const DashboardCard = () => {
    const projectCardRef = useRef(null);
    const [projectMenuOpen, setProjectMenuOpen] = useState(false);

    const closeProjectCardMenu = () => {
        setProjectMenuOpen(false);
    };
    return (
        <>
            <Card
                onContextMenu={(e: any) => {
                    e.preventDefault();
                    console.log("hello");

                    setProjectMenuOpen(true);
                }}
                onClick={() => {
                    console.log("hello");

                }}
                ref={projectCardRef}
                sx={{
                    maxHeight: "250px",
                    height: "250px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                }}
            >
                <div
                    style={{
                        backgroundColor: "purple",
                        width: "100%",
                        height: "100%",
                        borderRadius: "4px",
                        opacity: "0.3",
                    }}
                ></div>
                <Typography sx={{ p: 2 }}>Uber for Horses</Typography>

            </Card>
            <ProjectCardMenu
                value={projectCardRef?.current}
                projectMenuOpen={projectMenuOpen}
                closeProjectCardMenu={closeProjectCardMenu}
            />
        </>
    )
}

export default DashboardCard