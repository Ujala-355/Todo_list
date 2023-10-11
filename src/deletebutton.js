import React from "react";
import Button from '@mui/material/Button';
const Delete=({tableData,onDeleteData})=>{
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Action</th>
                    </tr>
                </thead>
            
            <tbody>
                {tableData.map((data,index)=>(
                    <tr key={index}>
                        <td>{data}</td>
                        <td>
                            <Button variant="contained" onClick={()=>onDeleteData(index)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
    ) 
}
export default Delete;
