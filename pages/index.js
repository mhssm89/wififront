import Wifilist from "../src/components/Wifilist";
import Topbar from "../src/components/Topbar";
import DeviceStatus from "../src/components/DeviceStatus";
import isMountedRef from "../src/control/UseisMountedRef";
import { Grid } from "@material-ui/core";
import React from "react";
import axios from "axios";
function ScanPage() {
  const [wifiList, setWifiList] = React.useState([]);
  const getWifiList = React.useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:9000/scan2`);
      const data = res.data["networks"];
      console.log("data : ", data);
      setWifiList(data);

      // if (isMountedRef.current) {
      //   console.log("data2 :", data);
      //   setWifiList(data);
      // }
    } catch (e) {
      console.log(e);
    }
  });

  React.useEffect(() => {
    getWifiList();
  }, []);
  console.log("query", wifiList);
  return (
    <>
      <Topbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Wifilist query={wifiList} />
        </Grid>
        <Grid item xs={12} md={4}>
          <DeviceStatus />
        </Grid>
      </Grid>
    </>
  );
}
export default ScanPage;
