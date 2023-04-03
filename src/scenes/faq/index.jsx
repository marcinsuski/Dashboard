import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Box } from "@mui/system";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            {/* QUESTION 1 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus beatae impedit amet. Quae nesciunt
                        dignissimos praesentium, architecto iste assumenda
                        recusandae!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* QUESTION 2 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus beatae impedit amet. Quae nesciunt
                        dignissimos praesentium, architecto iste assumenda
                        recusandae!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* QUESTION 3 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Yet another question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus beatae impedit amet. Quae nesciunt
                        dignissimos praesentium, architecto iste assumenda
                        recusandae!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* QUESTION 4 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The final question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus beatae impedit amet. Quae nesciunt
                        dignissimos praesentium, architecto iste assumenda
                        recusandae!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
