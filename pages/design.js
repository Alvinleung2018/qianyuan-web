import React from 'react'
import DesignApp from '../components/collectDesign/designApp'

const Design = props => {
    return (<DesignApp collectId={props.collectId}/>)
};


Design.getInitialProps = async ({query}) => {
    return {collectId: query && query.id}
};

export default Design