import React, {createContext, useState} from 'react';

interface AgentContextInterface {
  packageFormStepOne: any;
  packageFormStepTwo: any;
  onSetPackageFormStepOne: (data: any) => void;
  onSetPackageFormStepTwo: (data: any) => void;
}

const AgentContext = createContext<AgentContextInterface>({
  packageFormStepOne: {},
  packageFormStepTwo: {},
  onSetPackageFormStepOne: () => {},
  onSetPackageFormStepTwo: () => {},
});

const AgentProvider = (WrappedComponent: any) => {
  return (props: any) => {
    const [packageFormStepOne, onSetPackageFormStepOne] = useState({});
    const [packageFormStepTwo, onSetPackageFormStepTwo] = useState({});

    const handleFormStepOne = (data: any) => {
      onSetPackageFormStepOne(data);
    };

    const handleFormStepTwo = (data: any) => {
      onSetPackageFormStepTwo(data);
    };

    return (
      <AgentContext.Provider
        value={{
          packageFormStepOne,
          packageFormStepTwo,
          onSetPackageFormStepOne: handleFormStepOne,
          onSetPackageFormStepTwo: handleFormStepTwo,
        }}>
        <WrappedComponent {...props} />
      </AgentContext.Provider>
    );
  };
};

export {AgentContext, AgentProvider};
