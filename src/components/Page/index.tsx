import { DefaultOverlayContent } from '../DefaultOverlayContent'
import { ModelsWrapper, ModelSection } from '../Model'
import { UniqueOverlay } from '../UniqueOverlay'

import { Container } from './styles'

export const Page = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}
