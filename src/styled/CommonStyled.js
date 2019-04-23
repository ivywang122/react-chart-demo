import styled, {css} from 'styled-components'

export const Block = styled.div`
  padding: 40px 0;
  background-color: ${props => props.color ? props.color : props.theme.colors.gray200};
  h2{
    color: ${props => props.color ? props.theme.colors.gray200 : null};
  }
  ${props => {
    if (props.center) {
      return css`
        .recharts-wrapper{ margin: auto; }
      `
    }
  }}
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: .8em;
  text-align: ${props => props.center ? 'center' : 'left'};
`;