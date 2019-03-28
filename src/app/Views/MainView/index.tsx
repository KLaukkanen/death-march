import * as React from 'react'
import* as PropTypes from 'prop-types'
import { Grid, Column } from '../../Components/Grid'
import styled from 'styled-components'
const Div = styled.div`
    background-color: red
`;

export default function MainView(props) {
    return (<Grid><Column>div</Column><Column>div</Column></Grid>)
}
