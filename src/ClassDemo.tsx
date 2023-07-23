import React from "react";
import { DataState, updateData } from "./ReduxSlice";
import { ConnectedProps, connect } from "react-redux";
import { RootState } from "./store";

type PropsFromRedux = ConnectedProps<typeof connector>;

  type MyState = {
    dataIn: string; 
  };

  type myprops = {
    data: any; 
  };

  class ClassDemo extends React.Component< PropsFromRedux, MyState> {
    state: MyState = {
      // optional second annotation for better type inference
      dataIn: "newstuff",
    };

    handleUpdate = (arg: string) => {
        this.props.updateData(arg); // Increment by 5, you can change the value as needed
      };

      
    render() {
        const { value, updateData } = this.props;
        this.handleUpdate(this.state.dataIn)

        return (
        <div>
          {value} from {this.state.dataIn}
        </div>
      );
    }
  }

  const mapStateToProps = (state: RootState) => ({
    value: state.value,
  });
  
  const mapDispatchToProps = {
    updateData: (value: string) => updateData(value),
  };

  const connector = connect(mapStateToProps, mapDispatchToProps);

  
  export default connector(ClassDemo);
