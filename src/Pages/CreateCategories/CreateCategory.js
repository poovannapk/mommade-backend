import React from 'react';
import {
    Button,
    Grid,
    InputLabel,
    MenuItem,
    TextField,
  } from "@material-ui/core";
  import AppBar from "@material-ui/core/AppBar";
  import Tabs from "@material-ui/core/Tabs";
  import Tab from "@material-ui/core/Tab";
  import './CreateCategory.css'


  function TabPanel() {

    return(
    <div>

    </div>)
  }

const CreateCategory = () => {


    const [tabState, setTabState] = React.useState(0);

    return (
        <div className='catContainer'>
        <div style={{minWidth:'600px'}}>
      {/* <CloseIcon style={{ float: "right", marginRight: 15, marginTop: 5, color: "#C1C1C1" }} /> */}
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <div className='mainHeader'>
            Create New Categories
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
                Category Name
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
            <div className='header'>Category Status</div>
          
            <div className='field'>
              <InputLabel style={{ color: "black", marginBottom: "4px" }}>
                Status
              </InputLabel>
              <TextField
                className='dropdown'
                id="standard-select-state"
                select
                fullWidth
                value= ''
                // {steps[activeStep]}
                // onChange={(e) => {
                //   const index = steps.indexOf(e.target.value);
                //   setActiveStep(index);
                // }}
              >
                {/* {steps.map((option: string) => ( */}
                  <MenuItem 
                  key= ''
                //   {option} 
                  value=''
                //   {option}
                >
                --Select--
                    {/* {option} */}
                  </MenuItem>
                  <MenuItem>Active</MenuItem>
                  <MenuItem>Deactivated</MenuItem>
                {/* ))} */}
              </TextField>
            </div>
        </Grid>
        <Grid item md={12} xs={12}>
          <div style={{ display: "flex" ,flexGrow: 1, flexDirection:'column'}}>
                <AppBar position="static" color="default">
                  <Tabs
                    TabIndicatorProps={{ style: { background: "#27C1BD" } }}
                    value={tabState}
                    // onChange={handleTabChange}
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="Offers" 
                    // {...a11yProps(0)}
                     />
                    <Tab label="Terms and Condition" 
                    // {...a11yProps(1)}
                     />
                    <Tab label="SEO Optimization" 
                    // {...a11yProps(2)}
                     />
                  </Tabs>
                </AppBar>
                <TabPanel value={tabState} index={0}>
                    {/* <AttachCommercialOffers
                      attachProductServices = {attachCommercialOffers}
                      setAttachProductServices = {setAttachCommercialOffers}
                      
                    /> */}
                </TabPanel>
                <TabPanel value={tabState} index={1}>
                   Show Case 2
                </TabPanel>
                <TabPanel value={tabState} index={2}>
                    Show Case 2
                </TabPanel>
               
              </div>
        </Grid>
      </Grid>
    </div>
        </div>
  );
};

export default CreateCategory;