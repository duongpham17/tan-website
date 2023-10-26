import {useContext} from 'react';
import {Context} from '../Context';
import {api} from '@database/api';
import useForm from '@hooks/useForm';
import Container from '@components/containers/Style1';
import Input from '@components/inputs/Input';
import Button from '@components/button/Button';
import Cover from '@components/cover';
import validation from './validation';
import Textarea from '@components/inputs/Textarea';

const Create = () => {

    const {actions, setActions, setData} = useContext(Context);

    const initialState = {
      message: "",
      timestamp: 0,
    };
  
    const {onSubmit, onChange, values, loading, onClear} = useForm(initialState, callback, validation);
  
    async function callback(){
      values.timestamp = Date.now();
      const response = await api.post("/careers", values);
      setData(state => [ ...state, response.data.data])
      onClear();
    };
    
    return ( actions === "create" 
    ?
      <Cover onClose={() => setActions("")}>
        <Container style={{"maxWidth": "400px", "padding": "1rem"}} onClick={e => e.stopPropagation()}>
          <form onSubmit={onSubmit}>
              <Textarea 
                label1="Messaage"
                name="message" 
                value={values.message} 
                onChange={onChange} 
              />
  
              <Button 
                label1="create" 
                type="submit" 
                loading={loading} 
                color="black" 
              />
  
          </form>
        </Container>
      </Cover>
      :
      null
    )
}

export default Create;