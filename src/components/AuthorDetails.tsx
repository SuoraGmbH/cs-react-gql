import React from "react";
import {gql} from "@apollo/client";

interface Props {
  personId: string;
}


export const AuthorDetails: React.FunctionComponent<Props> = ({personId}) => {
  return (
    <div>
      <p>Who is this person "{personId}"?</p>
    </div>
  );

}
