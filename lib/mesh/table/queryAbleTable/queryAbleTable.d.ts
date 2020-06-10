import * as React from 'react';
import * as PropTypes from "prop-types";


declare class QueryAbleTable<P> extends React.Component<P> {
    static propTypes: {
        host: PropTypes.Requireable<string>
    }
}


export default QueryAbleTable