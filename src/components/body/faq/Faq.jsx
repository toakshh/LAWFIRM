import { Box, Container, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useState } from "react";

const Faq = () => {
  const [expanded, setExpanded] = useState('one');

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(() => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    padding:'30px',
    color: 'white',
    '&:not(:last-child)': {
      borderBottom: '2px solid #ffffff08',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<AddRoundedIcon sx={{ fontSize: '2rem', backgroundColor: 'var(--theme)', borderRadius: '50%', color: 'black' }} />}
      {...props}
    />
  ))(({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      display: 'none',
    }
  }));
  const AccordionDetails = styled(MuiAccordionDetails)({
    padding: "30px",
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const accData= [{
    id:"random-rts",
    question: "Do I need a personal injury report?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit rerum maiores modi dolorum tenetur ab sit quos? Harum praesentium voluptatum hic."
  },
  {
    id:"random-ffpf",
    question: "How much is my case worth?  ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit rerum maiores modi dolorum tenetur ab sit quos? Harum praesentium voluptatum hic."
  },
  {
    id:"random-asta",
    question: "What should I do right after car accidect",
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit rerum maiores modi dolorum tenetur ab sit quos? Harum praesentium voluptatum hic.",
  },
  {
    id:"random-htdsrt",
    question: "How much is my case worth?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit rerum maiores modi dolorum tenetur ab sit quos? Harum praesentium voluptatum hic.",
  },
 
]

  return (
    <Box sx={{
      display: 'flex', margin: '5vh 8vw', gap: '10px', '@media (max-width:824px)': {
        flexDirection: 'column', margin: '20px',
      }
    }}>
      <Container sx={{
        width: '50%', '@media (max-width:824px)': {
          width: '100%',
          display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
        }
      }}>
        <Typography variant="h2" sx={{ fontWeight: '600', margin: '25px 0' }}>FAQ</Typography>
        <Typography sx={{ opacity: '0.3', fontSize: '1rem', fontWeight: '500', width: '60%', padding: '0 0 30px 0', '@media (max-width:600px)': { width: '100%' } }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quis .</Typography>
      </Container>

      <Container sx={{
        width: '50%',
        '@media (max-width:824px)': {
          width: '100%'
        }
      }}>
          {
            accData.map(each=>{
              return (
                <Accordion key={each.id} expanded={expanded === each.id} onChange={handleChange(each.id)}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography sx={{
                fontWeight: '600',
                fontSize: '24px',
              }}>{each.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{fontsize:'18px', fontWeight:'500',opacity:'0.3'}}>
                {each.answer}
              </Typography>
            </AccordionDetails>
        </Accordion>
            )
            })
          }

      </Container>
    </Box>
  )
}

export default Faq