import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Tooltip from '@mui/material/Tooltip'

import { GetUsers } from '../../Redux/Actions/UserActions'
import UserCard from './UserCard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const UserList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetUsers())
  }, [dispatch])

  const users = useSelector((state) => state.UserReducer.users)
  console.log('Users list:', users)

  return (
    <div>
      <div>
        <Link to="/add">
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
        }}
      >
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  )
}
export default UserList
