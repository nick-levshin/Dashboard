import React from 'react';
import {useStateContext} from '../../contexts/ContextProvider'

import { Header, Stacked as StackedChart } from '../../components';

const Stacked = () => {
  const { currentMode } = useStateContext();

  return (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart width='100%' currentMode={currentMode}  />
    </div>
  </div>
  )
  };

export default Stacked;
