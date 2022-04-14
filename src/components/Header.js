import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import './Header.css';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                Hell Shopping
            </Typography>
            <Link to="/">
                <Button type="button" className="btn btn-outline-dark">Home</Button>
            </Link>
            <Link to="/contato" style={{textDecoration: "none"}}>
                <Button type="button" className="btn btn-outline-dark">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
