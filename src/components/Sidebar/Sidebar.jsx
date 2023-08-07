import { Link } from "react-router-dom";
import {
    Grid,
    Icon,
    Menu,
    Sidebar,
  } from 'semantic-ui-react'

export default function SideBar({user, handleLogout}){
    return(
    <Grid columns={1}>
        <Grid.Column>
          <Sidebar
            as={Menu}
            animation='uncover'
            icon='labeled'
            inverted
            vertical
            visible={true}
            width='thin'>
            
            <Menu.Item>
                <Link to={`/${user?.username}`}>
                <Icon name='user' /> Profile
                </Link>
            </Menu.Item>
            <Menu.Item >
                <Link to="/">
                <Icon name='home' />
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link>
                <Icon name='bell' />
                  Notifications
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link>
                <Icon name='mail' />
                  Messages
                </Link>
            </Menu.Item>
            <Menu.Item>
            <Link to="/login" onClick={handleLogout}>
              <Icon name='unlock' />
                Logout
            </Link>
            </Menu.Item>
          </Sidebar>
        </Grid.Column>
    </Grid>
         
    )
}