import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../redux/actions/actionCreator';
import * as functions from '../functions/functions';
  
  export default function Add() {

    //redux
    const token=useSelector(state=>state.token);
    const navigate=useNavigate();
    const dispatch=useDispatch();
  const {loginAction}=bindActionCreators(actionCreators,dispatch);
    useEffect(()=>{
        if(!localStorage.getItem("ovToken")) navigate('/login');
        else loginAction(localStorage.getItem("ovToken"));
    },[])

    // hooks
    const [tollPlaza,setTollPlaza]=useState("");
    const [driver,setDriver]=useState("");
    const [wheels,setWheels]=useState("");
    const [sourceLocation,setSourceLocation]=useState("");
    const [destinationLocation,setDestinationLocation]=useState("");
    const [probableRoute,setProbableRoute]=useState("");
    const [loadAdmissible,setLoadAdmissible]=useState("");
    const [actualLoad,setActualLoad]=useState("");
    const [vehicleNo,setVehicleNo]=useState("");

    // add vehicle
    const addVehicle=async()=>{
        try {
            const res=await functions.addVehicle({tollPlaza,driver,wheels,sourceLocation,destinationLocation,probableRoute,loadAdmissible,actualLoad,vehicleNo},token);
            if(!res) alert("Enter all the details properly!");
            else {
                alert("Vehicle added!");
                navigate('/');
            }

        } catch (error) {
            console.log(error);
            alert("Error occured!");
        }
    }

    // cancel
    const cancel=()=>{
        navigate('/');
    }
    
    
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Add Vehicle
          </Heading>
          <FormControl id="tollPlaza" isRequired>
            <FormLabel>Toll Plaza</FormLabel>
            <Input
              placeholder="Toll plaza"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={tollPlaza}
              onChange={(e)=>setTollPlaza(e.target.value)}
            />
          </FormControl>
          <FormControl id="driver" isRequired>
            <FormLabel>Driver</FormLabel>
            <Input
              placeholder="Driver"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={driver}
              onChange={(e)=>setDriver(e.target.value)}
            />
          </FormControl>
          <FormControl id="wheels" isRequired>
            <FormLabel>Wheels</FormLabel>
            <Input
              placeholder="Wheels"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={wheels}
              onChange={(e)=>setWheels(e.target.value)}
            />
          </FormControl>
          <FormControl id="sourceLocation" isRequired>
            <FormLabel>Source Location</FormLabel>
            <Input
              placeholder="Source location"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={sourceLocation}
              onChange={(e)=>setSourceLocation(e.target.value)}
            />
          </FormControl>
          <FormControl id="destinationLocation" isRequired>
            <FormLabel>Destination Location</FormLabel>
            <Input
              placeholder="Destination location"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={destinationLocation}
              onChange={(e)=>setDestinationLocation(e.target.value)}
            />
          </FormControl>
          <FormControl id="probableRoute" isRequired>
            <FormLabel>Probable Route</FormLabel>
            <Input
              placeholder="Probable route"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={probableRoute}
              onChange={(e)=>setProbableRoute(e.target.value)}
            />
          </FormControl>
          <FormControl id="loadAdmissible" isRequired>
            <FormLabel>Load Admissible</FormLabel>
            <Input
              placeholder="Load admissible"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={loadAdmissible}
              onChange={(e)=>setLoadAdmissible(e.target.value)}
            />
          </FormControl>
          <FormControl id="actualLoad" isRequired>
            <FormLabel>Actual Load</FormLabel>
            <Input
              placeholder="Actual load"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={actualLoad}
              onChange={(e)=>setActualLoad(e.target.value)}
            />
          </FormControl>
          <FormControl id="vehicleNo" isRequired>
            <FormLabel>Vehicle Number</FormLabel>
            <Input
              placeholder="Vehicle No."
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={vehicleNo}
              onChange={(e)=>setVehicleNo(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}
              onClick={cancel}
              >
              Cancel
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}
              onClick={addVehicle}
              >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }