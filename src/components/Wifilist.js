import React from "react";

import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  makeStyles,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Grid,
  Dialog,
  Button,
} from "@material-ui/core";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useTable from "../../src/control/UseTable";
const useStyles = makeStyles(() => ({
  root: {},
}));

// const query = [
//   {
//     name: "tet1",
//     bssid: "##################",
//     signal: "90%",
//     security: "WPA2",
//   },
//   {
//     name: "tet1",
//     bssid: "##################",
//     signal: "85%",
//     security: "WPA2",
//   },
//   {
//     name: "tet2",
//     bssid: "##################",
//     signal: "80%",
//     security: "WPA2",
//   },
//   {
//     name: "tet3",
//     bssid: "##################",
//     signal: "60%",
//     security: "WPA2",
//   },
// ];

function WifiList({ query }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const {
    // items,
    selectedItems,
    isLoading: isTableLoading,
  } = useTable({ query });

  console.log(query, "##########");
  return (
    <div>
      <Card>
        <Box minWidth={700}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Network Name</TableCell>
                <TableCell>MAC address</TableCell>
                <TableCell>Strenght</TableCell>
                <TableCell align="right">connect</TableCell>
              </TableRow>
            </TableHead>
            {isTableLoading ? (
              <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
              </Box>
            ) : (
              <TableBody>
                {query.map((item) => {
                  return (
                    <TableRow
                      hover
                      key={item.mac}
                      selected={selectedItems.indexOf(item.mac) !== -1}
                    >
                      <TableCell>{item.ssid}</TableCell>
                      <TableCell>{item.mac}</TableCell>
                      <TableCell>
                        {item.signal_level}
                        {" dBa"}
                      </TableCell>

                      <TableCell align="right">
                        <IconButton
                          onClick={() => {
                            setOpen(true);
                          }}
                        >
                          <SvgIcon fontSize="small">
                            <NetworkWifiIcon />
                          </SvgIcon>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </Box>
      </Card>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Wifi network Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the selected Wifi network password you want to connect
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Wifi password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button>Connect</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default WifiList;
