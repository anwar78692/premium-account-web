import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItem = ({ expanded, handleChange, panel, title, subtitle, content }) => (
    <Accordion expanded={expanded} onChange={() =>handleChange(panel)} className='font-bold'>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${panel}-content`} id={`${panel}-header`}>
        <Typography className='font-bold' sx={{ width: '100%', flexShrink: 0 }}>{title}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>{subtitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
  
export default AccordionItem;
