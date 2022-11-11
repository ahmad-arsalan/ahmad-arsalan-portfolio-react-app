import Education from '../components/Education/Education';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Stack from '../components/Stack/Stack';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About />
       <Stack />
       <Experience />
      <Education />
      <Projects />
    </Layout>
  );
};

export default Home;
