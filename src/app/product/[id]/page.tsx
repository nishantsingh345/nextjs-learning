import React from "react";

type Props = {
  id: number;
  params: {
    id: number;
  };
};

const page = (props: Props) => {
  //   console.log(props);
  const { params } = props;

  return <div>{params.id}</div>;
};

export default page;
