import { useEffect, useState } from 'react';
import { getPacientes } from '../../helpers/requests';
import { useAuth } from '../useAuth';

export const useGetPacientes = () => {

    const { auth } = useAuth(); 

    const [pacientes, setPacientes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    
    useEffect(() => {
        getPacientes()
        .then(resp => {
            setPacientes(resp)
            setIsLoading(false);
        })
        .catch(err => {
            setPacientes([]);
            setIsLoading(false);
        });
    }, [auth]);
    
    return {
        pacientes,
        setPacientes,
        isLoading
    }

}
