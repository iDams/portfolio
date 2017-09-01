import Section from '../components/Section'
import Title from '../components/Title'
import Project from '../components/Project'

const sectionName = "work"

export default () =>
  <Section htmlID={sectionName}>
    <Title anchor={sectionName}>Work</Title>
    <div
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 -10px'
      }}>
      <Project description="Molotov TV"/>
      <Project description="Molotov TV"/>
      <Project description="Molotov TV"/>
    </div>
    <div
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 -10px'
      }}>
      <Project description="Molotov TV"/>
      <Project description="Molotov TV"/>
    </div>
  </Section>
