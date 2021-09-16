import React from 'react';
import {Grid} from "@material-ui/core";
import './Customers.css'

const DashBoard = () => {
    return (
        <div className = 'catContainer'>
                <div style={{minWidth:'600px'}}>
      {/* <CloseIcon style={{ float: "right", marginRight: 15, marginTop: 5, color: "#C1C1C1" }} /> */}
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <div className='mainHeader'>
            Customers
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
        </Grid>
      </Grid>
      </div>
        </div>
    );
};

export default DashBoard;