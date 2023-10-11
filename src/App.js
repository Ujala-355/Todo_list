import React,{useState} from "react";

import User from "./user";
import Delete from "./deletebutton"

const App=()=>{
  const [tableData,setTableData]=useState([]);
  const addDataToTable=(data)=>{
    setTableData([...tableData,data]);
  }
  const deleteData=(index)=>{
    const updatedData=[...tableData];
    updatedData.splice(index,1);
    setTableData(updatedData);
  };
  return(
    <>
      <User onAddData={addDataToTable}/>
      <Delete tableData={tableData} onDeleteData={deleteData}/>
    </>
  )
}
export default App;