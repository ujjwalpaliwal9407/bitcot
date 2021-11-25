import React from 'react'
import { Link} from "react-router-dom"
export default function Home() {
    return (
        <div>
            <div style={{display:"flex",marginLeft:"120px"}}>
            <div style={{height:'200px',width:'160px',backgroundImage:`URL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgTUx6kz6kiLK9mwEFnpdzOj1CVcN4WJuDabW7tTukw92D2ZSfLhkOR-P_3v3fQbjgV4&usqp=CAU")`,margin:"8px"}}>
            
            <div style={{alignItem:'center'}}><span style={{alignItems:'center',fontSize:'large'}}><Link to="/series" style={{textDecoration:'none'}}><div style={{color:'black',backgroundColor:'lightgrey'}}><b>SERIES</b></div></Link></span></div>
            </div>
           
            <div style={{height:'200px',width:'160px',backgroundImage:`URL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsFUH-a_LVvmvFOTI16n8GDwuitb-BluMnanDqkQSRCQdtrtpwVnPULCaGDhPxr8w76k&usqp=CAU")`,margin:"8px"}}>
            <span style={{alignItems:'center',fontSize:'large',color:"white"}}><Link to="/movies" style={{textDecoration:'none'}}><div style={{color:'black',backgroundColor:'lightgrey'}}><b>MOVIES</b></div></Link></span>
            </div>
            </div>
        </div>
    )
}
