import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestApiDataAction } from './duck/actions';

class App extends React.Component {
    componentDidMount() {
        this.props.requestApiDataAction()
    }

    render() {
        console.log('this.props.data', this.props.data);

        return (

            <h1>loading...</h1>
        )
        // const { results = [1] } = this.props.data;
        // return results.length
        //     ? <h1>
        //         {results.map(x => (
        //             <div key={x.id.value}>
        //                 <h3>{x.name.first}</h3>
        //                 <h3>{x.name.last}</h3>
        //                 <img src={x.picture.medium} />
        //             </div>
        //         ))}
        //     </h1>
        //     : <h1>loading...</h1>;
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiDataAction}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)