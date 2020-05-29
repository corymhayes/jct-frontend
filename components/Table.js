import styled from 'styled-components'
import { isBrowser } from 'react-device-detect'

const TableContainer = styled.div`
  display: grid;
  grid-template: auto / 1fr;
  width: 50%;
`

const MobileTableContainer = styled.div`
  display: grid;
  grid-template: auto / 1fr;
  width: 75%;
`

const Table = props => (
  isBrowser ?
    <TableContainer>
      {props.children}
    </TableContainer>
  :
    <MobileTableContainer>
      {props.children}
    </MobileTableContainer>
)


export default Table