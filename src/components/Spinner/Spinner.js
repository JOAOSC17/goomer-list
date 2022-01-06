import React from 'react'
import { CircularProgress } from '@mui/material';

export default function Spinner() {
    return (
        <div style={{fontSize:50, display:'flex', alignItems:'center',justifyContent:'center', height:'100vh', flexDirection:'column'}}>
        Carregando...<br/><br/>
        <CircularProgress />
        </div>
    )
}
