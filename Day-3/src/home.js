import { LinearProgress, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react'


export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className="head">
        <header>
      <div class="navigation">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example">
        <Tab value="Active" href="/" label="Home" />
        <Tab value="two" href="/" label="Contact Us" />
        <Tab value="three" href="/" label="Products" />

        <Tab value="four" href="/Login" label="Login" />
        </Tabs>
        </div>
        </header>

    </div>



  )
}