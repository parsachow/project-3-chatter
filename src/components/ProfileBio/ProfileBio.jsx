import { Grid, Image, Segment } from "semantic-ui-react"


export default function ProfileBio({user}){
    return(
        <Grid textAlign='center' columns={2}>
            <Grid.Row >
                <Grid.Column style={{ maxWidth: 600}}>
                    <Segment>
                        <Image circular src={`${user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} `} avatar size='small' />
                        <Segment textAlign="left">
                            <h3>Name: {user.username}</h3>
                        </Segment>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
    
}