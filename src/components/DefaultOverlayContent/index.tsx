import { Container, Heading, Buttons } from './styles'

interface Props {
  label: string
  description: string
}

export const DefaultOverlayContent = ({ label, description }: Props) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{label}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  )
}
