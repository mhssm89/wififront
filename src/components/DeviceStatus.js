import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";
import Image from "next/image";

function DeviceStatus() {
  return (
    <>
      <Paper elevation={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Grid container justifyContent={"center"} spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5" component="div">
                  Device Status
                </Typography>
              </Grid>
            </Grid>
            <Grid item container container justifyContent={"center"}>
              <Image src="/hotspot.png" alt="" width="100px" height="100px" />
            </Grid>
            <Typography variant="body2" align="center" color="text.secondary">
              Device mode is Hot spot
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
}

export default DeviceStatus;
