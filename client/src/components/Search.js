import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../redux/actions/actionCreator';

const Leaderboard = () => {

    //redux
    const token=useSelector(state=>state.token);
    const vehicles=useSelector(state=>state.vehicles);
    const navigate=useNavigate();
    const dispatch=useDispatch();
  const {loginAction}=bindActionCreators(actionCreators,dispatch);
    useEffect(()=>{
        if(!localStorage.getItem("ovToken")) navigate('/login');
        else if(vehicles.length>0) loginAction(localStorage.getItem("ovToken"));
        else navigate('/');
    },[])
    
    return <>
        <Table variant='striped' colorScheme='orange'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
                <Tr>
                    <Th>Sl no.</Th>
                    <Th >Toll Plaza</Th>
                    <Th>Driver</Th>
                    <Th>Wheels</Th>
                    <Th>Source Location</Th>
                    <Th>Destination Location</Th>
                    <Th>Probable Route</Th>
                    <Th>Load Admissible</Th>
                    <Th>Actual Load</Th>
                    <Th>Vehicle Number</Th>
                    <Th>Overload Status</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    vehicles.length > 0 && vehicles.map((veh, ind) => {
                        return (
                            <Tr>
                                <Td>{veh._id}</Td>
                                <Td>{veh.tollPlaza}</Td>
                                <Td>{veh.driver}</Td>
                                <Td>{veh.wheels}</Td>
                                <Td>{veh.sourceLocation}</Td>
                                <Td>{veh.destinationLocation}</Td>
                                <Td>{veh.probableRoute}</Td>
                                <Td>{veh.loadAdmissible}</Td>
                                <Td>{veh.actualLoad}</Td>
                                <Td>{veh.vehicleNo}</Td>
                                <Td>{veh.overloadStatus?"true":"false"}</Td>
                            </Tr>
                        )
                    })
                }
            </Tbody>
            {/* <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Tfoot> */}
        </Table>
    </>;
};

export default Leaderboard;