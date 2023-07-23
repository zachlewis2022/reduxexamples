import React from "react";
import { updateData } from "./ReduxSlice";
import { ConnectedProps, connect } from "react-redux";
import { RootState } from "./store";

type PropsFromRedux = ConnectedProps<typeof connector>;

  type MyState = {
    dataIn: string; 
  };

  type myprops = {
    data: any; 
  };

  class ClassDemo extends React.Component< PropsFromRedux, MyState, myprops> {
    state: MyState = {
      // optional second annotation for better type inference
      dataIn: "newstuff",
    };

    handleUpdate = (arg: string) => {
        this.props.updateData(arg); // Increment by 5, you can change the value as needed
      };

      
    render() {
        const { value, props } = this.props;
        console.log()
        this.handleUpdate(props.props)

        return (
        <div>
         {value} from {this.state.dataIn}
        </div>
      );
    }
  }

  const mapStateToProps = (state: RootState, props: any) => ({
    value: state.value,
    props: props
  });
  
  const mapDispatchToProps = {
    updateData: (value: string) => updateData(value),
  };

  const connector = connect(mapStateToProps, mapDispatchToProps);

  
  export default connector(ClassDemo);
