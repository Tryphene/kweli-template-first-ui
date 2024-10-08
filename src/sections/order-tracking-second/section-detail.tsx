import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import { useState } from "react";
import HistoryOrder from "./history-order";

export default function SectionDetail() {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event);
    
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#396143",
              },
              "& .MuiTab-root": {
                color: "#333333",
                fontFamily: "Poppins",
                textTransform: "initial",
                fontSize: 17,
              },
              "& .Mui-selected": {
                color: "#396143",
                fontFamily: "Poppins",
                textTransform: "initial",
                fontWeight: 600,
                fontSize: 17,
              },
            }}
          >
            <Tab label="Historique de la commande" value="1" />
            <Tab label="Details des produits" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <HistoryOrder />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}
