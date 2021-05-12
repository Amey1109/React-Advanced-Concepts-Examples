import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


var style = {
    root: {
      display: "flex",
      justifyContent: "center",
    },
    cardStyle: {
      margin: "10px",
      width: "300px",
    },
  };
function UsersCard(props) {
    return (
        <Card style={style.cardStyle} variant="elevation">
          <CardContent>
            <Typography>{props.name}</Typography>
          </CardContent>
        </Card>
        
    )
}

export default UsersCard
