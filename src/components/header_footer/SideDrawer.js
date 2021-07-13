import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';

const SideDrawer = ({ open, onClose }) => {
  const links = [
    { where: 'featured', value: 'To top' },
    { where: 'venuenfo', value: 'Venue NFO' },
    { where: 'highlights', value: 'Highlights' },
    { where: 'pricing', value: 'pricing' },
    { where: 'location', value: 'Location' },
  ];

  const renderItem = (item) => (
    <ListItem button onClick={() => alert(item.where)} key={item.where}>
      {item.value}
    </ListItem>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        onClose(false);
      }}
    >
      <List component="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
};

export default SideDrawer;

// note side drawer ancor = disebelah mana dimunculkan
//onClose value onclose dikrim ke parent element untuk menset open jadi false
