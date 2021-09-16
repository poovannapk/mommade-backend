import React from 'react';
import {
    Button,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@material-ui/core";
  import AppBar from "@material-ui/core/AppBar";
  import Tabs from "@material-ui/core/Tabs";
  import Tab from "@material-ui/core/Tab";
  import './FoodMenu.css'


  function TabPanel() {

    return(
    <div>

    </div>)
  }

const FoodMenu = () => {
    const [tabState, setTabState] = React.useState(0);
    return (
            <div className='catContainer'>
            <div style={{minWidth:'600px'}}>
          {/* <CloseIcon style={{ float: "right", marginRight: 15, marginTop: 5, color: "#C1C1C1" }} /> */}
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <div className='mainHeader'>
                Create Food Menu
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className='saveButton'>
                <Button
                  variant="contained"
                //   onClick={() => closeAction(false)}
                  style={{ marginLeft: 5, textTransform: "none", width: 100 }}
                >
                  Discard
                </Button>
    
                <Button
                //   onClick={() => onSubmit()}
                  variant="contained"
                  color="primary"
                  style={{
                    marginLeft: 25,
                    backgroundColor: "#0078d7",
                    width: 100,
                    textTransform: "none",
                  }}
                >
                  Save
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
                <div className='header'>Basic Information</div>
    
                <form className='form' noValidate autoComplete="off">
                  <InputLabel style={{ color: "black", marginBottom: "4px" }}>
                    Food Name
                  </InputLabel>
                  <TextField
                    name="title"
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder={"Input the Category Title"}
                    // onChange={(e) => onChange(e)}
                    value= ''
                    // {categories.title}
                  />
                </form>
                <form className='form' noValidate autoComplete="off">
                  <InputLabel style={{ color: "black", marginBottom: "4px" }}>
                    Food Type
                  </InputLabel>
                  <Select
                    name="title"
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder={'Food Type'}
                    // placeholder={"Input the Category Title"}
                    // onChange={(e) => onChange(e)}
                    value= ''
                    // {categories.title}
                  >
                  <MenuItem>--Select--</MenuItem>
                  <MenuItem>Veg</MenuItem>
                  <MenuItem>Non Veg</MenuItem>
                  </Select>
                </form>
                <form className='form' noValidate autoComplete="off">
                  <InputLabel style={{ color: "black", marginBottom: "4px" }}>
                    Select Category
                  </InputLabel>
                  <Select
                    name="title"
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder={'Food Type'}
                    // placeholder={"Input the Category Title"}
                    // onChange={(e) => onChange(e)}
                    value= ''
                    // {categories.title}
                  >
                  <MenuItem>--Select--</MenuItem>
                  <MenuItem>Category 1</MenuItem>
                  <MenuItem>Category 2</MenuItem>
                  <MenuItem>Category 3</MenuItem>

                  </Select>
                </form>
                <form className='form' noValidate autoComplete="off">
                  <InputLabel style={{ color: "black", marginBottom: "4px" }}>
                    Food Price
                  </InputLabel>
                  <TextField
                    name="title"
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder={"Food Price"}
                    // onChange={(e) => onChange(e)}
                    value= ''
                    // {categories.title}
                  />
                </form>
                <form className='form' noValidate autoComplete="off">
                  <InputLabel style={{ color: "black", marginBottom: "4px" }}>
                    Description
                  </InputLabel>
                  <TextField
                    name="description"
                    multiline
                    rows={4}
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder={"Description Field"}
                    // onChange={(e) => onChange(e)}
                    // value={categories.description}
                  />
                </form>
            </Grid>
            <Grid item md={6} xs={12}>
                <div className='header'>Food Status</div>
              
                <div className='field'>
                  <InputLabel style={{ color: "black", marginBottom: "4px" }}>
                    Status
                  </InputLabel>
                  <TextField
                    className='dropdown'
                    id="standard-select-state"
                    rows={2}
                    fullWidth
                    select
                    value= ''
                    // {steps[activeStep]}
                    // onChange={(e) => {
                    //   const index = steps.indexOf(e.target.value);
                    //   setActiveStep(index);
                    // }}
                  >
                  <MenuItem>--Select--</MenuItem>
                    {/* {steps.map((option: string) => ( */}
                      <MenuItem 
                      key= ''
                    //   {option} 
                      value=''
                    //   {option}
                    >
                    Cooking
                        {/* {option} */}
                      </MenuItem>
                      <MenuItem>Process</MenuItem>
                      <MenuItem>Picked</MenuItem>
                      <MenuItem>On The Way</MenuItem>
                      <MenuItem>Delivered</MenuItem>
                    {/* ))} */}
                  </TextField>
                </div>
            </Grid>
            {/* <Grid item md={12} xs={12}>
              <div style={{ display: "flex" ,flexGrow: 1, flexDirection:'column'}}>
                    <AppBar position="static" color="default"> */}
                      {/* <Tabs
                        TabIndicatorProps={{ style: { background: "#27C1BD" } }}
                        value={tabState}
                        onChange={handleTabChange}
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                      > */}
                        {/* <Tab label="Offers" 
                        {...a11yProps(0)}
                         />
                        <Tab label="Terms and Condition" 
                        {...a11yProps(1)}
                         />
                        <Tab label="SEO Optimization" 
                        {...a11yProps(2)}
                         /> */}
                    {/* //   </Tabs>
                    // </AppBar> */}
                    {/* // <TabPanel value={tabState} index={0}> */}
                        {/* <AttachCommercialOffers
                          attachProductServices = {attachCommercialOffers}
                          setAttachProductServices = {setAttachCommercialOffers}
                          
                        /> */}
                    {/* </TabPanel>
                    <TabPanel value={tabState} index={1}>
                       Show Case 2
                    </TabPanel>
                    <TabPanel value={tabState} index={2}>
                        Show Case 2
                    </TabPanel> */}
{/*                    
                  </div>
            </Grid> */}
          </Grid>
        </div>
            </div>
      );
};

export default FoodMenu;