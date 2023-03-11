import { Button, Flex, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AUTH_LOGOUT } from '../redux/auth/actionTypes'

function Navbar() {
    const state =useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const toast = useToast()
    const navigate = useNavigate()
  return (
    <Flex direction={'row-reverse'}
    bg={'blue.300'}
    py={4}
    px={6}
    color={'white'}
    gap={4}
    fontSize={'xl'}

    >
        {
            state.isAuth? <Button colorScheme='red' onClick={()=>{

                dispatch({type:AUTH_LOGOUT})
                toast({
                    title: "Logout",
                    description: "You have been logged out",
                    status: "success",
                    duration: 3000,
                    position: "top",
                    isClosable: true,
                    })
                    navigate('/login')

            }}>Logout</Button>:<>
             <Link to='/signup'>
    <Text cursor={'pointer'}  _hover={{color:'red'}}>SignUp</Text>
    </Link>
    <Link to='/login'>
    <Text cursor={'pointer'} _hover={{color:'red'}}>Login</Text>
    </Link></>
        }
       
    </Flex>
  )
}

export default Navbar
