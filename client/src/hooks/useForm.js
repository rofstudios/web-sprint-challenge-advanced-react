// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export let useForm = (key, initialValue) => {
    let [values, setValues] = useLocalStorage(key, initialValue);

    let handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };
    return [values, handleChanges]
}

