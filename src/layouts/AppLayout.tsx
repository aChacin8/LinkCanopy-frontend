import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { getUser } from "../requests/users";
import LinkCanopyComponent from "../components/LinkCanopyComponent";

const AppLayout = () => {

    const { data, isLoading, isError} = useQuery ({
        queryFn: getUser,
        queryKey: ['user'],
        refetchOnWindowFocus: false,
        retry: 2
    })

    const navigate = useNavigate();

    if (isLoading) return <p>Loading...</p>;

    if (isError) return navigate('/auth/login')
        
    if (data) return <LinkCanopyComponent data= { data }/>;
};

export default AppLayout;
