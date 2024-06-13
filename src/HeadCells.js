import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

// use if other code doesnt work:
{/* <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>Name</TableCell>
<TableCell sx={{ backgroundColor: 'black', color: 'white' }}>Email</TableCell>
<TableCell sx={{ backgroundColor: 'black', color: 'white' }}>Phone Number</TableCell>
<TableCell sx={{ backgroundColor: 'black', color: 'white' }}>Donation Amount</TableCell>
<TableCell sx={{ backgroundColor: 'black', color: 'white' }}>Home Address</TableCell>
<TableCell sx={{ backgroundColor: 'black', color: 'white' }}>Age</TableCell>
<TableCell sx={{ backgroundColor: 'black', color: 'white' }}>Occupation</TableCell>
<TableCell sx={{ backgroundColor: 'black', color: 'white' }}>City</TableCell> */}











export const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: true,
        label: 'Email',
    },
    {
        id: 'phone_number',
        numeric: false,
        disablePadding: true,
        label: 'Phone Number',
    },
    {
        id: 'donationAmount',
        numeric: false,
        disablePadding: true,
        label: 'Donation Amount',
    },
    {
        id: 'homeAddress',
        numeric: false,
        disablePadding: true,
        label: 'Home Address',
    },
    {
        id: 'age',
        numeric: false,
        disablePadding: true,
        label: 'Age',
    },
    {
        id: 'occupation',
        numeric: false,
        disablePadding: true,
        label: 'Occupation',
    },
    {
        id: 'city',
        numeric: false,
        disablePadding: true,
        label: 'City',
    },
]