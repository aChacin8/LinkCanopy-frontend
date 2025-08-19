import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

import { getUserByHandle } from "../requests/users";
import HandleComponent from "../components/HandleComponent";

const Handle = () => {
  const params = useParams();
  const handle = params.handle!;

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getUserByHandle(handle),
    queryKey: ["handle", handle],
    retry: 1,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate("/error/404");
    }
  }, [isError, navigate]);

  if (isLoading) return <p>Loading...</p>;

  if (data) return <HandleComponent data={data} />;

};

export default Handle;
