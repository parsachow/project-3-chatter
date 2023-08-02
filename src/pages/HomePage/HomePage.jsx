import SideBar from "../../components/SideBar/Sidebar"
import AddPostForm from "../../components/AddPostForm/AddPostForm"

import { Grid } from "semantic-ui-react"

export default function HomePage(){
    return(
        <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <AddPostForm />
          </Grid.Column>
        </Grid.Row>
        </Grid>
    )
}