import {About, Contact, GitHubActivity, Hero, Interest, Project, Skill, Certificate} from "../";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Project />
      <GitHubActivity />
      <Certificate />
      <Interest />
      <Contact />
    </>
  );
}

export default Home;