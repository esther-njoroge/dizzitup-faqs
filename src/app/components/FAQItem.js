// import { useState } from 'react';
// import { Box, Typography, IconButton, Collapse } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function FAQItem({ question, answer }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <Box sx={{ border: '1px solid #ddd', borderRadius: 2, mb: 2, p: 2 }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Typography variant="h6">{question}</Typography>
//         <IconButton onClick={() => setOpen(!open)}>
//           <ExpandMoreIcon />
//         </IconButton>
//       </Box>
//       <Collapse in={open}>
//         <Typography sx={{ mt: 1 }}>{answer}</Typography>
//       </Collapse>
//     </Box>
//   );
// }



// second

import { useState } from 'react';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ border: '1px solid #ddd', borderRadius: 2, mb: 2, p: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{question}</Typography>
        <IconButton onClick={() => setOpen(!open)}>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Collapse in={open}>
        <Typography sx={{ mt: 1 }}>{answer}</Typography>
      </Collapse>
    </Box>
  );
}
