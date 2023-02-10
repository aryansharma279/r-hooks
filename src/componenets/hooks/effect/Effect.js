import React, { useEffect, useState } from "react";
import Emp from "./emp/Emp";
import './Effect.css'
import Grid from '@mui/material/Grid';

const Effect = () => {
  let [state, setState] = useState(2);
  let [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      let endPt = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      ); 
      console.log(endPt);
      let res = await endPt.json();
      console.log(res);
      console.log(data);
      setData(res);
    }
    getData();
    document.title= `(${state}) Employees`;
  }, [state]); 
  console.log(data);

  return (
    <div>
      <button onClick={()=> setState(state+2)}>Inc {state}</button>
      <Grid container spacing={2}>
      {
        data.map((e,i)=>{
            return(
              <Grid item xs={3}>
                <Emp key={i} firstName={e.firstName} img={e.imageUrl} email={e.email} index={i}/>
              </Grid>
            )
        })
      }
     </Grid>
    </div>
  );
};

export default Effect;
