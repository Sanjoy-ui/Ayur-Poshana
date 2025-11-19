import axios from "axios";
import { useEffect, useState } from 'react';
import { serverUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function UseGetCurrentUser() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true });
                dispatch(setUserData(result.data));
                setError(null);
            } catch (err) {
                console.error('Failed to fetch current user:', err);
                setError(err?.response?.data?.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [dispatch]);

    return { loading, error };
}

export default UseGetCurrentUser;
