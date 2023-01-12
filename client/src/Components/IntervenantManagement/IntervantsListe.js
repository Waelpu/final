import React, { useEffect } from 'react'
import IntervenantCard from './IntervenantCard'
import {useSelector} from "react-redux" 
import { useDispatch } from 'react-redux'
import {GetIntervenants} from '../../Redux/Actions/IntervenantActions'
import { Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Tooltip from '@mui/material/Tooltip'

 const IntervantsListe = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetIntervenants())
      }, [dispatch])

     const intervenants=useSelector(state=>state.IntervenantReducer.intervenants)
    console.log("liste des intervenants :", intervenants)
     return (
         <div>
              <div>
        <Link to="/intervenant-add">
          <Fab size="small" color="inherit" aria-label="add">
            <Tooltip title="Ajouter Un client">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Fab>
        </Link>
      </div>
        <div 
       style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        width: '95%',
        marginLeft: '2%',
      }}>
            {intervenants.map((intervenant)=> <IntervenantCard key={intervenant._id} intervenant={intervenant}/>)}

           
        </div>
        </div>
    )
}
export default IntervantsListe