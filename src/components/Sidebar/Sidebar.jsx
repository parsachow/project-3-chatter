import { Link } from "react-router-dom";
import {
    Grid,
    Icon,
    Image,
    Menu,
    Sidebar,
  } from 'semantic-ui-react'

export default function SideBar(){
    return(
        <Grid columns={1}>
      <Grid.Column>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible="true"
            width='thin'>
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='bell' />
              Notifications
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='mail' />
              Messages
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='unlock' />
              Logoout
            </Menu.Item>
          </Sidebar>
      </Grid.Column>
    </Grid>
         
    )
}