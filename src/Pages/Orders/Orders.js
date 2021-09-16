import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Orders.css'


const Orders = () => {

  return (
      <div className='catContainer'>
       <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <div className='mainHeader'>
            Orders
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
        </Grid>
      </Grid>
    <div>
        </div>
    </div>
  );
}
export default Orders