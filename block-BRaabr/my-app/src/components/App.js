import React from 'react';
//import FormInput from './FormInput';
//import Textarea from './Textarea';
//import Select from './Select';
//import FileInput from './FileInput';
//import MultipleInput from './MultipleInput';
import MultipleInput from './Form';
import Validation from './Validation';

class App extends React.Component {
  render() {
    return (
      <>
        <MultipleInput></MultipleInput>
        <Validation></Validation>
      </>
    );
  }
}

export default App;
