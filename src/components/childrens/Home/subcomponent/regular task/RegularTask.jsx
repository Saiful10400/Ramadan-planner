import React, { useContext, useEffect, useState } from 'react';
import { axiosPublic } from '../../../../../Utility/useAxiosPublic';
import axios from 'axios';
import { dataProvider } from '../../../../context api/ContextApi';
import RegularCard from './RegularCard';

const RegularTask = () => {

    const{regularTaskData}=useContext(dataProvider)
    


    return (
        <div className='text-white'>
           <div className='grid grid-cols-1 lg:mx-0 mx-5 lg:grid-cols-4 gap-5'>
            {
                regularTaskData.map((item,idx)=>{
                    return(
                        <RegularCard key={idx} serial={idx} data={item} idx></RegularCard>
                    )
                })
            }
           </div>
        </div>
    );
};

export default RegularTask;