import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { lapLayout } from './LaptopStyle';
import { contantS } from './LaptopStyle';
import { container } from '../Header/headerStyle';
import { img } from './LaptopStyle';
import { H1 } from './LaptopStyle';
import { botton } from './LaptopStyle';
import { P } from './LaptopStyle';
import { dataS } from './LaptopStyle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRight from '@mui/icons-material/ArrowRightAlt';

const Laptop = ()=>{
   return (
    <Box  sx={lapLayout} >
       <Container  sx={container} >
           <Box sx={contantS}>
               <Box sx={img}>

               </Box>
               <Box sx={dataS}>
                     <Typography  sx={H1} variant="h1" component="h3" >
                                   360 site view experience
                     </Typography>

                     <Typography  sx={P} variant="p" component="p" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                            nulla repudiandae neque ut labore quae, reiciendis commodi rem, impedit, 
                            voluptatum non quia optio at distinctio dolore aliquam. Optio, alias suscipit. 
                      </Typography>
                      <Button sx={botton} variant="outlined" color="secondary" >
                        Try now <ArrowRight />
                     </Button>
 
               </Box>
            </Box>
      </Container>
    </Box>
   )}

export default Laptop