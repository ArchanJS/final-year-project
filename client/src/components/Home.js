import React,{ useEffect, useState } from 'react';
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,
    Modal,
    ModalBody,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    useDisclosure,
  } from '@chakra-ui/react';
  import {Search2Icon,AddIcon} from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import {actionCreators} from '../redux/actions/actionCreator';
import * as functions from '../functions/functions';
  
  export default function Home() {
    const token=useSelector(state=>state.token);
  const dispatch=useDispatch();
  const {loginAction,searchVehicleAction}=bindActionCreators(actionCreators,dispatch);

    const navigate=useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [vehicleNo,setVehicleNo]=useState("");

    const navigateTo=(path)=>{
        navigate(`/${path}`);
    }

    const handleSearch=async()=>{
        try {
            const res=await functions.searchVehicle(vehicleNo,token);
            if(res.length===0) alert("No past record found!");
            else {
                searchVehicleAction(res);
                navigate('/search');
            }
            setVehicleNo("");
        } catch (error) {
            console.log(error);
            alert("Error occured!");
            setVehicleNo("");
        }
    }

    useEffect(()=>{
        if(!localStorage.getItem("ovToken")) navigateTo('login');
        else loginAction(localStorage.getItem("ovToken"));
    },[])

    return (
      <Container maxW={'xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Overload{' '}
            <Text as={'span'} color={'orange.400'}>
              Detection
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Records of vehicles can be added and searched
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}
              onClick={()=>{
                navigateTo('add')
              }}
              >
              <AddIcon style={{marginRight:'6px'}} />  Add
            </Button>
            <Button rounded={'full'} px={6}
            onClick={onOpen}
            >
            <Search2Icon style={{marginRight:'6px'}}
              /> Search
            </Button>
          </Stack>
          <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex>
        </Stack>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Search a vehicle</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Vehicle Number</FormLabel>
                <Input ref={initialRef} placeholder='Vehicle No.'
                value={vehicleNo}
                onChange={(e)=>setVehicleNo(e.target.value)}
                />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='orange' mr={3}
              onClick={handleSearch}
              >
                Search
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>

      
    );
  }
  
  export const Illustration = () => {
    return (
        <Image src='https://img.freepik.com/free-vector/customer-using-mobile-app-tracking-order-delivery_74855-5229.jpg?w=1380&t=st=1672901330~exp=1672901930~hmac=4dcaa2ae4650d5c9319d4295c5269861176661bebb0c89a406492eaaff8bc255' alt='Dan Abramov' />
    );
  };

//   function InitialFocus() {
  
//     return (
//       <>
//         <Button onClick={onOpen}>Open Modal</Button>
//         <Button ml={4} ref={finalRef}>
//           I'll receive focus on close
//         </Button>
  
        
//       </>
//     )
//   }