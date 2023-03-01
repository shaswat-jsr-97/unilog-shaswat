import React , {useState ,useEffect} from 'react'
import { Container } from '@chakra-ui/react'
import DatamapsIndia from 'react-datamaps-india'
import maps from "./maps.module.scss";


const dataFrombackEnd=
    {
        'Maharashtra': {
            value: 1,
        },
        'Andaman & Nicobar Island': {
            value: 2,
        },
        'Andhra Pradesh': {
            value: 3,
        },
        'Arunachal Pradesh': {
            value: 4,
        },
        'Assam': {
            value: 5,
        },
        'Bihar': {
           value: 6,
        },   
        'Chandigarh': {
            value: 7,
        }, 
        'Chhattisgarh': {
            value: 8,
        },
        'Dadara & Nagar Haveli': {
            value: 9,
        },
        'Daman & Diu': {
            value: 10,
        },
        'Delhi': {
            value: 11,
        },
        'Goa': {
            value: 12,
        },      
        'Gujarat': {
            value: 13,
        },
        'Haryana': {
            value: 14,
        },
        'Himachal Pradesh': {
            value: 15,
        },
        'Jammu & Kashmir': {
            value: 16,
        },
        'Jharkhand': {
            value: 17,
        },
        'Karnataka': {
            value: 18,
        },
        'Kerala': {
            value: 19,
        },
        'Lakshadweep': {
            value: 20,
        },
        'Madhya Pradesh': {
            value: 21,
        },
        'Manipur': {
            value: 22,
        },
        'Meghalaya': {
            value: 23,
        },
        'Mizoram': {
            value: 24,
        },
        'Nagaland': {
            value: 25,
        },
        'Odisha': {
            value: 26,
        },
        'Puducherry': {
            value: 27,
        },
        'Punjab': {
            value: 28,
        },
        'Rajasthan': {
            value: 29,
        },
        'Sikkim': {
            value: 30,
        },
        'Tamil Nadu': {
            value: 31,
        },
        'Telangana': {
            value: 32,
        },
        'Tripura': {
            value: 33,
        },
        'Uttar Pradesh': {
            value: 34,
        },
        'Uttarakhand': {
            value: 35,
        },
        'West Bengal': {
            value: 36,
        },
    }

const Maps = () => {
    const [state , setState]= useState({
        regionData:dataFrombackEnd
    })
    const {regionData} = state;
    ///Destructured state above
    useEffect(()=>{
        ///load data from backend and set in state 
        /// setState(prevState=>({...prevState , regionData: incomingData}))
    },[])
  return (
    <>
    <Container w={'200px'} h={'200px'}>
        <h1 className='heading'>Maps Below</h1>

        <div className={maps.maps}>
            <DatamapsIndia
                regionData={regionData}
                // regionData={state.regionData}
                hoverComponent={({ value }) => {
                    return (
                    <>
                        <p>{value.name}</p>
                        <p>{value.value}</p>
                    </>
                    )
                }}
                mapLayout={{
                    // title: 'Title',
                    legendTitle: 'Legend Title',
                    startColor: '#FFDAB9',
                    endColor: '#FF6347',
                    hoverTitle: 'Count',
                    noDataColor: '#f5f5f5',
                    borderColor: '#8D8D8D',
                    hoverBorderColor: '#8D8D8D',
                    hoverColor: 'green',
                }}
            />
        </div>
    </Container>
    </>
  )
}

export default Maps