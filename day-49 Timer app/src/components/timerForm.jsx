import { Card, CardContent, Grid, TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function TimerForm({ title, project }) {
    return (
        <div>
            <h1>Timer Form</h1>
            <Grid>
                <Card sx={{ maxWidth: 345, margin: "0, auto" }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField type="text" placeholder={title} label={title} fullWidth={true} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="text" placeholder={project} label={project} fullWidth={true} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button sx={{ width: "50%" }} color={'success'} variant={"outlined"}>Create</Button>
                                    <Button sx={{ width: "50%" }} color={'success'} variant={"outlined"}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}