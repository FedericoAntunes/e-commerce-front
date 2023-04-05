import { Grid } from "@mui/material";

export default function AboutThisProject() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2 className="text-2xl font-bold mb-4">About this project:</h2>
          <p className="mb-4 w-1/2 mx-auto">
            Welcome to our ecommerce platform! We used cutting-edge technologies
            like NodeJS, ExpressJS, ReactJS, MaterialUI, Tailwind, and MySQL to
            create a fast, scalable, efficient, and visually appealing platform.
            Our goal is to provide a secure and easy-to-use shopping experience
            for our customers. This platform is the final project of a 600+
            hours coding bootcamp at Hack Academy, developed by a team of highly
            trained developers committed to staying up-to-date with the latest
            industry trends and emerging technologies.
          </p>
        </Grid>
      </Grid>
    </>
  );
}
