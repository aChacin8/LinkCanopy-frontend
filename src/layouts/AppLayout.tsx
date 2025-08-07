import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { getUser } from "../requests/users";
import LinkCanopy from "../components/LinkCanopy";

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
    
    console.log(data);     
    
    if (data) return <LinkCanopy data= { data }/>;
};

export default AppLayout;
