import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {
    category: 'Perks',
    perk1: 'LinkedIn profile building',
    perk2: '24/7 Support',
    perk3: 'Internship Completion Certificate',
    perk4: 'Capstone Project Intensive',
  },
  {
    category: 'Commitment',
    details: '5-6 hours a week/1 month',
  },
  {
    category: 'Ideal For',
    details: 'Students pursuing any technical/managerial field at a graduate/undergraduate level',
  },
  {
    category: 'Pricing',
    details: 'Free*',
  },
];

const tableStyle = {
  minWidth: 200,
  border: '1px solid white', // Add border to the table
};

const cellStyle = {
  fontSize: '14px',
  padding: '8px',
  color: 'white',
  border: '1px solid #2468ec', // Add border to the cells
};

const boldCellStyle = {
  ...cellStyle,
  fontWeight: 'bold', // Make text bold
};

const containerStyle = {
  width: '40%',
  float: 'left',
  marginRight: '20px',
};
const transparentPaperStyle = {
  background: 'transparent',
  boxShadow: 'none',
};

export default function BT() {
  return (
    <div style={containerStyle}>
      <TableContainer component={Paper} style={transparentPaperStyle}>
        <Table sx={tableStyle} aria-label="simple table">
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  style={
                    row.category === 'Perks'
                      ? boldCellStyle
                      : row.category === 'Commitment' || row.category === 'Ideal For' || row.category === 'Pricing'
                      ? boldCellStyle
                      : cellStyle
                  }
                >
                  {row.category}
                </TableCell>
                {row.details ? (
                  <TableCell align="left" colSpan={5} style={cellStyle}>
                    {row.details}
                  </TableCell>
                ) : (
                  <>
                    <TableCell
                      align="left"
                      style={{
                        ...cellStyle,
                        borderBottom: '1px solid #2468ec', // Change border color
                        borderTop: row.perk1 === 'LinkedIn profile building' ? '1px solid #2468ec' : '1px solid white', // Change border color
                      }}
                    >
                      {row.perk1}
                    </TableCell>
                    <TableCell align="left" style={cellStyle}>{row.perk2}</TableCell>
                    <TableCell align="left" style={cellStyle}>{row.perk3}</TableCell>
                    <TableCell align="left" style={cellStyle}>{row.perk4}</TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
