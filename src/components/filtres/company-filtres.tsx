import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import "./style.css";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

export default function CompanyFiltres() {
  const company = [
    "Company 1",
    "Company 2",
    "Company 3",
    "Company 4",
    "Company 5",
    "Company 6",
    "Company 7",
    "Company 8",
    "Company 9",
    "Company 10",
  ];

  const [showMore, setShowMore] = useState(false);
  const itemsToShow = 4;

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Stack gap={1}>
      <Typography
        variant="body1"
        sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
      >
        Vendeur
      </Typography>
      <div className="search-company-filtre">
        <input type="text" placeholder="Rechercher un vendeur" />
      </div>
      <Stack>
        {/* {company.map((item, index) => (
          <FormGroup key={index}>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontWeight: 500 }}
                >
                  {item}
                </Typography>
              }
            />
          </FormGroup>
        ))} */}

        {company.slice(0, itemsToShow).map((item, index) => (
          <FormGroup key={index}>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontWeight: 500 }}
                >
                  {item}
                </Typography>
              }
            />
          </FormGroup>
        ))}

        {/* Affichage du reste des items si le bouton est cliqué */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: -20 }} // Animation d'apparition (fade-in et slide)
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} // Animation de disparition
              transition={{ duration: 0.3 }} // Durée de l'animation
            >
              {company.slice(itemsToShow).map((item, index) => (
                <FormGroup key={itemsToShow + index}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: "Poppins", fontWeight: 500 }}
                      >
                        {item}
                      </Typography>
                    }
                  />
                </FormGroup>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {company.length > itemsToShow && (
          <Stack
            sx={{ mt: 1.2, color: "#1976D2", cursor: "pointer" }}
            direction="row"
            gap={1}
            onClick={toggleShowMore}
          >
            <Icon
              icon={showMore ? "mingcute:up-line" : "mingcute:down-line"}
              width={20}
            />
            <Typography
              variant="body2"
              sx={{ fontFamily: "Poppins", fontWeight: 500 }}
            >
              {showMore
                ? "Afficher moins"
                : `Afficher plus (${company.length - itemsToShow})`}
            </Typography>
          </Stack>
          // <Button onClick={toggleShowMore} sx={{ marginTop: 2 }}>
          //   {showMore ? 'Afficher moins' : `Afficher plus (${company.length - itemsToShow})`}
          // </Button>
        )}
      </Stack>
    </Stack>
  );
}
