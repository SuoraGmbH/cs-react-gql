import React from "react";

interface Props {
  personId: string;
}


export const AuthorDetails: React.FunctionComponent<Props> = ({personId}) => {
  return (
      <div>
        <p>Who is dis person "{personId}"?</p>
      </div>
  );

}
