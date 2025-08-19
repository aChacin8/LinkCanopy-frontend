import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import { getUserByHandle } from "../requests/users"


const Handle = () => {

  const params = useParams()
  const handle = params.handle!

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getUserByHandle(handle),
    queryKey: ['handle', handle],
    refetchOnWindowFocus: false,
    retry: 1
  })

  const navigate = useNavigate()

  if (isLoading) return <p>Loading...</p>;
  
  if (isError) return navigate('/error/404')

  if (data) return (
    <div>

    </div>
  )
}

export default Handle
