import Section from '../components/Section'
import Title from '../components/Title'

const sectionName = ""

export default () => {
  return (
    <Section htmlID={sectionName}>
      <Title anchor={sectionName}>Hello</Title>
      <p css={{ margin: 0 }}>I'm <span css={{ fontSize: '24px' }}>Damien Soulard</span></p>
      <p css={{ color: '#4CAF50', fontWeight: '500' }}>Front-end developer</p>
      <p>Freelance, React, React-Native, development web and mobile</p>
      <p>Social Networks</p>
    </Section>
  )
}
