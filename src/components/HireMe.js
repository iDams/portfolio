import Section from '../components/Section'
import Title from '../components/Title'

const sectionName = "hireme"

export default () => {
  return (
    <Section htmlID={sectionName}>
      <Title anchor={sectionName}>Hire me</Title>
    </Section>
  )
}
